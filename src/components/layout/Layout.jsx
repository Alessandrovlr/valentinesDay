import { Outlet } from "react-router-dom";
import { Menu } from "../menu/Menu";

export const Layout = () => {
  return (
    <div>
      <main className="min-h-screen w-full">
        <Outlet />
      </main>
      
    </div>
  );
};