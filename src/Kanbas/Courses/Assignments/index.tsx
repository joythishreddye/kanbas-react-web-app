import {FaPlus, FaEllipsisV} from "react-icons/fa";
import {AiOutlineFileText} from "react-icons/ai";
import {RiSearchLine} from "react-icons/ri";
import LessonControlButtons from "../Modules/LessonControlButtons";
import {BsGripVertical, BsPlus} from "react-icons/bs";
import {IoEllipsisVertical} from "react-icons/io5";

export default function Assignments() {
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
                            style={{paddingLeft: '30px'}}
                        />
                    </div>

                    <div>
                        <button
                            id="wd-add-assignment-group"
                            className="btn btn-outline-secondary me-2">
                            <BsPlus className="fs-2"/>
                            Group
                        </button>
                        <button
                            id="wd-add-assignment"
                            className="btn btn-danger">
                            <BsPlus className="fs-2"/>
                            Assignment
                        </button>
                    </div>
                </div>

                <div className="bg-light p-3 border border-dark">
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
                    <li className="wd-assignment-list-item list-group-item p-3 ps-2 border-bottom d-flex align-items-start align-items-center">
                        <div className="me-3">
                            <BsGripVertical className="me-1 large-icon"/>
                            <AiOutlineFileText className="text-success large-icon"/>
                        </div>
                        <div className="flex-grow-1">
                            <div className="d-flex justify-content-between">
                                <a className="wd-assignment-link"
                                   href="#/Kanbas/Courses/1234/Assignments/123">
                                    A1
                                </a>
                                <LessonControlButtons/>
                            </div>
                            <p>
                            <span className="red">Multiple Modules</span> |{" "}
                                <strong>Not available until</strong> May 6 at 12.00 am |
                            </p>
                            <p>
                                <strong>Due</strong> May 13 at 11:59 pm | 100 pts
                            </p>
                        </div>
                    </li>

                    <li className="wd-assignment-list-item list-group-item p-3 ps-2 border-bottom d-flex align-items-start align-items-center">
                        <div className="me-3">
                            <BsGripVertical className="me-1 large-icon"/>
                            <AiOutlineFileText className="text-success large-icon"/>
                        </div>
                        <div className="flex-grow-1">

                            <div className="d-flex justify-content-between">
                                <a className="wd-assignment-link"
                                   href="#/Kanbas/Courses/1234/Assignments/123">
                                    A2
                                </a>
                                <LessonControlButtons/>
                            </div>
                            <p>
                                <span className="red">Multiple Modules</span> |{" "}
                                <strong>Not available until</strong> May 13 at 12.00 am |
                            </p>
                            <p>
                                <strong>Due</strong> May 20 at 11:59 pm | 100 pts
                            </p>
                        </div>
                    </li>

                    <li className="wd-assignment-list-item list-group-item p-3 ps-2 border-bottom d-flex align-items-start align-items-center">
                        <div className="me-3">
                            <BsGripVertical className="me-1 large-icon"/>
                            <AiOutlineFileText className="text-success large-icon"/>
                        </div>
                        <div className="flex-grow-1">
                            <div className="d-flex justify-content-between">
                                <a className="wd-assignment-link"
                                   href="#/Kanbas/Courses/1234/Assignments/123">
                                    A3
                                </a>
                                <LessonControlButtons/>
                            </div>
                            <p>
                                <span className="red">Multiple Modules</span> |{" "}
                                <strong>Not available until</strong> May 20 at 12.00 am |
                            </p>
                            <p>
                                <strong>Due</strong> May 27 at 11:59 pm | 100 pts
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}