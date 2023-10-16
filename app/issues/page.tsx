import Link from "next/link";
import { Link as StyledLink } from "@radix-ui/themes";

const IssuesPage = () => {
  return (
    <div>
      <StyledLink asChild>
        <Link href="/issues/new">New Issue</Link>
      </StyledLink>
    </div>
  );
};

export default IssuesPage;
