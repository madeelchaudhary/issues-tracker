import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";

import IssueDetails from "@/components/issues/IssueDetails";
import IssueEditBtn from "./IssueEditBtn";
import IssueDeleteBtn from "./IssueDeleteBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import IssueAssignee from "@/components/issues/IssueAssignee";

interface Props {
  params: {
    id: string;
  };
}

const IssueDetailPage = async ({ params: { id } }: Props) => {
  const session = await getServerSession(authOptions);
  const issue = await prisma.issue.findUnique({
    where: {
      id,
    },
  });

  await new Promise((resolve) => setTimeout(resolve, 1000));
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

export default IssueDetailPage;
