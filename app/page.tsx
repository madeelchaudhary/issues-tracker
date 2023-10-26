import prisma from "@/prisma/client";
import { Flex, Grid } from "@radix-ui/themes";
import { Metadata } from "next";

import IssueSummary from "./_components/IssueSummary";
import LatestIssues from "./_components/LatestIssues";
import IssueChart from "./_components/IssueChart";

export default async function HomePage() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });

  return (
    <main className="p-5">
      <Grid columns={{ initial: "1", sm: "2" }} gap="5">
        <Flex direction="column" gap="5">
          <IssueSummary open={open} closed={closed} inProgress={inProgress} />
          <IssueChart open={open} closed={closed} inProgress={inProgress} />
        </Flex>
        <LatestIssues />
      </Grid>
    </main>
  );
}

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Issue Tracker | Dashboard",
  description: "View the latest issues and statistics of the issue tracker.",
  keywords: "issue, tracker, issues, statistics, dashboard",
};
