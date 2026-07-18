import clsx from "clsx";

export default function Button({
    children,
    variant = "primary",
    className,
    ...props
}) {
    const variants = {
        primary:
            "bg-violet-600 hover:bg-violet-700 text-white",

        secondary:
            "bg-slate-700 hover:bg-slate-600 text-white",

        danger:
            "bg-red-600 hover:bg-red-700 text-white",

        ghost:
            "bg-transparent hover:bg-slate-700 text-slate-200"
    };

    return (
        <button
            className={clsx(
                "px-5 py-2 rounded-lg font-medium transition-all duration-200",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}