import prisma from "@/prisma/client";
import { Table, Text } from "@radix-ui/themes";

import IssueStatusBadge from "@/components/ui/IssueStatusBadge";
import RadixLink from "@/components/ui/RadixLink";
import IssuesContainer from "./IssuesContainer";
import { IssueStatus } from "@prisma/client";

interface Props {
  searchParams: {
    status: IssueStatus;
  };
}

const IssuesPage = async ({ searchParams }: Props) => {
  const { status } = searchParams;
  const currentStatus = status && status in IssueStatus ? status : undefined;

  const issues = await prisma.issue.findMany({
    select: {
      title: true,
      status: true,
      created_at: true,
      id: true,
    },
    where: {
      status: currentStatus,
    },
  });
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <IssuesContainer status={currentStatus}>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <RadixLink href={`/issues/${issue.id}`}>
                  {issue.title}
                </RadixLink>
                <Text as="p" className="md:hidden">
                  <IssueStatusBadge status={issue.status} />
                </Text>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <IssueStatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.created_at.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </IssuesContainer>
  );
};

export const dynamic = "force-dynamic";

export default IssuesPage;
