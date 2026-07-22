import { useState } from "react";

import Button from "../ui/Button";
import Input from "../ui/Input";

export default function NoteModal({ open, onClose, onCreate }) {

    const [title, setTitle] = useState("");

    if (!open) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">

            <div className="bg-slate-900 p-6 rounded-xl w-96">

                <h2 className="text-2xl font-bold text-white mb-5">
                    Nueva Nota
                </h2>

                <Input
                    placeholder="Título..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <div className="flex justify-end gap-3 mt-6">

                    <Button
                        variant="ghost"
                        onClick={onClose}
                    >
                        Cancelar
                    </Button>

                    <Button
                        onClick={() => {
                            onCreate(title);
                            setTitle("");
                        }}
                    >
                        Crear
                    </Button>

                </div>

            </div>

        </div>
    );
}