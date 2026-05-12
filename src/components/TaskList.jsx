import TaskItem from "./TaskItem.jsx";
import { useState } from "react";

const TaskList = () => {
  // タスクの一覧を管理する箱
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
    { id: 3, title: "Task 3" },
  ]);
  // 入力中の文字を管理する箱
  const [text, setText] = useState("");

  // 【追加】ボタンが押された時の命令
  const handleAdd = () => {
    if (text === "") return;

    const newTask = {
      id: Date.now(),
      title: text,
    };

    setTasks([...tasks, newTask]);
    setText(""); // 入力欄を空にする
  };

  // 【削除】ゴミ箱が押された時の命令（handleAddの外側に配置！）
  const handleDelete = (id) => {
    // 選択されたID以外のタスクだけで新しいリストを作る（フィルタリング）
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">タスク一覧</h2>
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="タスクを追加"
          className="flex-1 border rounded-xl px-4 py-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          onClick={handleAdd}
        >
          追加
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-4">
        {tasks.map((task) => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onDelete={handleDelete} // 削除命令を子コンポーネントに渡す
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;