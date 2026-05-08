import { createBrowserRouter,Link,Outlet,RouterProvider }  from "react-router-dom"; 
import TaskList from "./components/TaskList.jsx"
import AppLayout from "./components/AppLayout.jsx"
// 1. まずは外枠（親）
const router = createBrowserRouter([
  {
    path: "/",              // どのURLで？
    element: (              // 何を表示する？（外側レイアウト）
      <AppLayout />
    ),
    // 2. その内側（子）
    children: [
      {
        path: "/",          // トップページ（/）のとき
        element: <TaskList />, // これをOutletにはめ込む
      },
      {
        path: "/trash",     // ゴミ箱（/trash）のとき
        element: <div>ゴミ箱画面</div>,     // これをOutletにはめ込む
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};
export default App