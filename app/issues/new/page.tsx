import dynamic from "next/dynamic";

import IssueFormLoading from "../_components/IssueFormLoading";
import { Metadata } from "next";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormLoading />,
});

const NewIssuePage = () => {
  return <IssueForm />;
};

export const metadata: Metadata = {
  title: "Issue Tracker | New Issue",
  description: "Create a new issue for the issue tracker.",
  keywords: "issue, tracker, issues, statistics, dashboard",
};

export default NewIssuePage;
