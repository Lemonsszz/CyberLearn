export default function Input(props) {
    return (
        <input
            {...props}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white outline-none focus:border-violet-500"
        />
    );
}