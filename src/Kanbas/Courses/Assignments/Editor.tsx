import React from 'react';

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container mt-5" style={{maxWidth: '700px'}}>
            <div className="form-group row mb-3">
                <label htmlFor="assignment-name">Assignment Name</label>
                <input type="text" id="assignment-name" className="form-control" value="A1"/>
            </div>

            <div className="form-group row mb-3">
                <textarea id="wd-description" className="form-control" rows={10} defaultValue={`The assignment is available online.
Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:
- Your full name and section
- Links to each of the lab assignments
- Link to the Kanbas application
- Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`}></textarea>
            </div>

            <div className="form-group row mb-3">
                <label htmlFor="assignment-points" className="col-md-3">Points</label>
                <div className="col-md-9">
                    <input type="number" id="assignment-points" className="form-control"
                           value={100}/>
                </div>
            </div>

            <div className="form-group row mb-3">
                <label htmlFor="assignment-group" className="col-md-3">Assignment
                    Group</label>
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
                <label htmlFor="submission-type" className="col-md-3">Submission
                    Type</label>
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
                            <input type="checkbox" id="website-url" className="form-check-input"
                                   defaultChecked/>
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
                            <input type="checkbox" id="student-annotations"
                                   className="form-check-input"/>
                            <label htmlFor="student-annotations" className="form-check-label">
                                Student Annotations
                            </label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" id="file-uploads"
                                   className="form-check-input"/>
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
                            <input id="due-date" type="date" className="form-control"
                                   value="2024-05-13"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="available-from" className="fw-bold">Available
                                from</label>
                            <input id="available-from" type="date" className="form-control"
                                   value="2024-05-06"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="available-until" className="fw-bold">Until</label>
                            <input id="available-until" type="date" className="form-control"/>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <hr/>
            <div className="d-flex justify-content-end">
                <button className="btn btn-secondary me-2">Cancel</button>
                <button className="btn btn-danger">Save</button>
            </div>
        </div>
    );
}