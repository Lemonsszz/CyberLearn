import { supabase } from "./supabase";

export async function getWorkspaces() {
    const { data, error } = await supabase
        .from("workspaces")
        .select("*")
        .order("created_at", { ascending: true });

    if (error) throw error;

    return data;
}


export async function createWorkspace(name) {

    const { data, error } = await supabase
        .from("workspaces")
        .insert([
            {
                name: name,
                color: "#7C3AED",
                icon: "📚"
            }
        ])
        .select();

    if (error) throw error;

    return data;
}