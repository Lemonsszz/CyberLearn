import Card from "../ui/Card";

export default function ModuleCard({ module }) {

    return (

        <Card className="cursor-pointer hover:scale-[1.02] transition-all">

            <h2 className="text-xl font-bold text-slate-100">
            {module.icon} {module.name}
            </h2>

        </Card>

    );

}