import React from "react";
import {useDispatch} from "react-redux";
import {deleteTodo, setTodo} from "./todosReducer";

export default function TodoItem({todo,}: {
    todo: { id: string; title: string };
}) {
    const dispatch = useDispatch();
    return (
        <li key={todo.id} className="list-group-item">
            <span style={{marginRight: 115}}>{todo.title}</span>
            <button onClick={() => setTodo(todo)}
                    className="btn btn-primary me-3"
                    id="wd-set-todo-click"> Edit
            </button>
            <button onClick={() => deleteTodo(todo.id)}
                    className="btn btn-danger"
                    id="wd-delete-todo-click"> Delete
            </button>
        </li>);
}