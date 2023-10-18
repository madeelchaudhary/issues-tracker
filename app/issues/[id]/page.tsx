import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

import IssueStatusBadge from "@/components/ui/IssueStatusBadge";

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

  if (!issue) return notFound();

  return (
    <main className="p-5">
      <Heading>{issue.title}</Heading>
      <Flex gap="3" my="2">
        <IssueStatusBadge status={issue.status} />
        <Text as="p">{issue.created_at.toDateString()}</Text>
      </Flex>
      <Card asChild>
        <article className="prose mt-5 markdown">
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </article>
      </Card>
    </main>
  );
};

export default IssueDetailPage;
