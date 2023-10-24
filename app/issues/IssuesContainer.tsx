import IssueStatusFilter from "@/components/issues/IssueStatusFilter";
import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

const IssuesContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="p-5">
      <Flex justify="between" mb="5">
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
