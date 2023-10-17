import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

const IssuesContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="p-5 space-y-5">
      <Button asChild>
        <Link href="/issues/new">New Issue</Link>
      </Button>
      {children}
    </main>
  );
};

export default IssuesContainer;
