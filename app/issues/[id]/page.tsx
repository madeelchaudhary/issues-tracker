import prisma from "@/prisma/client";
import { Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";

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
      <Heading as="h1">{issue.title}</Heading>
      <Text as="p">{issue.description}</Text>
      <Text as="p">{issue.status}</Text>
      <Text as="p">{issue.created_at.toDateString()}</Text>
    </main>
  );
};

export default IssueDetailPage;
