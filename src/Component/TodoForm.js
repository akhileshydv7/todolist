import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addItem } from '../Utils/Redux/todoListSlice';

const TodoForm = () => {
    const [value, setValue] = useState("")
    const dispatch = useDispatch();
    // const todoList = useSelector((store) => store.todoList);
    const handleSubmit = (e) => {
        e.preventDefault();
        (value) && dispatch(addItem(value));
        setValue("");
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className='todo-input'
                placeholder='What is the task today?'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type='submit' className='todo-btn' >Add Task</button>
        </form>
    )
}

export default TodoForm