import { Plus, Bot } from "lucide-react";

import SectionTitle from "../components/ui/SectionTitle";
import StatCard from "../components/ui/StatCard";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function Dashboard() {
    return (
        <div className="space-y-8">

            {/* Encabezado */}
            <SectionTitle
                title="Bienvenido a CyberLearn 🚀"
                subtitle="Tu centro de estudio en ciberseguridad"
            />

            {/* Estadísticas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard title="Notas" value="0" />
                <StatCard title="Flashcards" value="0" />
                <StatCard title="Preguntas" value="0" />
                <StatCard title="Horas estudiadas" value="0h" />
            </div>

            {/* Acciones rápidas */}
            <Card>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                    <div>
                        <h3 className="text-lg font-semibold">
                            Acciones rápidas
                        </h3>

                        <p className="text-gray-500 text-sm">
                            Crea una nota o consulta a la IA
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <Button>
                            <span className="flex items-center gap-2">
                                <Plus size={18} />
                                Nueva nota
                            </span>
                        </Button>

                        <Button>
                            <span className="flex items-center gap-2">
                                <Bot size={18} />
                                Abrir IA
                            </span>
                        </Button>
                    </div>

                </div>
            </Card>

            {/* Últimas notas */}
            <Card>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">
                        Últimas notas
                    </h3>

                    <span className="text-sm text-gray-400">
                        0 notas
                    </span>
                </div>

                <div className="border-2 border-dashed border-gray-200 rounded-xl p-10 text-center">
                    <p className="text-gray-500 font-medium">
                        Aún no tienes notas.
                    </p>

                    <p className="text-sm text-gray-400 mt-1">
                        Crea tu primera nota para comenzar.
                    </p>
                </div>
            </Card>

        </div>
    );
}