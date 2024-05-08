import { z } from "zod";

export const authValidator = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});
