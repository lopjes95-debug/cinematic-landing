import { supabase } from "@supabase/client";
import { json } from "../http";

export async function feed(req, res) {
  const { data, error } = await supabase
    .from("tracks")
    .select("id, title, artist, cover_url, created_at")
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) return json(res, 500, { error });

  return json(res, 200, data);
}

