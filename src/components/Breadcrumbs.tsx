import Link from "next/link";
import Home from "@/icons/Home";
import RightArrow from "@/icons/RightArrow";

type BreadcrumbsProps = {
  breadcrumbs: BreadcrumbProps[];
};

const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  return (
    <nav className="flex">
      <ol className="inline-flex items-center space-x-1 text-gray-400 md:space-x-3">
        {breadcrumbs.map((breadcrumb, index) => {
          return (
            <Breadcrumb
              key={index}
              name={breadcrumb.name}
              href={breadcrumb.href}
              last={index === breadcrumbs.length - 1}
            />
          );
        })}
      </ol>
    </nav>
  );
};

type BreadcrumbProps = {
  name: string;
  href: string;
  last?: boolean;
};

const Breadcrumb = ({ name, href, last }: BreadcrumbProps) => {
  return (
    <>
      <Link href={href}>
        <li className="flex cursor-pointer items-center text-sm font-medium capitalize hover:text-white">
          {name === "home" && <Home className="mr-2 h-4 w-4" />}
          {name}
        </li>
      </Link>
      {!last && <RightArrow className="h-6 w-6" />}
    </>
  );
};

export default Breadcrumbs;
