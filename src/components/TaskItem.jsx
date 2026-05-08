import { Trash2 } from "lucide-react";

const TaskItem = ({ task }) => {
  return (
    <div className="flex items-center justify-between border-b py-3">
      <div className="flex items-center gap-3">
        <input type="checkbox" className="h-5 w-5 rounded border-gray-300" />
        <span className="text-gray-700">{task.title}</span>
      </div>
      <button className="text-gray-400 hover:text-red-500">
        <Trash2 size={20} />
      </button>
    </div>
  );
};

export default TaskItem;