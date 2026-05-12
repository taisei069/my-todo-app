import { Trash2, BookCheck } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

const sideMenu = [
  { path: "/", label: "タスク一覧", icon: <BookCheck /> },
  { path: "/trash", label: "ゴミ箱", icon: <Trash2 /> },
];

const AppLayout = () => {
  return (
    <div className="flex h-screen w-full bg-gray-50">
      <aside className="w-64 border-r bg-white p-4">
        <h1 className="mb-8 text-xl font-bold">Todo App</h1>
        <nav className="space-y-2">
          {sideMenu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;