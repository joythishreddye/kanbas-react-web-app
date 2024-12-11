import {AiOutlineFileText} from "react-icons/ai";
import {RiSearchLine} from "react-icons/ri";
import LessonControlButtons from "../Modules/LessonControlButtons";
import {BsGripVertical, BsPlus} from "react-icons/bs";
import {IoEllipsisVertical} from "react-icons/io5";
import {useParams} from "react-router";
import {deleteAssignment} from "./reducer";
import {useDispatch, useSelector} from "react-redux";
import {FaPlus} from "react-icons/fa6";
import {Link} from "react-router-dom";
import {FaTrash} from "react-icons/fa";
import Faculty from "../Faculty";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";
import {useEffect} from "react";
import {setAssignments} from "./reducer";
import {useCallback} from "react";

export default function Assignments() {
    const {cid} = useParams();
    const dispatch = useDispatch();

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${month}-${day}-${year}`;
    };

    const {assignments} = useSelector((state: any) => state.assignmentsReducer);
    const {currentUser} = useSelector((state: any) => state.accountReducer);

    const handleDelete = async (assignmentId: string) => {
        if (window.confirm("Are you sure you want to remove this assignment?")) {
            await assignmentsClient.deleteAssignment(assignmentId);
            dispatch(deleteAssignment(assignmentId));
        }
    };
    const fetchAssignments = useCallback(async () => {
        const assignments = await coursesClient.findAssignmentsForCourse(
            cid as string
        );
        dispatch(setAssignments(assignments));
    }, [dispatch, cid]);

    useEffect(() => {
        fetchAssignments();
    }, [fetchAssignments]);

    return (
        <div id="wd-assignments">
            <div className="container mt-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="position-relative">
                        <span><RiSearchLine className="search-icon"/></span>
                        <input id="wd-search-assignment" className="form-control"
                               placeholder="Search..." style={{paddingLeft: "30px"}}
                        />
                    </div>

                    <Faculty>
                        <div>
                            <button id="wd-add-assignment-group"
                                    className="btn btn-outline-secondary me-2">
                                <BsPlus className="fs-2"/>
                                Group
                            </button>
                            <Link to={`/Kanbas/Courses/${cid}/Assignments/New`}
                                  className="btn btn-lg btn-danger me-1 float-end"
                            >
                                <FaPlus className="me-2 fs-5"/> Assignment
                            </Link>
                        </div>
                    </Faculty>
                </div>

                <div className="wd-bg-color-gray-light p-3 border border-dark">
                    <h3 className="mb-0">
                        <BsGripVertical className="me-2 fs-1"/>
                        ASSIGNMENTS
                        <div className="float-end">
                            <button className="btn btn-outline-secondary rounded-pill me-2">
                                40% of Total
                            </button>
                            <BsPlus className="fs-2"/>
                            <IoEllipsisVertical className="fs-4"/>
                        </div>
                    </h3>
                </div>

                <ul id="wd-assignment-list" className="list-group rounded-0">
                    {assignments.length === 0 ? (
                        <li className="list-group-item p-3">
                            There are no assignments available for this course.
                        </li>
                    ) : (
                        assignments.map((assignment: any) => (
                            <li
                                key={assignment._id}
                                className="wd-assignment-list-item list-group-item p-3 ps-2 border-bottom d-flex align-items-start align-items-center"
                            >
                                <div className="me-3">
                                    <BsGripVertical className="me-1 large-icon"/>
                                    <AiOutlineFileText className="text-success large-icon"/>
                                </div>
                                <div className="flex-grow-1">
                                    <div
                                        className="d-flex justify-content-between align-items-center">
                                        <div>
                                            {currentUser.role === "FACULTY" ||
                                            currentUser.role === "ADMIN" ? (
                                                <a
                                                    className="wd-assignment-link text-black"
                                                    href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                                >
                                                    {assignment.title}
                                                </a>
                                            ) : (
                                                <span className="wd-assignment-title text-black">
                                                    {assignment.title}
                                                </span>
                                            )}
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <Faculty>
                                                <FaTrash className="text-danger me-3"
                                                         style={{cursor: "pointer"}}
                                                         onClick={() => handleDelete(assignment._id)}
                                                />
                                            </Faculty>
                                            <LessonControlButtons/>
                                        </div>
                                    </div>
                                    <p>
                                        <span className="red">Multiple Modules</span> |{" "}
                                        <strong>Not available until</strong>{" "}
                                        {formatDate(assignment.availableFrom)}
                                    </p>
                                    <p>
                                        <strong>Due</strong> {formatDate(assignment.availableUntil)} | {assignment.points} pts
                                    </p>
                                </div>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
}