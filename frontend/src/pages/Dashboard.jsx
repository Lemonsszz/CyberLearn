import PageContainer from "../components/common/PageContainer";
import SectionTitle from "../components/ui/SectionTitle";
import StatCard from "../components/ui/StatCard";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export default function Dashboard() {
    return (
        <PageContainer>

            <SectionTitle
                title="Dashboard"
                subtitle="Bienvenido de nuevo a CyberLearn."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                <StatCard title="Notas" value="0" />

                <StatCard title="Laboratorios" value="0" />

                <StatCard title="Flashcards" value="0" />

                <StatCard title="Racha" value="0 días" />

            </div>

            <div className="flex gap-4 mt-8">

                <Button>
                    Nueva nota
                </Button>

                <Button variant="secondary">
                    Abrir IA
                </Button>

            </div>

            <Card className="mt-8">

                <h2 className="text-xl font-semibold mb-4">
                    Actividad reciente
                </h2>

                <p className="text-slate-400">
                    Todavía no hay actividad.
                </p>

            </Card>

        </PageContainer>
    );
}