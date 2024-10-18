import {AiOutlineFileText} from "react-icons/ai";
import {RiSearchLine} from "react-icons/ri";
import LessonControlButtons from "../Modules/LessonControlButtons";
import {BsGripVertical, BsPlus} from "react-icons/bs";
import {IoEllipsisVertical} from "react-icons/io5";
import {useParams} from "react-router";
import * as db from "../../Database";

export default function Assignments() {
    const {cid} = useParams();
    const courseAssignments = db.assignments.filter((assignment) => assignment.course === cid);

    function formatDate(inputDate: string | number | Date) {
        const dateOptions: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
        const dateInstance = new Date(inputDate);

        const formattedTime = dateInstance
            .toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true
            })
            .toLowerCase();

        const formattedDate = dateInstance.toLocaleDateString("en-US", dateOptions);

        return `${formattedDate} at ${formattedTime}`;
    }

    return (
        <div id="wd-assignments">
            <div className="container mt-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="position-relative">
                        <span>
                            <RiSearchLine className="search-icon"/>
                        </span>
                        <input
                            id="wd-search-assignment"
                            className="form-control"
                            placeholder="Search..."
                            style={{paddingLeft: "30px"}}
                        />
                    </div>

                    <div>
                        <button id="wd-add-assignment-group"
                                className="btn btn-outline-secondary me-2">
                            <BsPlus className="fs-2"/>
                            Group
                        </button>
                        <button id="wd-add-assignment" className="btn btn-danger">
                            <BsPlus className="fs-2"/>
                            Assignment
                        </button>
                    </div>
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
                    {courseAssignments.length === 0 ? (
                        <li className="list-group-item p-3">
                            There are no assignments available for this course.
                        </li>
                    ) : (
                        courseAssignments.map((assignment) => (
                            <li
                                key={assignment._id}
                                className="wd-assignment-list-item list-group-item p-3 ps-2 border-bottom d-flex align-items-start align-items-center"
                            >
                                <div className="me-3">
                                    <BsGripVertical className="me-1 large-icon"/>
                                    <AiOutlineFileText className="text-success large-icon"/>
                                </div>
                                <div className="flex-grow-1">
                                    <div className="d-flex justify-content-between">
                                        <a
                                            className="wd-assignment-link"
                                            href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                        >
                                            {assignment.title}
                                        </a>
                                        <LessonControlButtons/>
                                    </div>
                                    <p>
                                        <span className="red">Multiple Modules</span> |{" "}
                                        <strong>Not available until</strong>{" "}
                                        {formatDate(assignment.available)}
                                    </p>
                                    <p>
                                        <strong>Due</strong> {formatDate(assignment.due)} | {assignment.points} pts
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