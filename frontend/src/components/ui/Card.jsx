import clsx from "clsx";

export default function Card({
    children,
    className
}) {
    return (
        <div
            className={clsx(
                "rounded-xl border border-slate-700 bg-slate-900 p-6 shadow-lg",
                className
            )}
        >
            {children}
        </div>
    );
}