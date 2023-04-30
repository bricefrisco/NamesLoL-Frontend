import Button from "@/components/Button";
import PageWrapper from "@/components/PageWrapper";
import BookOpen from "@/icons/BookOpen";
import CheckCircle from "@/icons/CheckCircle";
import ClipboardDocument from "@/icons/ClipboardDocument";
import Link from "next/link";

export default function Home() {
  return (
    <PageWrapper
      title="League of Legends Names - NamesLoL"
      description="Find expiring League of Legends names."
    >
      <section id="intro" className="py-16">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold lg:text-6xl">NamesLoL</h1>
          <p className="text-lg text-gray-400 lg:text-xl">
            Find your next League of Legends name.
          </p>
          <Button href="/name-list" className="mt-8">
            View Expiring Names
          </Button>
        </div>
      </section>
      <section
        id="links"
        className="cst-break md:mt-16 md:bg-gray-800 md:py-16"
      >
        <div className="mx-auto max-w-4xl gap-4 md:grid md:grid-cols-2">
          <Link
            href="/name-list"
            className="flex cursor-pointer flex-col items-center p-4 py-6 hover:bg-gray-700"
          >
            <ClipboardDocument className="h-10 w-10 text-blue-500 md:m-0 md:mb-3" />
            <h2 className="text-xl font-bold text-white lg:text-2xl">
              Name List
            </h2>
            <p className="mb-1 text-gray-400 lg:text-lg">
              Names that expired or will expire soon.
            </p>
            <span className="font-medium text-blue-500">
              Find a name &rarr;
            </span>
          </Link>
          <Link
            href="/name-checker"
            className="flex cursor-pointer flex-col items-center p-4 py-6 hover:bg-gray-700"
          >
            <CheckCircle className="h-10 w-10 text-blue-500 md:m-0 md:mb-3" />
            <h2 className="text-xl font-bold text-white lg:text-2xl">
              Name Checker
            </h2>
            <p className="mb-1 text-gray-400 lg:text-lg">
              Check if a name is available.
            </p>
            <span className="font-medium text-blue-500">
              Check name availability &rarr;
            </span>
          </Link>

          <Link
            href="/faq"
            className="col-span-2 flex cursor-pointer flex-col items-center p-4 py-6 hover:bg-gray-700"
          >
            <BookOpen className="h-10 w-10 text-blue-500 md:m-0 md:mb-3" />
            <h2 className="text-xl font-bold text-white lg:text-2xl">FAQ</h2>
            <p className="mb-1 text-gray-400 lg:text-lg">
              Frequently asked questions.
            </p>
            <span className="font-medium text-blue-500">
              How NamesLoL works &rarr;
            </span>
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
