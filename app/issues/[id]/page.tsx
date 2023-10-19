import prisma from "@/prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";

import IssueDetails from "@/components/issues/IssueDetails";
import IssueEditBtn from "./IssueEditBtn";

interface Props {
  params: {
    id: string;
  };
}

const IssueDetailPage = async ({ params: { id } }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id,
    },
  });

  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (!issue) return notFound();

  return (
    <main className="p-5">
      <Grid columns={{ initial: "1", md: "2" }} gap="5">
        <Box>
          <IssueDetails issue={issue} />
        </Box>
        <Box>
          <IssueEditBtn issueId={issue.id} />
        </Box>
      </Grid>
    </main>
  );
};

export default IssueDetailPage;
