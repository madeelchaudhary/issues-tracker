import prisma from "@/prisma/client";
import { Table, Text } from "@radix-ui/themes";

import IssueStatusBadge from "@/components/ui/IssueStatusBadge";
import RadixLink from "@/components/ui/RadixLink";
import IssuesContainer from "./IssuesContainer";
import { Issue, IssueStatus } from "@prisma/client";
import Link from "next/link";
import { GoArrowUp } from "react-icons/go";

interface Props {
  searchParams: {
    status: IssueStatus;
    orderBy: keyof Issue;
  };
}

interface Header {
  label: string;
  key: keyof Issue;
  className?: string;
}

const headers: Header[] = [
  { label: "Issue", key: "title" },
  { label: "Status", key: "status", className: "hidden md:table-cell" },
  { label: "Created", key: "created_at", className: "hidden md:table-cell" },
];

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
            {headers.map((header) => (
              <Table.ColumnHeaderCell
                key={header.key}
                className={header.className}
              >
                <Link
                  href={{ query: { ...searchParams, orderBy: header.key } }}
                >
                  {header.key === searchParams.orderBy && (
                    <GoArrowUp className="inline-block mr-1" />
                  )}
                  {header.label}
                </Link>
              </Table.ColumnHeaderCell>
            ))}
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
