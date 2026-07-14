import { NavLink } from "react-router-dom";
import {
    FaHome,
    FaBook,
    FaQuestionCircle,
    FaLayerGroup,
    FaRobot,
    FaCog,
} from "react-icons/fa";

const menu = [
    { name: "Dashboard", path: "/", icon: <FaHome /> },
    { name: "Notes", path: "/notes", icon: <FaBook /> },
    { name: "Questions", path: "/questions", icon: <FaQuestionCircle /> },
    { name: "Flashcards", path: "/flashcards", icon: <FaLayerGroup /> },
    { name: "AI", path: "/ai", icon: <FaRobot /> },
    { name: "Settings", path: "/settings", icon: <FaCog /> },
];

export default function Sidebar() {
    return (
        <aside className="w-64 bg-slate-900 text-white flex flex-col">
            <div className="p-6 text-2xl font-bold border-b border-slate-700">
                CyberLearn
            </div>

            <nav className="flex-1 p-4 space-y-2">
                {menu.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-lg transition ${
                                isActive
                                    ? "bg-blue-600"
                                    : "hover:bg-slate-800"
                            }`
                        }
                    >
                        {item.icon}
                        {item.name}
                    </NavLink>
                ))}     
            </nav>
        </aside>
    );
}