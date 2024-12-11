import {Routes, Route, Navigate, useParams, useLocation} from "react-router";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import CoursesNavigation from "./Navigation";
import AssignmentEditor from "./Assignments/Editor";
import {FaAlignJustify} from "react-icons/fa";
import PeopleTable from "./People/Table";
import AddAssignment from "./Assignments/AddAssignment";
import { useState, useEffect } from "react";
import { findUsersForCourse } from "./client";
import Quizzes from "./Quizzes";
import QuizDetails from "./Quizzes/QuizDetails";
import QuizEditor from "./Quizzes/QuizEditor";
import QuizQuestionEditor from "./Quizzes/QuizQuestionEditor";
import QuizScreen from "./Quizzes/QuizScreen";

export default function Courses({courses}: { courses: any[] }) {
    const {cid} = useParams();
    const course = courses.find((course) => course._id === cid);
    const {pathname} = useLocation();
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            if (cid) {
                const users = await findUsersForCourse(cid);
                setUsers(users);
            }
        };
        if (cid) {
            fetchUsers();
        }
    }, [cid, users]);

    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1"/> {course && course.name}{" "}
                &gt;{pathname.split("/")[4]}
            </h2>{" "}
            <hr/>
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CoursesNavigation/>
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home"/>}/>
                        <Route path="Home" element={<Home/>}/>
                        <Route path="Modules" element={<Modules/>}/>
                        <Route path="Assignments" element={<Assignments/>}/>
                        <Route path="Assignments/New" element={<AddAssignment/>}/>
                        <Route path="Assignments/:aid" element={<AssignmentEditor/>}/>
                        <Route path="Quizzes" element={<Quizzes />} />
                        <Route path="Quizzes/:qid" element={<QuizDetails />} />
                        <Route path="Quizzes/:qid/Editor" element={<QuizEditor />} />
                        <Route path="Quizzes/:qid/QuestionsEditor" element={<QuizQuestionEditor />} />
                        <Route path="Quizzes/:qid/QuizScreen/preview" element={<QuizScreen preview={true}/>} />
                        <Route path="Quizzes/:qid/QuizScreen" element={<QuizScreen preview={false}/>} />
                        <Route path="People" element={<PeopleTable users={users} />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

