"use client";
import { Avatar, Container, DropdownMenu, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { RiBugFill } from "react-icons/ri";

import NavLinks from "./NavLinks";

const Navbar = () => {
  const { data: session, status } = useSession();

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
            {status === "unauthenticated" && (
              <Link
                href="/api/auth/signin"
                className="transition-colors hover:text-zinc-800"
              >
                Login
              </Link>
            )}
            {status === "authenticated" && (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger className="cursor-pointer">
                  <Avatar
                    src={session?.user?.image!}
                    fallback="?"
                    alt="avatar"
                    size="2"
                    radius="full"
                  />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Item>
                    <Text>{session?.user?.email}</Text>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                    <Link href="/api/auth/signout">Logout</Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            )}
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
