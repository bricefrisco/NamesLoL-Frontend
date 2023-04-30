import InformationCircle from "@/icons/InformationCircle";
import Link from "next/link";

type Props = {
  className?: string;
};

const NameDisclaimer = ({ className }: Props) => {
  return (
    <p className={`max-w-xl text-sm tracking-wide text-gray-400 ${className}`}>
      <div className="float-left mr-1 mt-0 inline-block rounded-lg bg-gray-800">
        <InformationCircle className="h-5 w-5 text-gray-400" />
      </div>
      The name could be invalid, blocked by Riot, or taken by a banned summoner.
    </p>
  );
};

export default NameDisclaimer;
