import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from '../Utils/Redux/todoListSlice';


const Todo = () => {
    const dispatch = useDispatch();
    const todoList = useSelector((store) => store.todoList);
    // console.log(todoList.items);

    if (todoList.items.length === 0) return null;

    return (
        <div>
            {todoList.items.map((e, i) => (
                <div key={i} className="Todo">
                    <input type="checkbox" className='work-status' />
                    <p className='todo-text'>{e}</p>
                    <div>
                        <FontAwesomeIcon className="delete-icon" icon={faTrash}
                            onClick={() => {
                                dispatch(removeItem(i))
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Todo