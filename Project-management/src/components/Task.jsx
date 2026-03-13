import { useState } from "react";
export default function Task({ taskList = [], addTask, clearTask }) {

    const [enteredtask, setEnteredTask] = useState("");

    function handleInputChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleAddTask() {
        if (enteredtask.trim() === "") {
            return;
        }
        addTask(enteredtask);
        setEnteredTask("");
    }

    function handleClearTask(taskId) {
        clearTask(taskId);
    }

    return (
        <div className="block p-4 mt-8 ">
            <h2>Tasks</h2>
            <input type="text" placeholder="Add a new task..."
                onChange={handleInputChange} value={enteredtask} className="text-stone-800" />
            <button onClick={handleAddTask}>Add Task</button>
            {/* {taskList.length === 0 && <p>No tasks added yet.</p>} */}
            <ul>
                {taskList.map((task, index) => (
                    <li key={task.id || index} className="flex justify-between ">
                        <span>{task.text || task}</span>
                        <button onClick={() => handleClearTask(task.id)}>clear</button>
                    </li>
                ))}
            </ul>
        </div>

    )
}