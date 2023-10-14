"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ROUTES from "@/constants/routes";

const NavLinks = () => {
  const pathname = usePathname();

  return ROUTES.map((route) => (
    <li key={route.path}>
      <Link
        aria-current={pathname === route.path ? "page" : undefined}
        className="text-zinc-500 transition-colors hover:text-zinc-800 aria-[current]:text-zinc-900"
        href={route.path}
      >
        {route.name}
      </Link>
    </li>
  ));
};

export default NavLinks;
