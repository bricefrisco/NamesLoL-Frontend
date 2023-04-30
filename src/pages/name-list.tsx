import Breadcrumbs from "@/components/Breadcrumbs";
import PageWrapper from "@/components/PageWrapper";
import Select from "@/components/Select";
import DatePicker from "@/components/DatePicker";
import { useRouter } from "next/router";
import {
  Table,
  TableBody,
  TableColumn,
  TableData,
  TableHead,
  TableRow,
} from "@/components/Table";
import Moment from "react-moment";
import TimeInfo from "@/components/TimeDisclaimer";
import SummonerIcon from "@/components/SummonerIcon";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import HorizontalAdDesktop from "@/components/HorizontalAdDesktop";
import HorizontalAdMobile from "@/components/HorizontalAdMobile";
import SideRailAd from "@/components/SiderailAd";
import PleaseDisableAdBlocker from "@/components/PleaseDisableAdBlocker";

const floorDate = (date: Date) => {
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
};

export const getServerSideProps = async (context: any) => {
  const { region, nameLength, date, backwards } = context.query;

  const timestampQuery = date || floorDate(new Date()).getTime();
  const backwardsQuery = backwards === "true";
  const regionQuery = region?.toLowerCase() || "na";

  const url = new URL(`${process.env.BACKEND_API}/${regionQuery}/summoners`);
  url.searchParams.append("timestamp", String(timestampQuery));
  url.searchParams.append("backwards", String(backwardsQuery));
  url.searchParams.append("nameLength", String(nameLength));

  const res = await fetch(url.toString());
  const data = await res.json();

  return {
    props: {
      region: regionQuery.toLowerCase(),
      nameLength: nameLength || "any",
      timestamp: timestampQuery,
      summoners: data?.summoners || null,
      backwards: data?.backwards || null,
      forwards: data?.forwards || null,
      isBackwards: backwards === "true",
      error: res.status !== 200,
    },
  };
};

const NameList = ({
  region,
  nameLength,
  timestamp,
  summoners,
  backwards,
  forwards,
  isBackwards,
  error,
}: any) => {
  const router = useRouter();

  const onRegionChange = (region: string) => {
    router.push({
      pathname: "/name-list",
      query: {
        ...router.query,
        region: region.toLowerCase(),
      },
    });
  };

  const onNameLengthChange = (nameLength: string) => {
    router.push({
      pathname: "/name-list",
      query: {
        ...router.query,
        nameLength: nameLength,
      },
    });
  };

  const onDateChange = (date: Date) => {
    router.push({
      pathname: "/name-list",
      query: {
        ...router.query,
        date: floorDate(date).getTime(),
      },
    });
  };

  const previousPage = {
    pathname: "/name-list",
    query: {
      ...router.query,
      date: backwards || floorDate(new Date()).getTime(),
      backwards: true,
    },
  };

  const nextPage = {
    pathname: "/name-list",
    query: {
      ...router.query,
      date: forwards || floorDate(new Date()).getTime(),
      backwards: false,
    },
  };

  return (
    <PageWrapper
      title="Name List - NamesLoL"
      description="View upcoming or recently expired summoner names."
    >
      <Breadcrumbs
        breadcrumbs={[
          { name: "home", href: "/" },
          { name: "name list", href: "/name-list" },
        ]}
      />

      <h1 className="mt-7 text-2xl font-bold">League of Legends Name List</h1>
      <p className="mt-1 text-lg text-gray-400">
        View upcoming or recently expired summoner names.
      </p>

      <HorizontalAdDesktop id="name-list-d" />
      <HorizontalAdMobile id="name-list-m" />

      <div className="mt-7 max-w-3xl sm:flex">
        <Select
          className="w-full"
          label="Region"
          options={[
            { value: "na", label: "North America (NA)" },
            { value: "euw", label: "Europe West (EUW)" },
            { value: "eune", label: "Europe Nordic & East (EUNE)" },
            { value: "oce", label: "Oceanic (OCE)" },
            { value: "las", label: "Latin America South (LAS)" },
          ]}
          value={region}
          onChange={(e: any) => onRegionChange(e.target.value)}
        />

        <Select
          className="mt-2 w-full sm:mt-0 sm:ml-5"
          label="Name length"
          options={[
            { value: "any", label: "Any" },
            { value: "3", label: "3" },
            { value: "4", label: "4" },
            { value: "5", label: "5" },
            { value: "6", label: "6" },
            { value: "7", label: "7" },
            { value: "8", label: "8" },
            { value: "9", label: "9" },
            { value: "10", label: "10" },
            { value: "11", label: "11" },
            { value: "12", label: "12" },
            { value: "13", label: "13" },
            { value: "14", label: "14" },
            { value: "15", label: "15" },
            { value: "16", label: "16" },
          ]}
          value={nameLength}
          onChange={(e: any) => onNameLengthChange(e.target.value)}
        />

        <DatePicker
          label="Available on"
          className="mt-2 w-full sm:ml-5 sm:mt-0"
          onChange={onDateChange}
          date={new Date(Number(timestamp))}
        />
      </div>

      <div className="flex place-content-end">
        <Pagination
          className="mt-4"
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </div>

      <Table className="mt-2">
        <TableHead>
          <TableColumn>Name</TableColumn>
          <TableColumn className="text-right md:text-left">Level</TableColumn>
          <TableColumn className="hidden md:table-cell">Expires</TableColumn>
          <TableColumn className="text-right md:text-left">
            Expiry Date
          </TableColumn>
        </TableHead>
        <TableBody>
          {summoners?.map((summoner: any) => (
            <TableRow key={summoner.name}>
              <TableData>
                <Link
                  className="flex items-center text-blue-400 hover:underline"
                  href={{
                    pathname: "/name-checker",
                    query: {
                      name: summoner.name,
                      region: summoner.region.toLowerCase(),
                    },
                  }}
                >
                  <SummonerIcon
                    summonerIconId={summoner.summonerIcon}
                    width={42}
                    height={42}
                    className="mr-2 rounded-lg"
                  />
                  {summoner.name}
                </Link>
              </TableData>
              <TableData className="text-right md:text-left">
                {summoner.level}
              </TableData>
              <TableData className="hidden md:table-cell">
                <Moment fromNow>{summoner.availabilityDate}</Moment>
              </TableData>
              <TableData className="text-right md:text-left">
                <Moment format="MM/DD/YYYY hh:mm:ss A">
                  {summoner.availabilityDate}
                </Moment>
              </TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-2 flex flex-wrap-reverse place-content-between items-end">
        <TimeInfo className="mt-2" />
        <Pagination previousPage={previousPage} nextPage={nextPage} />
      </div>

      <SideRailAd id="name-list-right" mediaMinWidth="1650px" />
      <PleaseDisableAdBlocker />
    </PageWrapper>
  );
};

export default NameList;
