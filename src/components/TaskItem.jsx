import { Trash2 } from "lucide-react";

// onDelete（削除命令）を親から受け取る
const TaskItem = ({ task, onDelete }) => {
  return (
    <div className="flex items-center justify-between border-b py-3">
      <div className="flex items-center gap-3">
        <input type="checkbox" className="h-5 w-5 rounded border-gray-300" />
        <span className="text-gray-700">{task.title}</span>
      </div>
      {/* クリックされたら、自分のIDを添えて削除命令を実行する */}
      <button 
        className="text-gray-400 hover:text-red-500"
        onClick={() => onDelete(task.id)}
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};

export default TaskItem;