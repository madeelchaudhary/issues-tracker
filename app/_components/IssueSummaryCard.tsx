import { IssueStatus } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

export interface IssueSummaryItem {
  label: string;
  value: number;
  status: IssueStatus;
}

interface Props {
  summary: IssueSummaryItem;
}

const IssueSummaryCard = ({ summary }: Props) => {
  const { label, value, status } = summary;

  return (
    <Card className="px-2">
      <Flex direction="column" gap="1">
        <Link className="text-sm font-medium" href={`/issues?status=${status}`}>
          {label}
        </Link>
        <Text size="5" className="font-bold">
          {value}
        </Text>
      </Flex>
    </Card>
  );
};

export default IssueSummaryCard;
