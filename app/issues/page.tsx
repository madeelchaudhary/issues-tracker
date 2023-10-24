import prisma from "@/prisma/client";
import { Table, Text } from "@radix-ui/themes";

import IssueStatusBadge from "@/components/ui/IssueStatusBadge";
import RadixLink from "@/components/ui/RadixLink";
import IssuesContainer from "./IssuesContainer";
import { Issue, IssueStatus } from "@prisma/client";
import Link from "next/link";
import { GoArrowUp } from "react-icons/go";
import Pagination from "@/components/ui/Pagination";

interface Props {
  searchParams: {
    status: IssueStatus;
    orderBy: keyof Issue;
    page: string;
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

const PAGE_SIZE = 10;

const IssuesPage = async ({ searchParams }: Props) => {
  const { status, orderBy } = searchParams;
  const currentStatus = status && status in IssueStatus ? status : undefined;
  const orderByColumns = headers.map((header) => header.key);
  const currentOrderBy =
    orderBy && orderByColumns.includes(orderBy)
      ? { [orderBy]: "asc" }
      : undefined;
  const page = parseInt(searchParams.page) || 1;

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
    orderBy: currentOrderBy,
    skip: (page - 1) * PAGE_SIZE,
    take: PAGE_SIZE,
  });

  const count = await prisma.issue.count({
    where: {
      status: currentStatus,
    },
  });

  return (
    <IssuesContainer>
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
      <Pagination total={count} currentPage={page} perPage={PAGE_SIZE} />
    </IssuesContainer>
  );
};

export const dynamic = "force-dynamic";

export default IssuesPage;
