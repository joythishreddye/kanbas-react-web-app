import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Faculty from "./Courses/Faculty";
import Students from "./Courses/Students";
import { enrollCourse, unenrollCourse, setEnrollments } from "./Courses/Enrollments/reducer";
import { fetchAllCourses } from "./Courses/client";
import * as enrollmentsClient from "./Courses/Enrollments/client";

export default function Dashboard({
                                      courses,
                                      course,
                                      setCourse,
                                      addNewCourse,
                                      deleteCourse,
                                      updateCourse,
                                  }: {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: string) => void;
    updateCourse: () => void;
}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const dispatch = useDispatch();
    const [showAllCourses, setShowAllCourses] = useState(false);
    const [allCourses, setAllCourses] = useState<any[]>([]);

    useEffect(() => {
        if (showAllCourses) {
            fetchAllCourses().then((data) => setAllCourses(data));
        }
    }, [showAllCourses]);

    const handleEnroll = async (courseId: string) => {
        try {
            await enrollmentsClient.enrollUser({
                userId: currentUser._id,
                courseId,
            });
            dispatch(enrollCourse({ userId: currentUser._id, courseId }));
        } catch (error) {
            console.error("Failed to enroll:", error);
        }
    };

    const handleUnenroll = async (courseId: string) => {
        try {
            await enrollmentsClient.unenrollUser({
                user: currentUser._id,
                course: courseId,
            });
            dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
        } catch (error) {
            console.error("Failed to unenroll:", error);
        }
    };

    const handleDelete = async (event: React.MouseEvent, courseId: string) => {
        event.preventDefault();
        await deleteCourse(courseId);
        // Update allCourses state if we're showing all courses
        if (showAllCourses) {
            setAllCourses(allCourses.filter(c => c._id !== courseId));
        }
    };

    useEffect(() => {
        enrollmentsClient.fetchEnrollments(currentUser._id).then((enrollments) => {
            dispatch(setEnrollments(enrollments));
        });
    }, [currentUser._id, dispatch]);

    const isEnrolled = (courseId: string) =>
        enrollments.some(
            (enrollment: any) =>
                enrollment.user === currentUser._id && enrollment.course === courseId
        );

    const filteredCourses = showAllCourses
        ? allCourses
        : courses.filter((course) =>
            enrollments.some(
                (enrollment: any) =>
                    enrollment.user === currentUser._id &&
                    enrollment.course === course._id
            )
        );

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <Students>
                <h5>
                    Enrollments
                    <button
                        className="btn btn-primary float-end"
                        id="wd-enrollments-course-click"
                        onClick={() => setShowAllCourses(!showAllCourses)}
                    >
                        {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
                    </button>
                </h5>
                <br />
            </Students>
            <hr />
            <Faculty>
                <h5>
                    New Course
                    <button
                        className="btn btn-primary float-end"
                        id="wd-add-new-course-click"
                        onClick={addNewCourse}
                    >
                        {" "}
                        Add{" "}
                    </button>
                    <button
                        className="btn btn-warning float-end me-2"
                        id="wd-update-course-click"
                        onClick={updateCourse}
                    >
                        Update
                    </button>
                </h5>

                <br />
                <input
                    value={course.name}
                    className="form-control mb-2"
                    onChange={(e) => setCourse({ ...course, name: e.target.value })}
                />
                <textarea
                    value={course.description}
                    className="form-control"
                    onChange={(e) =>
                        setCourse({ ...course, description: e.target.value })
                    }
                />
            </Faculty>
            <hr />
            <h2 id="wd-dashboard-published">
                Published Courses ({filteredCourses.length})
            </h2>{" "}
            <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {filteredCourses.map((course) => (
                        <div key={course._id} className="col" style={{ width: "300px" }}>
                            <div className="card">
                                <Link
                                    to={`/Kanbas/Courses/${course._id}/Home`}
                                    className="wd-dashboard-course-link text-decoration-none text-dark"
                                >
                                    <img
                                        src={`/images/${course._id}.png`}
                                        width="100%"
                                        height={160}
                                        alt={`${course.name}`}
                                        onError={(e) => {
                                            e.currentTarget.src = "/images/reactjs.png";
                                        }}
                                    />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            {course.name}{" "}
                                        </h5>
                                        <p
                                            className="wd-dashboard-course-title card-text overflow-y-hidden"
                                            style={{ maxHeight: 100 }}
                                        >
                                            {course.description}{" "}
                                        </p>
                                        <button className="btn btn-primary"> Go </button>

                                        <Faculty>
                                            <button
                                                onClick={(event) => {
                                                    handleDelete(event, course._id)}}
                                                className="btn btn-danger float-end"
                                                id="wd-delete-course-click"
                                            >
                                                Delete
                                            </button>

                                            <button
                                                id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course);
                                                }}
                                                className="btn btn-warning me-2 float-end"
                                            >
                                                Edit
                                            </button>
                                        </Faculty>

                                        {showAllCourses && (
                                            <Students>
                                                {isEnrolled(course._id) ? (
                                                    <button
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            handleUnenroll(course._id);
                                                        }}
                                                        className="btn btn-danger float-end"
                                                        id="wd-unenroll-course-click"
                                                    >
                                                        Unenroll
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            handleEnroll(course._id);
                                                        }}
                                                        className="btn btn-success me-2 float-end"
                                                        id="wd-enroll-course-click"
                                                    >
                                                        Enroll
                                                    </button>
                                                )}
                                            </Students>
                                        )}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
