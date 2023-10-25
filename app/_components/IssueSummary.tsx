import { Flex } from "@radix-ui/themes";

import IssueSummaryCard, { IssueSummaryItem } from "./IssueSummaryCard";

interface Props {
  open: number;
  closed: number;
  inProgress: number;
}

const IssueSummary = ({ open, closed, inProgress }: Props) => {
  const summary: IssueSummaryItem[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "Closed Issues", value: closed, status: "CLOSED" },
    { label: "In Progress Issues", value: inProgress, status: "IN_PROGRESS" },
  ];

  return (
    <Flex gap="5">
      {summary.map((item) => (
        <IssueSummaryCard key={item.status} summary={item} />
      ))}
    </Flex>
  );
};

export default IssueSummary;
