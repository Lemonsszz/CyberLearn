import Button from "../ui/Button";

export default function NoteHeader({ onCreate }) {
    return (
        <div className="flex justify-between items-center mb-6">

            <h2 className="text-2xl font-bold text-white">
                Notes
            </h2>

            <Button onClick={onCreate}>
                + Nueva Nota
            </Button>

        </div>
    );
}