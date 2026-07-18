export default function CategoryCard({ category }) {
    return (
        <div className="bg-white rounded-xl shadow-md p-5 cursor-pointer hover:shadow-lg transition">
            <div className="text-4xl">
                {category.icon}
            </div>

            <h3 className="text-xl font-semibold mt-3">
                {category.name}
            </h3>

            <p className="text-gray-500">
                {category.area}
            </p>
        </div>
    );
}