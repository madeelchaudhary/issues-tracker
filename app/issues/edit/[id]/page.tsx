import prisma from "@/prisma/client";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

import IssueFormLoading from "../../_components/IssueFormLoading";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormLoading />,
});

interface Props {
  params: {
    id: string;
  };
}

const IssueEditPage = async ({ params: { id } }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id,
    },
  });

  if (!issue) return notFound();

  return <IssueForm issue={issue} />;
};

export const generateMetadata = async ({ params: { id } }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id,
    },
  });

  return {
    title: `Issue Tracker | ${issue?.title ?? "Issue"}`,
    description: `Edit the issue '${issue?.title}'.`,
    keywords: "issue, tracker, issues, statistics, dashboard",
  };
};
export default IssueEditPage;
