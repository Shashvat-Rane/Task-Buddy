import React from "react";

const TaskList = ({tasks, toggleComplete, deleteTask}) => {
    return(
        <div className="task-list">
            {tasks.length === 0 ? (
                <p>No tasks available. Add some tasks!</p>
            ) : (
                tasks.map((task,index) =>(
                    <div key={index} className="task-item">
                        <div className="task-info">
                            <p>{task.text}</p>
                            <span className="priority">{task.priority}</span>
                            <span className="category">{task.category}</span>
                        </div>
                        <div className="task-action">
                            <button 
                                onClick={()=>toggleComplete(index)}
                                className="complete-btn"
                            >
                                {task.completed? "Undo" : "Complete"}
                            </button>
                            <button 
                                onClick={()=>deleteTask(index)}
                                className="delete-btn"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default TaskList;