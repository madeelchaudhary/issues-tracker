import { Issue, IssueStatus } from "@prisma/client";
import { Table, Text } from "@radix-ui/themes";
import Link from "next/link";
import { GoArrowUp } from "react-icons/go";

import IssueStatusBadge from "@/components/ui/IssueStatusBadge";
import RadixLink from "@/components/ui/RadixLink";

export interface IssueQueryParams {
  status?: IssueStatus;
  orderBy?: keyof Issue;
  page?: string;
}

interface Props {
  issues: Omit<Issue, "description" | "updated_at" | "assigneeId">[];
  searchParams: IssueQueryParams;
}

const IssuesTable = ({ issues, searchParams }: Props) => {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          {HEADERS.map((header) => (
            <Table.ColumnHeaderCell
              key={header.key}
              className={header.className}
            >
              <Link href={{ query: { ...searchParams, orderBy: header.key } }}>
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
              <RadixLink href={`/issues/${issue.id}`}>{issue.title}</RadixLink>
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
  );
};

interface Header {
  label: string;
  key: keyof Issue;
  className?: string;
}

const HEADERS: Header[] = [
  { label: "Title", key: "title" },
  { label: "Status", key: "status", className: "hidden md:table-cell" },
  { label: "Created At", key: "created_at", className: "hidden md:table-cell" },
];

export const IssueColumns = HEADERS.map((header) => header.key);
export default IssuesTable;
