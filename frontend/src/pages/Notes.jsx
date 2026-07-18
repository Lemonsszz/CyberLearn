import { categories } from "../data/categories";
import CategoryCard from "../components/library/CategoryCard";
import SectionTitle from "../components/ui/SectionTitle";

export default function Notes() {
    const cyberCategories = categories.filter(
        category => category.area === "Cybersecurity"
    );

    const universityCategories = categories.filter(
        category => category.area === "University"
    );

    return (
        <div>

            <SectionTitle
                title="📚 Biblioteca"
                subtitle="Organiza tus conocimientos por áreas."
            />

            <h2 className="text-2xl font-semibold mb-4">
                🛡 Cybersecurity
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

                {cyberCategories.map(category => (
                    <CategoryCard
                        key={category.id}
                        category={category}
                    />
                ))}

            </div>

            <h2 className="text-2xl font-semibold mb-4">
                🎓 Universidad
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {universityCategories.map(category => (
                    <CategoryCard
                        key={category.id}
                        category={category}
                    />
                ))}

            </div>

        </div>
    );
}