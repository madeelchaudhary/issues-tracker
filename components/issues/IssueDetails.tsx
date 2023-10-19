import { Issue } from "@prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";

import IssueStatusBadge from "../ui/IssueStatusBadge";

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <>
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
    </>
  );
};

export default IssueDetails;
