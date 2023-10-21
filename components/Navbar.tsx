import { Container, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { RiBugFill } from "react-icons/ri";

import NavLinks from "./NavLinks";
import AuthStatus from "./AuthStatus";

const Navbar = () => {
  return (
    <nav className="p-5 border-b">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="5">
            <Link href="/">
              <RiBugFill className="text-2xl cursor-pointer" />
            </Link>

            <NavLinks />
          </Flex>
          <AuthStatus />
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
