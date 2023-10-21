import Link from "next/link";
import { RiBugFill } from "react-icons/ri";

import NavLinks from "./NavLinks";
import { Container, Flex } from "@radix-ui/themes";

const Navbar = () => {
  return (
    <nav className="p-5 border-b">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="5">
            <Link href="/">
              <RiBugFill className="text-2xl cursor-pointer" />
            </Link>
            <ul className="flex gap-5">
              <NavLinks />
            </ul>
          </Flex>
          <Flex>
            <Link href="/api/auth/signin">Sign in</Link>
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
