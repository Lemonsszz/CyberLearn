import { useState } from "react";

import Button from "../ui/Button";
import Input from "../ui/Input";

export default function ModuleModal({ open, onClose, onCreate }) {

    const [name, setName] = useState("");

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">

            <div className="bg-slate-900 rounded-xl p-6 w-96">

                <h2 className="text-2xl text-white font-bold mb-5">
                    Nuevo Module
                </h2>

                <Input
                    placeholder="Nombre..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <div className="flex justify-end gap-3 mt-6">

                    <Button variant="ghost" onClick={onClose}>
                        Cancelar
                    </Button>

                    <Button
                        onClick={() => {
                            onCreate(name);
                            setName("");
                        }}
                    >
                        Crear
                    </Button>

                </div>

            </div>

        </div>
    );
}