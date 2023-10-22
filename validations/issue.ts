import {
  getMaxError,
  getMinError,
  getRequiredError,
} from "@/lib/generateMessages";
import { IssueStatus } from "@prisma/client";
import { z } from "zod";

const issueSchema = z.object({
  title: z
    .string({ required_error: getRequiredError("Title") })
    .min(3, getMinError("Title"))
    .max(255, getMaxError("Title")),
  description: z
    .string({ required_error: getRequiredError("Description") })
    .min(3, getMinError("Description"))
    .max(5000, getMaxError("Description", 5000)),
});

const issueUpdateSchema = z.object({
  title: z
    .string({ required_error: getRequiredError("Title") })
    .min(3, getMinError("Title"))
    .max(255, getMaxError("Title"))
    .optional(),
  description: z
    .string({ required_error: getRequiredError("Description") })
    .min(3, getMinError("Description"))
    .max(5000, getMaxError("Description", 5000))
    .optional(),
  status: z.nativeEnum(IssueStatus).optional(),
  assigneeId: z.string().cuid("Invalid assignee").optional().nullable(),
});

export default issueSchema;
export { issueUpdateSchema };
export type IssueSchema = z.infer<typeof issueSchema>;
