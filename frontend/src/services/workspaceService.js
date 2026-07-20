import { supabase } from "./supabase";

export async function getWorkspaces() {
    const { data, error } = await supabase
        .from("workspaces")
        .select("*")
        .order("created_at", { ascending: true });

    if (error) throw error;

    return data;
}

export async function createWorkspace(workspace) {
    const { data, error } = await supabase
        .from("workspaces")
        .insert(workspace)
        .select();

    if (error) throw error;

    return data;
}