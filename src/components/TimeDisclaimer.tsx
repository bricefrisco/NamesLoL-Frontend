import InformationCircle from "@/icons/InformationCircle";
import Link from "next/link";

type Props = {
  className?: string;
};

const TimeDisclaimer = ({ className }: Props) => {
  return (
    <p className={`max-w-xl text-sm tracking-wide text-gray-400 ${className}`}>
      <span className="float-left mr-1 mt-0 inline-block rounded-lg bg-gray-800">
        <InformationCircle className="h-5 w-5 text-gray-400" />
      </span>
      The times shown have been automatically converted to your timezone and are
      shown in MM/DD/YYYY format. Expiration dates are estimates we calculate
      using the Summoner Name Decay rules. To learn more, visit our{" "}
      <Link href="/faq" className="font-semibold text-blue-500 hover:underline">
        FAQ
      </Link>
      .
    </p>
  );
};

export default TimeDisclaimer;
