import Button from "../ui/Button";

export default function ModuleHeader({ onCreate }) {
    return (
        <div className="flex justify-between items-center mb-6">

            <h2 className="text-2xl font-bold text-white">
                Modules
            </h2>

            <Button onClick={onCreate}>
                + Nuevo Module
            </Button>

        </div>
    );
}