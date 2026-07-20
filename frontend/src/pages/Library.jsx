import { useEffect, useState } from "react";

import PageContainer from "../components/common/PageContainer";
import WorkspaceHeader from "../components/library/WorkspaceHeader";
import WorkspaceList from "../components/library/WorkspaceList";

import { getWorkspaces } from "../services/workspaceService";
import { createWorkspace } from "../services/workspaceService";
import WorkspaceModal from "../components/library/WorkspaceModal";
export default function Library() {

    const [workspaces, setWorkspaces] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
    loadWorkspaces();
}, []);

async function handleCreateWorkspace(name) {

    if (!name.trim()) return;

    try {

        await createWorkspace(name);

        await loadWorkspaces();

        setOpenModal(false);

    } catch (error) {

        console.error(error);

    }

}

    async function loadWorkspaces() {

        try {

            const data = await getWorkspaces();

            setWorkspaces(data);

        } catch (error) {

            console.error(error);

        }

    }

    return (
        <PageContainer>

            <WorkspaceHeader
                onCreate={() => setOpenModal(true)}
            />

            <WorkspaceList workspaces={workspaces} />
            <WorkspaceModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                onCreate={handleCreateWorkspace}
            />

        </PageContainer>
    );

}