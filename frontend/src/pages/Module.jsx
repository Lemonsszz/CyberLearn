import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNotes, createNote } from "../services/noteService";


import NoteHeader from "../components/notes/NoteHeader";
import NoteList from "../components/notes/NoteList";
import NoteModal from "../components/notes/NoteModal";
import PageHeader from "../components/layout/PageHeader";

export default function Module() {

    const { id } = useParams();

    const [notes, setNotes] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    

    useEffect(() => {

        loadNotes();

    }, []);

return (

    <div className="p-8 text-white">

        <PageHeader
    title="📁 Linux"
    subtitle="Tus notas de estudio"
    action={
        <button
            onClick={() => setOpenModal(true)}
            className="bg-violet-600 hover:bg-violet-700 px-5 py-2 rounded-lg font-medium"
        >
            + Nueva Nota
        </button>
    }
/>

        <NoteList
            notes={notes}
        />

        <NoteModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onCreate={handleCreateNote}
        />

    </div>

);

async function loadNotes() {

    try {

        const data = await getNotes(id);

        setNotes(data);

    } catch (error) {

        console.error(error);

    }

}

async function handleCreateNote(title) {

    if (!title.trim()) return;

    try {

        await createNote(id, title);

        await loadNotes();

        setOpenModal(false);

    } catch (error) {

        console.error(error);

    }

}

}
