import IssueStatusBadge from "@/components/ui/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Avatar, Card, Flex, Heading, Table } from "@radix-ui/themes";
import Link from "next/link";

const LATEST_ISSUES_LIMIT = 5;

const LatestIssues = async () => {
  const issues = await prisma.issue.findMany({
    take: LATEST_ISSUES_LIMIT,
    orderBy: {
      created_at: "desc",
    },
    include: {
      assignee: true,
    },
  });

  return (
    <Card>
      <Heading size="4" mb="5">
        Latest Issues
      </Heading>
      <Table.Root>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Flex justify="between">
                  <Flex direction="column" align="start" gap="2">
                    <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                    <IssueStatusBadge status={issue.status} />
                  </Flex>
                  {issue.assignee && (
                    <Avatar
                      src={issue.assignee.image!}
                      fallback="?"
                      radius="full"
                      size="2"
                    />
                  )}
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default LatestIssues;
