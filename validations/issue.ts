import { getMaxError, getMinError } from "@/lib/generateMessages";
import { z } from "zod";

const issueSchema = z.object({
  title: z.string().min(3, getMinError("Title")).max(255, getMaxError("Title")),
  description: z.string().min(3, getMinError("Description")),
});

export default issueSchema;
export type IssueSchema = z.infer<typeof issueSchema>;
