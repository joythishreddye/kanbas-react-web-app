import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {addTodo, updateTodo, setTodo} from "./todosReducer";

export default function TodoForm() {
    const {todo} = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <li className="list-group-item">
            <input value={todo.title} className="me-3"
                   onChange={(e) => dispatch(setTodo({...todo, title: e.target.value}))}/>
            <s></s>
            <button onClick={() => dispatch(updateTodo(todo))}
                    className="btn btn-warning me-3"
                    id="wd-update-todo-click"> Update
            </button>
            <button onClick={() => dispatch(addTodo(todo))}
                    className="btn btn-success"
                    id="wd-add-todo-click"> Add
            </button>
        </li>
    );
}

