import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import {
    getNoteById,
    updateNote
} from "../services/noteService";

export default function Note() {

    const { id } = useParams();

    const navigate = useNavigate();
    
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [module, setModule] = useState(null);

    useEffect(() => {

        loadNote();

    }, []);

    async function loadNote() {

        const note = await getNoteById(id);

        setTitle(note.title);
        setContent(note.content);
        setModule(note.modules);

    }

    async function handleSave() {

        await updateNote(id, {
            title,
            content
        });

        alert("Nota guardada ✅");

    }

    return (

        <div className="p-8 max-w-5xl mx-auto">

            <Button
                variant="ghost"
                onClick={() => navigate(-1)}
            >
                ← Volver

            </Button>
            {module && (

    <p className="mt-6 text-violet-400 font-semibold">

        {module.icon} {module.name}

    </p>
    

)}
            
            

            <div className="mt-6">

                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-3xl font-bold"
                />

            </div>
            
            <div data-color-mode="dark" className="mt-6">

                <MDEditor
    value={content}
    onChange={(value) => setContent(value || "")}
    preview="edit"
    hideToolbar={false}
    visibleDragbar={false}
    height={500}
/>
            </div>

            <div className="mt-6 flex justify-end">

                <Button
                    onClick={handleSave}
                >
                    💾 Guardar
                </Button>

            </div>

        </div>

    );

}
