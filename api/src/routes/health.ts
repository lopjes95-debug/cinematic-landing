import { json } from "../http";

export function health(req, res) {
  return json(res, 200, { ok: true, service: "rapyard-api" });
}

