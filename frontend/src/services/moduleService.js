import { supabase } from "./supabase";

export async function getModules(workspaceId) {

    const { data, error } = await supabase
        .from("modules")
        .select("*")
        .eq("workspace_id", workspaceId)
        .order("created_at");

    if (error) throw error;

    return data;
}

export async function createModule(workspaceId, name) {

    const { data, error } = await supabase
        .from("modules")
        .insert([
            {
                workspace_id: workspaceId,
                name,
                icon: "📁",
                color: "#2563EB"
            }
        ])
        .select();

    if (error) throw error;

    return data;
}