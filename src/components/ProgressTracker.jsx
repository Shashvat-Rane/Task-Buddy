import React from "react";

const ProgressTracker = ({tasks}) => {

    const completedTasks = tasks.filter((task) => task.completed).length;
    const totalTasks = tasks.length;
    const progress = totalTasks === 0 ? 0 : (completedTasks/totalTasks)*100;

    return(
        <div className="progress-tracker">
            <p>{completedTasks} / {totalTasks} tasks completed.</p>
            <div className="progress-bar">
                <div className="progress" style={{width: `${progress}%`}}></div>
            </div>
        </div>
    );
}

export default ProgressTracker;
