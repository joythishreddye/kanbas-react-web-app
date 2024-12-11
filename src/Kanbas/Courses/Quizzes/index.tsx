import {BsGripVertical, BsPlus} from "react-icons/bs";
import {TfiWrite} from "react-icons/tfi";
import {useNavigate, useParams} from "react-router-dom";
import Faculty from "../Faculty";
import {useDispatch, useSelector} from "react-redux";
import {IoEllipsisVertical} from "react-icons/io5";
import {addQuiz, setQuizzes, updateQuiz} from "./reducer";
import GreenCheckmark from "../Modules/GreenCheckmark";
import {TiCancel} from "react-icons/ti";
import Students from "../Students";
import ContextMenu from "./ContextMenu";
import * as coursesClient from "../client"
import * as quizClient from "./client"
import {useEffect, useState} from "react";
import {RiSearchLine} from "react-icons/ri";

export default function Quizzes() {
    const {cid} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${month}-${day}-${year}`;
    };

    const {quizzes} = useSelector((state: any) => state.quizzesReducer);

    const filteredQuizzes = quizzes.filter((quiz: {
        course: string | undefined;
    }) => quiz.course === cid);

    const [questionCounts, setQuestionCounts] = useState<{ [key: string]: number }>({});

    const fetchAllQuestionCounts = async () => {
        const counts: { [key: string]: number } = {};
        for (const quiz of quizzes) {
            counts[quiz._id] = await fetchQuestionNumber(quiz._id);
        }
        setQuestionCounts(counts);
    };

    const fetchQuestionNumber = async (qid: string) => {
        const questions = await quizClient.findQuestionForQuiz(qid);
        return questions.length;
    };

    function getQuizAvailability(qid: string): string {
        // Find the quiz by its ID
        const quiz = filteredQuizzes.find((q: { _id: string; }) => q._id === qid);
        if (!quiz) {
            return "Quiz not found";
        }
        // Convert date strings to Date objects
        const currentDate = new Date();
        const availableDate = new Date(quiz.available_date);
        const availableUntilDate = new Date(quiz.available_until_date);

        // Determine availability based on the current date
        if (currentDate < availableDate) {
            return `Not available until ${availableDate.toLocaleDateString()}`;
        } else if (currentDate >= availableDate && currentDate <= availableUntilDate) {
            return "Available";
        } else {
            return "Closed";
        }
    }

    const fetchQuizzes = async () => {
        const quizzes = await coursesClient.findQuizForCourse(cid as string);
        dispatch(setQuizzes(quizzes));
    };
    useEffect(() => {
        fetchQuizzes();
        fetchAllQuestionCounts();
    }, []);

    const createQuizForCourse = async () => {
        if (!cid) return;
        const newQuiz = {
            title: 'New Quiz',
            description: '',
            course: cid,
            type: 'Graded Quiz',
            points: '100',
            group: 'Quizzes',
            shuffle_answers: true,
            time_limit: '20',
            has_time_limit: true,
            multiple_attempts: false,
            attempts: 1,
            show_correct: false,
            access_code: '',
            one_question_at_a_time: true,
            webcam_required: false,
            lock_questions_after_answering: false,
            due_date: '',
            available_date: '',
            available_until_date: ''
        }
        const quiz = await coursesClient.createQuizForCourse(cid, newQuiz);
        dispatch(addQuiz(quiz));
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`, {state: {isNewQuiz: true}});
    };

    const saveQuiz = async (quiz: any) => {
        await quizClient.updateQuiz(quiz);
        dispatch(updateQuiz(quiz));
    };


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
                            <button id="wd-add-quiz"
                                    onClick={() => {
                                        createQuizForCourse()
                                    }}
                                    className="btn btn-lg btn-danger me-1 float-end">
                                + Quiz
                            </button>
                        </div>
                    </Faculty>
                </div>

                <div className="wd-bg-color-gray-light p-3 border border-dark">
                    <h3 className="mb-0">
                        <BsGripVertical className="me-2 fs-1"/>
                        QUIZZES
                        <div className="float-end">
                            <button className="btn btn-outline-secondary rounded-pill me-2">
                                40% of Total
                            </button>
                            <BsPlus className="fs-2"/>
                            <IoEllipsisVertical className="fs-4"/>
                        </div>
                    </h3>
                </div>

                <ul id="wd-modules" className="list-group rounded-0">
                    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">

                        <Faculty>
                            <ul className="wd-assignments list-group rounded-0 ">
                                {filteredQuizzes.length === 0 ?
                                    <p className="list-group-item p-3">Click "+ Quiz" to
                                        create a new quiz</p>
                                    : <></>}
                                {filteredQuizzes.map((quiz: {
                                    _id: string;
                                    title: string;
                                    description: string;
                                    course: string;
                                    type: string;
                                    points: string;
                                    group: string;
                                    shuffle_answers: boolean;
                                    time_limit: string;
                                    has_time_limit: boolean;
                                    multiple_attempts: boolean;
                                    attempts: string;
                                    show_correct: boolean;
                                    access_code: string;
                                    one_question_at_a_time: boolean;
                                    webcam_required: boolean;
                                    lock_questions_after_answering: boolean;
                                    due_date: string;
                                    available_date: string;
                                    available_until_date: string;
                                    published: boolean;
                                }) => {
                                    const modalId = `modal-${quiz._id}`;
                                    return (
                                        <li className="wd-assignment-link list-group-item p-3 ps-1 d-flex justify-content-between align-items-center"
                                            key={quiz._id}>
                                            <button
                                                onClick={() => {
                                                    navigate(`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`, {state: {isNewQuiz: false}});
                                                }}
                                                className="wd-assignment text-reset text-decoration-none d-flex align-items-center btn btn-link text-start">
                                                <BsGripVertical className="me-1 large-icon"/>
                                                <TfiWrite className="text-success large-icon"/>
                                                <span className="wd-assignment-text ms-3">
                                            <b>{quiz.title}</b>
                                            <br/>
                                            <span
                                                className="text-danger"> <b>{getQuizAvailability(quiz._id)}</b> </span> | {questionCounts[quiz._id]} Questions <br/>
                                            <b> Due</b> {formatDate(quiz.due_date)} | {quiz.points} pts
                                        </span>
                                            </button>
                                            <div className="d-flex align-items-center">
                                                <div className="float-end">
                                                    <button className="btn btn-default p-0"
                                                            onClick={() => {
                                                                saveQuiz({
                                                                    ...quiz,
                                                                    published: !quiz.published
                                                                })
                                                            }
                                                            }>
                                                        {!quiz.published ?
                                                            <TiCancel className="fs-3"/> :
                                                            <GreenCheckmark/>}
                                                    </button>
                                                    <button id={`context-menu-btn-${quiz._id}`}
                                                            className="btn btn-default ms-2 fs-5"
                                                            data-bs-toggle="modal"
                                                            data-bs-target={`#modal-${quiz._id}`}>
                                                        <IoEllipsisVertical className="fs-4"/>
                                                    </button>
                                                </div>

                                                <ContextMenu dialogTitle={`Quiz Context Menu`}
                                                             modalId={modalId} quiz={quiz}/>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </Faculty>
                        <Students>
                            <ul className="wd-assignments list-group rounded-0">
                                {filteredQuizzes.map((quiz: {
                                        _id: string;
                                        title: string;
                                        description: string;
                                        course: string;
                                        type: string;
                                        points: string;
                                        group: string;
                                        shuffle_answers: boolean;
                                        time_limit: string;
                                        has_time_limit: boolean;
                                        multiple_attempts: boolean;
                                        attempts: string;
                                        show_correct: boolean;
                                        access_code: string;
                                        one_question_at_a_time: boolean;
                                        webcam_required: boolean;
                                        lock_questions_after_answering: boolean;
                                        due_date: string;
                                        available_date: string;
                                        available_until_date: string;
                                        published: boolean;
                                    }) =>
                                        quiz.published ? (
                                            <li
                                                key={quiz._id} // Always include a unique key in lists
                                                className="wd-assignment-link list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                                                <button
                                                    onClick={() => {
                                                        navigate(`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}/QuizScreen`);
                                                    }}
                                                    className="wd-assignment text-reset text-decoration-none d-flex align-items-center btn btn-link text-start">
                                                    <BsGripVertical className="me-1 large-icon"/>
                                                    <TfiWrite
                                                        className="text-success large-icon"/>
                                                    <span className="wd-assignment-text ms-3">
                                                <b>{quiz.title}</b>
                                                <br/>
                                                <span
                                                    className="text-danger"> <b>{getQuizAvailability(quiz._id)}</b> </span> | {questionCounts[quiz._id]} Questions <br/>
                                                <b> Due</b> {formatDate(quiz.due_date)} | {quiz.points} pts | Score {95}
                                            </span>
                                                </button>
                                                <div className="d-flex align-items-center">
                                                    <div className="float-end">
                                                        <GreenCheckmark/>
                                                        <IoEllipsisVertical className="fs-4"/>
                                                    </div>
                                                </div>
                                            </li>
                                        ) : null
                                )}
                            </ul>

                        </Students>
                    </li>
                </ul>
            </div>
        </div>
    );

}