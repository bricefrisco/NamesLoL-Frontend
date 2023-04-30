import Breadcrumbs from "@/components/Breadcrumbs";
import Button from "@/components/Button";
import HorizontalAdDesktop from "@/components/HorizontalAdDesktop";
import HorizontalAdMobile from "@/components/HorizontalAdMobile";
import Input from "@/components/Input";
import NameDisclaimer from "@/components/NameDisclaimer";
import PageWrapper from "@/components/PageWrapper";
import PleaseDisableAdBlocker from "@/components/PleaseDisableAdBlocker";
import Select from "@/components/Select";
import SideRailAd from "@/components/SiderailAd";
import SummonerIcon from "@/components/SummonerIcon";
import TimeDisclaimer from "@/components/TimeDisclaimer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Moment from "react-moment";

export const getServerSideProps = async (context: any) => {
  const { region, name } = context.query;

  if (!region || !name) {
    return {
      props: {},
    };
  }

  const res = await fetch(
    `${process.env.BACKEND_API}/${region}/summoner/${name}`
  );

  const summoner = await res.json();

  return {
    props: {
      initialRegion: region,
      initialName: name,
      summoner,
      found: res.status === 200,
      notFound: res.status === 404,
      error: res.status !== 200 && res.status !== 404,
    },
  };
};

type NameCheckerProps = {
  initialRegion: string | undefined;
  initialName: string | undefined;
  summoner: {
    name: string;
    summonerIcon: number;
    availabilityDate: number;
    lastUpdated: number;
    region: string;
    level: number;
    revisionDate: number;
    accountId: string;
  };
  found: boolean;
  notFound: boolean;
  error: boolean;
};

const NameChecker = ({
  initialRegion,
  initialName,
  summoner,
  found,
  notFound,
  error,
}: NameCheckerProps) => {
  const router = useRouter();
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);
  const [name, setName] = useState(initialName || "");
  const [region, setRegion] = useState(initialRegion || "na");

  const nameAvailable = summoner && summoner?.availabilityDate <= Date.now();
  const decay = Math.min(30, Math.max(6, summoner?.level));

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(
      "/name-checker?name=" +
        name?.toLowerCase() +
        "&region=" +
        region?.toLowerCase()
    );
  };

  return (
    <PageWrapper
      title="Name Checker - NamesLoL"
      description="League of Legends name checker."
    >
      <Breadcrumbs
        breadcrumbs={[
          { name: "home", href: "/" },
          { name: "name checker", href: "/name-checker" },
        ]}
      />

      <h1 className="mt-7 text-2xl font-bold">
        League of Legends Name Checker
      </h1>
      <p className="mt-1 text-lg text-gray-400">
        Check if a summoner name is available or when it will expire.
      </p>

      <HorizontalAdDesktop id="name-checker-d" />
      <HorizontalAdMobile id="name-checker-m" />

      <form
        className="mt-7 grid max-w-2xl gap-4 rounded-lg border border-gray-700 bg-gray-800 p-4 sm:grid-cols-2 lg:gap-8 lg:p-8"
        onSubmit={onSubmit}
      >
        <Input
          value={name}
          setValue={setName}
          label="Summoner name"
          minLength={3}
          maxLength={16}
        />

        <Select
          label="Region"
          options={[
            { value: "na", label: "North America (NA)" },
            { value: "euw", label: "Europe West (EUW)" },
            { value: "eune", label: "Europe Nordic & East (EUNE)" },
            { value: "oce", label: "Oceanic (OCE)" },
            { value: "las", label: "Latin America South (LAS)" },
          ]}
          value={region}
          onChange={(e: any) => setRegion(e.target.value)}
        />

        <div className="mt-2 md:mt-0">
          <Button type="submit">Check availability</Button>
        </div>
      </form>

      <section id="name-availability" className="mt-7">
        {found && (
          <>
            <h2 className="text-xl font-semibold">
              Summoner name <span className="italic">{initialName}</span> is{" "}
              {!initialRenderComplete ? (
                <span className="invisible">loading...</span>
              ) : (
                <>
                  {nameAvailable ? (
                    <span className="text-green-500">available</span>
                  ) : (
                    <span className="text-red-500">unavailable</span>
                  )}
                  .
                </>
              )}
            </h2>

            <div className="mt-3 mb-1 flex items-center">
              <SummonerIcon
                summonerIconId={summoner.summonerIcon}
                width={64}
                height={64}
                className="mr-2 rounded-lg"
              />
              <div className="text-gray-400">
                <div>
                  <span className="font-semibold">Level:</span> {summoner.level}
                </div>
                <div className="mt-1">
                  <span className="font-semibold">Last Activity:</span>{" "}
                  {initialRenderComplete && (
                    <Moment format="MM/DD/YYYY hh:mm:ss A">
                      {summoner.revisionDate}
                    </Moment>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-3 text-gray-400">
              <div>
                <span className="font-semibold">Name Decay:</span> min(30,
                max(6, {summoner.level})) = {decay} months
              </div>
              <div className="mt-1">
                <span className="font-semibold">
                  {nameAvailable ? "Expired:" : "Expires:"}
                </span>{" "}
                {initialRenderComplete && (
                  <Moment format="MM/DD/YYYY hh:mm:ss A">
                    {summoner.availabilityDate}
                  </Moment>
                )}
              </div>
            </div>
          </>
        )}

        {notFound && (
          <>
            <h2 className="text-xl font-semibold">
              Summoner name <span className="italic">{initialName}</span> is{" "}
              <span className="text-green-500">available</span>.
            </h2>
            <p className="mt-1 text-gray-400">
              We found no summoner who currently has this name.
            </p>
          </>
        )}
      </section>

      {(found || notFound) && (
        <section id="disclaimer" className="mt-7">
          {found && <TimeDisclaimer />}
          {notFound && <NameDisclaimer />}
        </section>
      )}

      <SideRailAd id="name-checker-right" mediaMinWidth="1500px" />
      <PleaseDisableAdBlocker />
    </PageWrapper>
  );
};

export default NameChecker;
