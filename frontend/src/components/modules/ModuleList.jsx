import ModuleCard from "./ModuleCard";

export default function ModuleList({ modules }) {

    return (

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {modules.map(module => (

                <ModuleCard
                    key={module.id}
                    module={module}
                />

            ))}

        </div>

    );

}