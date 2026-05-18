import { json } from "../http";

export async function upload(req, res) {
  return json(res, 200, { ok: true, message: "Upload endpoint coming soon" });
}

