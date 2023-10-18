import NextLink, { LinkProps } from "next/link";
import { Link as StyledLink } from "@radix-ui/themes";

interface Props extends LinkProps {
  children: React.ReactNode;
}

const RadixLink = (props: Props) => {
  return (
    <StyledLink asChild>
      <NextLink {...props} />
    </StyledLink>
  );
};

export default RadixLink;
