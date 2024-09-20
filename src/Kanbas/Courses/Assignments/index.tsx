import React from 'react';

export default function Assignments() {
    return (
        <div id="wd-assignments" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ marginBottom: '15px' }}>
                <input
                    id="wd-search-assignment"
                    placeholder="Search for Assignments"
                    style={{ padding: '10px', width: '70%', borderRadius: '4px', border: '1px solid #ccc', marginRight: '10px' }}
                />
                <button id="wd-add-assignment-group" style={{ padding: '10px 15px', borderRadius: '4px', backgroundColor: 'transparent', border: '1px solid #ccc', cursor: 'pointer' }}>+ Group</button>
                <button id="wd-add-assignment" style={{ padding: '10px 15px', borderRadius: '4px', backgroundColor: 'transparent', border: '1px solid #ccc', cursor: 'pointer' }}>+ Assignment</button>
            </div>

            <h3 id="wd-assignments-title" style={{ marginBottom: '20px' }}>
                ASSIGNMENTS 40% of Total <button style={{ padding: '5px 10px', borderRadius: '4px', backgroundColor: 'transparent', border: '1px solid #ccc', cursor: 'pointer' }}>+</button>
            </h3>

            <ul id="wd-assignment-list" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                <li className="wd-assignment-list-item" style={{ marginBottom: '15px', padding: '15px', borderRadius: '4px', border: '1px solid #ddd' }}>
                    <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123" style={{ fontSize: '18px', textDecoration: 'none' }}>
                        A1 - ENV + HTML
                    </a>
                    <p style={{ margin: '5px 0' }}>Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am</p>
                    <p style={{ margin: '5px 0' }}><strong>Due</strong> May 13 at 11:59pm | 100 pts</p>
                </li>

                <li className="wd-assignment-list-item" style={{ marginBottom: '15px', padding: '15px', borderRadius: '4px', border: '1px solid #ddd' }}>
                    <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/234" style={{ fontSize: '18px', textDecoration: 'none' }}>
                        A2 - CSS + BOOTSTRAP
                    </a>
                    <p style={{ margin: '5px 0' }}>Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am</p>
                    <p style={{ margin: '5px 0' }}><strong>Due</strong> May 20 at 11:59pm | 100 pts</p>
                </li>

                <li className="wd-assignment-list-item" style={{ marginBottom: '15px', padding: '15px', borderRadius: '4px', border: '1px solid #ddd' }}>
                    <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/345" style={{ fontSize: '18px', textDecoration: 'none' }}>
                        A3 - JAVASCRIPT + REACT
                    </a>
                    <p style={{ margin: '5px 0' }}>Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am</p>
                    <p style={{ margin: '5px 0' }}><strong>Due</strong> May 27 at 11:59pm | 100 pts</p>
                </li>
            </ul>
        </div>
    );
}
