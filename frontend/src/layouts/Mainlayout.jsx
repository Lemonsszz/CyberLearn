import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";

export default function MainLayout() {
    return (
        <div className="flex h-screen">

            <Sidebar />

            <main className="flex-1 p-8 overflow-auto bg-slate-100">

                <Outlet />

            </main>

        </div>
    );
}