import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 bg-gray-900 px-3.5 md:relative">
      <nav className="container mx-auto flex max-w-screen-xl place-content-between items-center py-3">
        <Link href="/">
          <Image
            src="/apple-touch-icon.png"
            width={60}
            height={60}
            alt="Logo"
          />
        </Link>
        <Navigation>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/name-list">Name List</NavItem>
          <NavItem href="/name-checker">Name Checker</NavItem>
          <NavItem href="/faq">FAQ</NavItem>
        </Navigation>
      </nav>
    </header>
  );
};

const Navigation = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <button
        data-collapse-toggle="navbar-hamburger"
        type="button"
        className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 md:hidden"
        aria-controls="navbar-hamburger"
        aria-expanded="false"
        onClick={() => setOpen(!open)}
      >
        <svg
          className="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <ul
        className={`${
          open ? "fixed top-20 left-0 z-50 w-full" : "hidden md:block"
        } text-slate-200 md:relative md:top-0`}
      >
        <div className="container mx-auto rounded-lg rounded-tr-none rounded-tl-none border-gray-800 bg-gray-900 pb-3 md:flex md:pb-0">
          {children}
        </div>
      </ul>
    </div>
  );
};

type NavItemProps = {
  children: React.ReactNode;
  href: string;
};

const NavItem = ({ children, href }: NavItemProps) => {
  const router = useRouter();
  const selected = router.pathname === href;

  return (
    <Link href={href}>
      <li
        className={`md:rounded-0 mx-3 cursor-pointer rounded px-4 py-1.5 font-semibold text-gray-400 hover:bg-gray-700 hover:text-white md:mx-0 md:hover:bg-inherit md:hover:text-blue-500 ${
          selected
            ? "bg-blue-700 text-white hover:bg-blue-700 md:bg-inherit md:text-blue-500 md:hover:bg-inherit"
            : "md:text-white"
        }`}
      >
        {children}
      </li>
    </Link>
  );
};

export default Header;
