import { supabaseAdmin } from "@supabase/admin";
import { json } from "../http";

export async function sessions(req, res) {
  const { data, error } = await supabaseAdmin
    .from("sessions")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(20);

  if (error) return json(res, 500, { error });

  return json(res, 200, data);
}

