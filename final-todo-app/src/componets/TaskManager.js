import React, { useState, useRef } from "react";



export default function TaskManager()
{
    let [taskList, setTaskList]=useState([]);
    let [userInput, setUserInput]=useState('');
    let userInputFieldRef = useRef();
    let [filter, setFilter] = useState('all');


    function addNewTask()
    {
        if(userInput.trim().length === 0)
        {
            alert("Be sure to input a task prior to clicking the add button.");
            return 0;
        }
        const myNewTask = {id:new Date().getTime(), text: userInput, isComplete: false}
        setTaskList([myNewTask,...taskList]);
        setUserInput('');
        userInputFieldRef.current.focus();
    }


    const toggleComplete = (taskId) => {
        let updatedTasks = taskList.map((task) =>
            task.id === taskId ? {...task, isComplete: !task.isComplete} : task
        );
    setTaskList(updatedTasks);
    }


    const deleteTask = (index) => {
        let updatedTasks = taskList.filter((_,i) => i !== index);
        setTaskList(updatedTasks);
    }


    const filteredTasks = taskList.filter((task) => {
        if (filter === "completed") return task.isComplete;
        if (filter === "incomplete") return !task.isComplete;
        return true;
    });

    const clearAll = () => {
        setTaskList([]);
    };
    

        return(
            <>
                <h1>To-Do → To-Done</h1>
                <br/>
                <div className='taskManagerApp'>


                    <div className='inputSection'>
                        <input
                            type='text'                        
                            maxLength={25}
                            className='userInputField'
                            value={userInput}
                            placeholder='Type tasks here'
                            onChange={(e) => setUserInput(e.target.value)}
                            ref={userInputFieldRef}
                            id='userInputFieldId'
                        />
                        <button className='taskBtn addBtn' onClick={addNewTask}>Add Task</button>
                    </div>

                    <div className="filters">
                        <button className='taskBtn filterBtn' onClick={() => setFilter("all")}>All</button>
                        <button className='taskBtn filterBtn' onClick={() => setFilter("incomplete")}>Incomplete</button>
                        <button className='taskBtn filterBtn' onClick={() => setFilter("completed")}>Completed</button>
                    </div>

                    <div className='taskListDiv'>
                        <ul>
                            {filteredTasks.map((task, index) => (
                                <li key={task.id} className='taskActual'>
                                    <input
                                    type='checkbox'
                                    checked={task.isComplete}
                                    onChange={() => toggleComplete(task.id)}
                                    />
                                    <span style={{textDecoration: task.isComplete ? "line-through" : "none",}}>
                                        {task.text}
                                    </span>
                                    <button className='deleteBtn taskBtn' onClick={() => deleteTask(index)}>Delete</button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <button className='taskBtn clearAllBtn' onClick={clearAll}>Clear All</button>
                    </div>
                    

                </div>
            </>
        )
    
}