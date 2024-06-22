import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";

const AppLayout = () => {
  return (
    <div>
      <Sidebar />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
