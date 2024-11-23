import React, { useState } from "react";

export default function QueryParameters() {
    const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
    const [a, setA] = useState("34");
    const [b, setB] = useState("23");
    return (
        <div id="wd-query-parameters">
            <h3>Query Parameters</h3>
            <input
                className="form-control mb-2"
                id="wd-query-parameter-a"
                type="number"
                defaultValue={a}
                onChange={(e) => setA(e.target.value)}
            />
            <input
                className="form-control mb-2"
                id="wd-query-parameter-b"
                type="number"
                defaultValue={b}
                onChange={(e) => setB(e.target.value)}
            />
            <a
                id="wd-query-parameter-add"
                href={`${REMOTE_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}
                target="_blank"
                rel = "noreferrer"
            >
                Add {a} + {b}
            </a>
            <br />
            <a
                id="wd-query-parameter-subtract"
                href={`${REMOTE_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
                target="_blank"
                rel = "noreferrer"
            >
                Subtract {a} - {b}
            </a>
            <br />
            <a
                id="wd-query-parameter-multiply"
                href={`${REMOTE_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}
                target="_blank"
                rel = "noreferrer"
            >
                Multiply {a} * {b}
            </a>
            <br />
            <a
                id="wd-query-parameter-divide"
                href={`${REMOTE_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}
                target="_blank"
                rel = "noreferrer"
            >
                Divide {a} / {b}
            </a>
            <hr />
        </div>
    );
}
