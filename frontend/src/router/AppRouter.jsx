import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import TestSupabase from "../pages/TestSupabase";
import Dashboard from "../pages/Dashboard";
import Notes from "../pages/Notes";
import Questions from "../pages/Questions";
import Flashcards from "../pages/Flashcards";
import AI from "../pages/AI";
import Settings from "../pages/Settings";
import Library from "../pages/Library";
import Workspace from "../pages/Workspace";
export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<TestSupabase />} />
                    <Route path="notes" element={<Library />} />
                    <Route path="workspace/:id" element={<Workspace />} />
                    <Route path="questions" element={<Questions />} />
                    <Route path="flashcards" element={<Flashcards />} />
                    <Route path="ai" element={<AI />} />
                    <Route path="settings" element={<Settings />} />
                    
                </Route>
            </Routes>
        </BrowserRouter>
    );
}