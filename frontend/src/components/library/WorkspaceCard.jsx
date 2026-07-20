import Card from "../ui/Card";

export default function WorkspaceCard({ workspace }) {
    return (
        <Card className="cursor-pointer hover:scale-[1.02] transition-all">
            <h2 className="text-xl font-semibold text-white">
                {workspace.name}
            </h2>

            <p className="text-slate-400 mt-2">
                {workspace.description || "Sin descripción"}
            </p>
        </Card>
    );
}