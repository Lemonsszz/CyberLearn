import { supabase } from "./supabase";

export async function getNotes(moduleId) {

    const { data, error } = await supabase
        .from("notes")
        .select("*")
        .eq("module_id", moduleId)
        .order("pinned", { ascending: false })
        .order("updated_at", { ascending: false });

    if (error) throw error;

    return data;
}

export async function createNote(moduleId, title) {

    const { data, error } = await supabase
        .from("notes")
        .insert([
            {
                module_id: moduleId,
                title,
                content: ""
            }
        ])
        .select();

    if (error) throw error;

    return data;
}

export async function getNoteById(id) {

    const { data, error } = await supabase
        .from("notes")
        .select(`
            *,
            modules(
                id,
                name,
                icon
            )
            `)
        .eq("id", id)
        .single();

    if (error) throw error;

    return data;
}

export async function updateNote(id, note) {

    const { data, error } = await supabase
        .from("notes")
        .update(note)
        .eq("id", id)
        .select();

    if (error) throw error;

    return data;
}