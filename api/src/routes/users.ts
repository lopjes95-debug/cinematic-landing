import { supabaseAdmin } from "@supabase/admin";
import { json } from "../http";

export async function users(req, res) {
  const { data, error } = await supabaseAdmin
    .from("users")
    .select("id, handle, created_at")
    .limit(50);

  if (error) return json(res, 500, { error });

  return json(res, 200, data);
}

