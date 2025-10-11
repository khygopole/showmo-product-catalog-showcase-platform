import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";

export default function Layout() {
  return (
    <main className="grid grid-cols-12 grid-rows-[auto_1fr] h-screen relative">
      <NavigationBar />
      <Outlet />
    </main>
  );
}
