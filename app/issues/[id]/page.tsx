import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { cache } from "react";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import IssueAssignee from "@/components/issues/IssueAssignee";
import IssueDetails from "@/components/issues/IssueDetails";
import IssueDeleteBtn from "./IssueDeleteBtn";
import IssueEditBtn from "./IssueEditBtn";

interface Props {
  params: {
    id: string;
  };
}

const fetchIssue = cache(async (id: string) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id,
    },
  });

  return issue;
});

const IssueDetailPage = async ({ params: { id } }: Props) => {
  const session = await getServerSession(authOptions);
  const issue = await fetchIssue(id);

  if (!issue) return notFound();

  return (
    <main className="p-5">
      <Grid columns={{ initial: "1", sm: "5" }} gap="5">
        <Box className="md:col-span-4">
          <IssueDetails issue={issue} />
        </Box>
        <Box>
          {session && (
            <Flex direction="column" gap="4">
              <IssueAssignee issue={issue} />
              <IssueEditBtn issueId={issue.id} />
              <IssueDeleteBtn issueId={issue.id} />
            </Flex>
          )}
        </Box>
      </Grid>
    </main>
  );
};

export const generateMetadata = async ({ params: { id } }: Props) => {
  const issue = await fetchIssue(id);

  return {
    title: `Issue Tracker | ${issue?.title ?? "Issue"}`,
    description: `View the details of the issue '${issue?.title}'.`,
    keywords: "issue, tracker, issues, statistics, dashboard",
  };
};
export default IssueDetailPage;
