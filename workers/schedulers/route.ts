import { NextRequest } from "next/server";
import { gateway } from "@rapyard/api/gateway";

export const runtime = "edge";

export function GET(req: NextRequest) {
  return gateway(req);
}

export function POST(req: NextRequest) {
  return gateway(req);
}
