import WorkspaceCard from "./WorkspaceCard";

export default function WorkspaceList({ workspaces }) {
    return (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {workspaces.map((workspace) => (
                <WorkspaceCard
                    key={workspace.id}
                    workspace={workspace}
                />
            ))}

        </div>
    );
}