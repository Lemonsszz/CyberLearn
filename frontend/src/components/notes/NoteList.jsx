import NoteCard from "./NoteCard";

export default function NoteList({ notes }) {

    return (

        <div className="grid gap-5">

            {notes.map(note => (

                <NoteCard
                    key={note.id}
                    note={note}
                />

            ))}

        </div>

    );

}