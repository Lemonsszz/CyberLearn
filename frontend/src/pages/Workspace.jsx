import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getWorkspaceById } from "../services/workspaceService";
import { getModules } from "../services/moduleService";
import ModuleList from "../components/modules/ModuleList";
import ModuleHeader from "../components/modules/ModuleHeader";
import { createModule } from "../services/moduleService";
import ModuleModal from "../components/modules/ModuleModal";
import PageHeader from "../components/layout/PageHeader";

export default function Workspace() {

    const { id } = useParams();

    const [openModal, setOpenModal] = useState(false);
    const [workspace, setWorkspace] = useState(null);
    const [modules, setModules] = useState([]);


    useEffect(() => {

        loadWorkspace();

    }, []);

    async function loadWorkspace() {

        try {

            const data = await getWorkspaceById(id);

            setWorkspace(data);

            const modulesData = await getModules(id);

            setModules(modulesData);

        } catch (error) {

            console.error(error);

        }

    }

    if (!workspace) {

        return (
            <div className="p-8 text-white">
                Cargando...
            </div>
        );

    }

    return (
        <div className="p-8 text-white">

                <PageHeader
                title={`${workspace.icon} ${workspace.name}`}
                subtitle="Organiza tus módulos de estudio."
                action={
                <ModuleHeader
                onCreate={() => setOpenModal(true)}
                    />
                }
                />
        

            <ModuleList
                modules={modules}
            />
            <ModuleModal
            open={openModal}
            onClose={() => setOpenModal(false)}
            onCreate={handleCreateModule}
            />

        </div>
    );
    async function handleCreateModule(name) {

    if (!name.trim()) return;

    try {

        await createModule(id, name);

        const modulesData = await getModules(id);

        setModules(modulesData);

        setOpenModal(false);

    } catch (error) {

        console.error(error);

    }

}

}

