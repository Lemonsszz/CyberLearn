export default function PageHeader({
    title,
    subtitle,
    action
}) {
    return (

        <div className="flex justify-between items-center mb-8">

            <div>

                <h1 className="text-4xl font-bold text-white">
                    {title}
                </h1>

                {subtitle && (

                    <p className="text-slate-400 mt-2">
                        {subtitle}
                    </p>

                )}

            </div>

            {action}

        </div>

    );

}