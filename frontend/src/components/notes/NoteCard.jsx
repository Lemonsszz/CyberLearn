import Card from "../ui/Card";
import { useNavigate } from "react-router-dom";

export default function NoteCard({ note }) {

    const navigate = useNavigate();

    return (

        <Card
            className="cursor-pointer hover:scale-[1.02] transition-all"
            onClick={() => navigate(`/note/${note.id}`)}
        >

            <h2 className="text-lg font-bold text-slate-100">
                📝 {note.title}
            </h2>

        </Card>

    );

}