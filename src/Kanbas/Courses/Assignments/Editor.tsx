import React from 'react';

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <label htmlFor="wd-name" style={{ display: 'block', marginBottom: '5px' }}>Assignment Name</label>
            <input
                id="wd-name"
                value="A1 - ENV + HTML"
                style={{ width: '100%', padding: '8px', marginBottom: '15px', borderRadius: '4px', border: '1px solid #ccc' }}
            />

            <label htmlFor="wd-description" style={{ display: 'block', marginBottom: '5px' }}>Description</label>
            <textarea
                id="wd-description"
                style={{ width: '100%', height: '100px', padding: '8px', marginBottom: '15px', borderRadius: '4px', border: '1px solid #ccc' }}>
                The assignment is available online Submit a link to the landing page of your web application running on Netlify.
            </textarea>

            <table style={{ width: '100%', marginBottom: '20px', borderSpacing: '10px 5px' }}>
                <tbody>
                <tr>
                    <td align="right" valign="top" style={{ paddingRight: '10px' }}>
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" type="number" value={100} style={{ width: '100px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top" style={{ paddingRight: '10px' }}>
                        <label htmlFor="wd-assignment-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-assignment-group" style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '4px',
                            border: '1px solid #ccc'
                        }}>
                            <option value="assignments">Assignments</option>
                            <option value="Quizes">Quizes</option>
                            <option value="Project">Project</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top" style={{paddingRight: '10px'}}>
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}>
                            <option value="percentage">Percentage</option>
                            <option value="absolute">Absolute</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top" style={{ paddingRight: '10px' }}>
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}>
                            <option value="online">Online</option>
                            <option value="offline">Offline</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top" style={{ paddingRight: '10px' }}>
                        <label>Online Entry Options</label>
                    </td>
                    <td>
                        <input type="checkbox" id="wd-text-entry" /> Text Entry<br />
                        <input type="checkbox" id="wd-website-url" /> Website URL<br />
                        <input type="checkbox" id="wd-media-recordings" /> Media Recordings<br />
                        <input type="checkbox" id="wd-student-annotation" /> Student Annotation<br />
                        <input type="checkbox" id="wd-file-uploads" /> File Uploads
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top" style={{ paddingRight: '10px' }}>
                        <label htmlFor="wd-assign-to">Assign To</label>
                    </td>
                    <td>
                        <select id="wd-assign-to" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}>
                            <option value="everyone">Everyone</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top" style={{ paddingRight: '10px' }}>
                        <label htmlFor="wd-due-date">Due</label>
                    </td>
                    <td>
                        <input id="wd-due-date" type="date" value="2024-05-13" style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top" style={{ paddingRight: '10px' }}>
                        <label htmlFor="wd-available-from">Available from</label>
                    </td>
                    <td>
                        <input id="wd-available-from" type="date" value="2024-05-06" style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', marginRight: '10px' }} />
                        <label htmlFor="wd-available-until"> Until</label>
                        <input id="wd-available-until" type="date" value="2024-05-20" style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }} />
                    </td>
                </tr>
                </tbody>
            </table>

            <div style={{ textAlign: 'right' }}>
                <input type="button" value="Cancel" style={{ marginRight: '10px', padding: '8px 12px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#f0f0f0', cursor: 'pointer' }} />
                <input type="submit" value="Save" style={{ padding: '8px 12px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }} />
            </div>
        </div>
    );
}
