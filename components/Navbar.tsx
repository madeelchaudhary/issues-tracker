import Link from "next/link";
import { RiBugFill } from "react-icons/ri";

import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="flex items-center gap-6 h-14 px-5 border-b">
      <Link href="/">
        <RiBugFill className="text-2xl cursor-pointer" />
      </Link>
      <ul className="flex gap-6">
        <NavLinks />
      </ul>
    </nav>
  );
};

export default Navbar;
