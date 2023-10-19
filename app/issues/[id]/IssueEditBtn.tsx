import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { RxPencil2 } from "react-icons/rx";

const IssueEditBtn = ({ issueId }: { issueId: string }) => {
  return (
    <Button asChild>
      <Link href={`/issues/${issueId}/edit`}>
        <RxPencil2 />
        Edit
      </Link>
    </Button>
  );
};

export default IssueEditBtn;
