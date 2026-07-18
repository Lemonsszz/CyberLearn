import Card from "./Card";

export default function StatCard({ title, value }) {
    return (
        <Card>
            <p className="text-slate-400 text-sm">
                {title}
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
                {value}
            </h2>
        </Card>
    );
}