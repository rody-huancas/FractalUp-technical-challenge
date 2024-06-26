import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";

const AppLayout = () => {
  return (
    <div className="flex gap-5 h-[100dvh] overflow-x-hidden">
      <Sidebar />

      <main className="md:ml-72 w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
