import { useEffect } from "react";
import { getWorkspaces } from "../services/workspaceService";

export default function TestSupabase() {

    useEffect(() => {

        async function load() {

            try {
                
                const data = await getWorkspaces();

                console.log(data);

            } catch (err) {

                console.error(err);

            }

        }

        load();

    }, []);

    return <h1>Probando Supabase...</h1>;
}