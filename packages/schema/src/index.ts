import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  handle: z.string(),
  createdAt: z.string()
});
