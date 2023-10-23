import IssueStatusFilter from "@/components/issues/IssueStatusFilter";
import { IssueStatus } from "@prisma/client";
import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

interface Props {
  status?: IssueStatus;
}

const IssuesContainer: FC<PropsWithChildren<Props>> = ({
  children,
  status,
}) => {
  return (
    <main className="p-5">
      <Flex justify="between" mb="5">
        <Button asChild>
          <Link href="/issues/new">New Issue</Link>
        </Button>
        <IssueStatusFilter status={status} />
      </Flex>
      {children}
    </main>
  );
};

export default IssuesContainer;
