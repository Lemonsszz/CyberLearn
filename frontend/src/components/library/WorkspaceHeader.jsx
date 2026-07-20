import Button from "../ui/Button";

export default function WorkspaceHeader({ onCreate }) {
    return (
        <div className="flex justify-between items-center mb-8">

            <div>

                <h1 className="text-3xl font-bold text-white">
                    Library
                </h1>

                <p className="text-slate-400">
                    Organiza tus espacios de estudio.
                </p>

            </div>

            <Button onClick={onCreate}>
                + Nuevo Workspace
            </Button>

        </div>
    );
}