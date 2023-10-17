import { IssueStatus } from "@prisma/client";
import { Badge, colorProp } from "@radix-ui/themes";
import { FC } from "react";

const statusMap: Record<
  IssueStatus,
  { label: string; color: (typeof colorProp)["values"][number] }
> = {
  OPEN: { label: "Open", color: "red" },
  CLOSED: { label: "Closed", color: "green" },
  IN_PROGRESS: { label: "In Progress", color: "yellow" },
};

const IssueStatusBadge: FC<{ status: IssueStatus }> = ({ status }) => {
  const { label, color } = statusMap[status];

  return <Badge color={color}>{label}</Badge>;
};

export default IssueStatusBadge;
