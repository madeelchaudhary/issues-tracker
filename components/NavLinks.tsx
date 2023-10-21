"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ROUTES from "@/constants/routes";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="flex gap-5">
      {ROUTES.map((route) => (
        <li key={route.path}>
          <Link
            aria-current={pathname === route.path ? "page" : undefined}
            className="nav-link"
            href={route.path}
          >
            {route.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
