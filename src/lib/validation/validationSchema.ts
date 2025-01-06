import { z } from "zod";

export const emailFooterSchema = z.object({
    email: z.string().email(),
})