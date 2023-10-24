import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

import IssueStatusFilter from "@/components/issues/IssueStatusFilter";

const IssuesContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="flex flex-col gap-3 p-5">
      <Flex justify="between">
        <Button asChild>
          <Link href="/issues/new">New Issue</Link>
        </Button>
        <IssueStatusFilter />
      </Flex>
      {children}
    </main>
  );
};

export default IssuesContainer;
