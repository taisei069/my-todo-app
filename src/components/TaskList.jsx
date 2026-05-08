import TaskItem from "./TaskItem.jsx";
import { useState } from "react";


const TaskList = () => {
    const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
    { id: 3, title: "Task 3" },
]);
    const [text,setText] =useState("");
    const handleAdd = () => {
        if(text === "") return;
    
    const newTask = {
        id: Date.now(),
        title: text
    };
    
    setTasks([...tasks,newTask]);
    setText("");
}
    return(
        <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">タスク一覧</h2>
            <div className="flex gap-2 mb-6">
                <input type="text" placeholder="タスクを追加" className="flex-1 border rounded-xl px-4 py-2"
                value = {text} onChange = {(e) =>setText(e.target.value)}/>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                onClick={handleAdd}>追加</button>
                
            </div>

            <div className="bg-white rounded-xl shadow-sm border p-4">
                {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}

            </div>
        </div>
    )
}

export default TaskList;