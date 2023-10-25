import prisma from "@/prisma/client";
import IssueSummary from "./_components/IssueSummary";
import LatestIssues from "./_components/LatestIssues";
import IssueChart from "./_components/IssueChart";
import { Flex, Grid } from "@radix-ui/themes";

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
