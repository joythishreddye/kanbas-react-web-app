import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";

import {addAssignment} from "./reducer";

export default function NewAssignment() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {cid} = useParams();

    const [assignmentName, setAssignmentName] = useState("");
    const [description, setDescription] = useState("");
    const [points, setPoints] = useState(100);
    const [dueDate, setDueDate] = useState("");
    const [availableFrom, setAvailableFrom] = useState("");
    const [availableUntil, setAvailableUntil] = useState("");

    const handleSave = () => {
        dispatch(addAssignment({
            title: assignmentName, description, points, dueDate,
            availableFrom, availableUntil, course: cid,
        }));
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    return (
        <div id="wd-assignments-editor" className="container mt-5" style={{maxWidth: '700px'}}>
            <div className="form-group row mb-3">
                <label htmlFor="assignment-name">Assignment Name</label>
                <input type="text" id="assignment-name" className="form-control"
                       value={assignmentName}
                       onChange={(e) => setAssignmentName(e.target.value)}
                       placeholder="Enter assignment title"
                />
            </div>

            <div className="form-group row mb-3">
                <label htmlFor="description">Description</label>
                <textarea id="description" className="form-control" rows={4} value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          placeholder="Enter assignment description"
                />
            </div>

            <div className="form-group row mb-3">
                <label htmlFor="assignment-points" className="col-md-3">Points</label>
                <div className="col-md-9">
                    <input type="number" id="assignment-points" className="form-control"
                           value={points}
                           onChange={(e) => setPoints(Number(e.target.value))}
                    />
                </div>
            </div>


            <div className="form-group row mb-3">
                <label htmlFor="assignment-group" className="col-md-3">Assignment Group</label>
                <div className="col-md-9">
                    <select id="assignment-group" className="form-select">
                        <option value="assignments">ASSIGNMENTS</option>
                        <option value="assignments">QUIZZES</option>
                        <option value="assignments">PROJECTS</option>
                    </select>
                </div>
            </div>

            <div className="form-group row mb-3">
                <label htmlFor="display-grade" className="col-md-3">Display Grade as</label>
                <div className="col-md-9">
                    <select id="display-grade" className="form-select">
                        <option value="percentage">Percentage</option>
                        <option value="percentage">Score</option>
                    </select>
                </div>
            </div>

            <div className="form-group row mb-3">
                <label htmlFor="submission-type" className="col-md-3">Submission Type</label>
                <div className="col-md-9 border p-2">
                    <select id="submission-type" className="form-select">
                        <option value="online">Online</option>
                        <option value="offline">Offline</option>
                    </select>
                    <div className="form-group mt-2">
                        <label className="fw-bold">Online Entry Options</label>
                        <div className="form-check">
                            <input type="checkbox" id="text-entry" className="form-check-input"/>
                            <label htmlFor="text-entry" className="form-check-label">
                                Text Entry
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                id="website-url"
                                className="form-check-input"
                                defaultChecked
                            />
                            <label htmlFor="website-url" className="form-check-label">
                                Website URL
                            </label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" id="media-recordings"
                                   className="form-check-input"/>
                            <label htmlFor="media-recordings" className="form-check-label">
                                Media Recordings
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                id="student-annotations"
                                className="form-check-input"
                            />
                            <label htmlFor="student-annotations" className="form-check-label">
                                Student Annotations
                            </label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" id="file-uploads" className="form-check-input"/>
                            <label htmlFor="file-uploads" className="form-check-label">
                                File Uploads
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-group row mb-3">
                <label htmlFor="assign" className="col-md-3">Assign</label>
                <div className="col-md-9 border p-2">
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <label htmlFor="assign-to" className="fw-bold">Assign To</label>
                            <select id="assign-to" className="form-select">
                                <option value="everyone">Everyone</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <label htmlFor="due-date" className="fw-bold">Due</label>
                            <input type="date" id="due-date" className="form-control" value={dueDate}
                                   onChange={(e) => setDueDate(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="available-from" className="fw-bold">Available
                                from</label>
                            <input type="date" id="available-from" className="form-control"
                                   value={availableFrom}
                                   onChange={(e) => setAvailableFrom(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="available-until" className="fw-bold">Until</label>
                            <input type="date" id="available-until" className="form-control" value={availableUntil}
                                   onChange={(e) => setAvailableUntil(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <hr/>
            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-secondary me-2"
                        onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments`)}>
                    Cancel
                </button>
                <button type="button" className="btn btn-danger" onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    );
}