import { useNavigate } from "react-router-dom";
import Card from "../ui/Card";

export default function ModuleCard({ module }) {

    const navigate = useNavigate();

    return (
        <Card
            className="cursor-pointer hover:scale-[1.02] transition-all"
            onClick={() => navigate(`/module/${module.id}`)}
        >
            <h2 className="text-xl font-bold text-slate-100">
                {module.icon} {module.name}
            </h2>
        </Card>
    );
}