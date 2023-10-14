import Link from "next/link";
import { RiBugFill } from "react-icons/ri";

import ROUTES from "../constants/routes";

const Navbar = () => {
  return (
    <nav className="flex items-center gap-6 h-14 px-5 border-b">
      <Link href="/">
        <RiBugFill className="text-2xl cursor-pointer" />
      </Link>
      <ul className="flex gap-6">
        {ROUTES.map((route) => (
          <li key={route.path}>
            <Link
              className="text-zinc-500 transition-colors hover:text-zinc-800"
              href={route.path}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
