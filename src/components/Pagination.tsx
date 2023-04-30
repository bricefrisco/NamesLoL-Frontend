import Link from "next/link";

const Pagination = ({ previousPage, nextPage, className }: any) => {
  return (
    <div className={`flex ${className || ""}`}>
      <Link
        className="inline-flex cursor-pointer items-center rounded-l border-gray-900 bg-gray-700 px-8 py-2 text-sm font-medium text-gray-400 hover:bg-gray-600 hover:text-white disabled:cursor-not-allowed disabled:hover:bg-gray-800 disabled:hover:text-gray-400"
        href={previousPage}
      >
        <svg
          aria-hidden="true"
          className="mr-2 h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
        Prev
      </Link>

      <Link
        className="inline-flex cursor-pointer items-center rounded-r border-0 border-l border-gray-600 bg-gray-700 px-8 py-2 text-sm font-medium text-gray-400 hover:bg-gray-600 hover:text-white disabled:cursor-not-allowed disabled:hover:bg-gray-800 disabled:hover:text-gray-400"
        href={nextPage}
      >
        Next
        <svg
          aria-hidden="true"
          className="ml-2 h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </Link>
    </div>
  );
};

export default Pagination;
