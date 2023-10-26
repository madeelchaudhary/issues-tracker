import prisma from "@/prisma/client";
import { IssueStatus } from "@prisma/client";

import Pagination from "@/components/ui/Pagination";
import IssuesContainer from "./IssuesContainer";
import IssuesTable, { IssueColumns, IssueQueryParams } from "./IssuesTable";
import { Metadata } from "next";

interface Props {
  searchParams: IssueQueryParams;
}

const PAGE_SIZE = 10;

const IssuesPage = async ({ searchParams }: Props) => {
  const { status, orderBy } = searchParams;
  const currentStatus = status && status in IssueStatus ? status : undefined;
  const currentOrderBy =
    orderBy && IssueColumns.includes(orderBy)
      ? { [orderBy]: "asc" }
      : undefined;
  const page = parseInt(searchParams.page ?? "0") || 1;

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
      <IssuesTable issues={issues} searchParams={searchParams} />
      <Pagination total={count} currentPage={page} perPage={PAGE_SIZE} />
    </IssuesContainer>
  );
};

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Issue Tracker | Issues",
  description: "View the latest issues and statistics of the issue tracker.",
  keywords: "issue, tracker, issues, statistics, dashboard",
};

export default IssuesPage;
