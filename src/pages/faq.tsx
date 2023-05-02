import Breadcrumbs from "@/components/Breadcrumbs";
import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";

const Question = ({
  question,
  answer,
}: {
  question: React.ReactNode;
  answer: React.ReactNode;
}) => {
  return (
    <div className="mb-7 md:mb-0">
      <h3 className="flex items-center text-lg font-medium text-white md:mb-4">
        <svg
          className="mr-2 hidden h-5 w-5 flex-shrink-0 text-gray-400 lg:block"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          ></path>
        </svg>
        {question}
      </h3>
      <p className="text-gray-400">{answer}</p>
    </div>
  );
};

const FAQ = () => {
  return (
    <PageWrapper
      title="Name List - NamesLoL"
      description="Frequently asked questions"
    >
      <Breadcrumbs
        breadcrumbs={[
          { name: "home", href: "/" },
          { name: "FAQ", href: "/faq" },
        ]}
      />
      <section className="bg-gray-900">
        <div className="mx-auto mt-7 max-w-screen-xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-white">
            Frequently asked questions
          </h2>
          <p className="mt-1 mb-7 text-lg text-gray-400">
            Learn how NamesLoL works and discover tips on securing your next
            name.
          </p>
          <div className="grid border-t border-gray-700 pt-8 text-left md:grid-cols-2 md:gap-10">
            <Question
              question="How do you estimate when summoner names expire?"
              answer={
                <>
                  We use the{" "}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://support-leagueoflegends.riotgames.com/hc/en-us/articles/201751914"
                    className="text-blue-400 hover:underline"
                  >
                    Summoner Name Decay Rules
                  </a>{" "}
                  which are published on the{" "}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://support-leagueoflegends.riotgames.com/hc/en-us/articles/201751914"
                    className="text-blue-400 hover:underline"
                  >
                    League of Legends FAQ
                  </a>
                  . We take the summoners last activity date and use the simple
                  formula specified in Riot&apos;s FAQ linked above to estimate
                  the expiration date.
                </>
              }
            />

            <Question
              question="What time zones are the dates displayed in?"
              answer={
                "All times you see have been automatically converted to your local time zone (the time set on your PC or phone)."
              }
            />

            <Question
              question="How often do you refresh/recheck summoner names?"
              answer={
                <>
                  We automatically refresh the summoner names listed on the site
                  to keep the expiration dates up-to-date. Recently expired or
                  upcoming names are refreshed hourly, while names farther out
                  are refreshed weekly or monthly. Names in the lists are also
                  updated when you check them using our{" "}
                  <Link
                    href="/name-checker"
                    className="text-blue-400 hover:underline"
                  >
                    name checker.
                  </Link>
                </>
              }
            />

            <Question
              question="Will more regions be supported in the future?"
              answer={
                <>
                  If you would like a region to be added, please let us know.
                  You can request a region is added by{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/bricefrisco/NamesLoL/issues"
                    className="text-blue-400 hover:underline"
                  >
                    opening a feature request.
                  </a>{" "}
                  Alternatively, you can send a message via Reddit to the OP of{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.reddit.com/r/leagueoflegends/comments/pe7xv1/"
                    className="text-blue-400 hover:underline"
                  >
                    this post
                  </a>
                  . If there is enough support for a particular region, we will
                  add it.
                </>
              }
            />

            <Question
              question="Why did a name expire before/after the time listed?"
              answer={
                <>
                  This could happen for various reasons. We rely on the{" "}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://support-leagueoflegends.riotgames.com/hc/en-us/articles/201751914"
                    className="text-blue-400 hover:underline"
                  >
                    Summoner Name Decay Rules
                  </a>{" "}
                  which are published on the{" "}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://support-leagueoflegends.riotgames.com/hc/en-us/articles/201751914"
                    className="text-blue-400 hover:underline"
                  >
                    League of Legends FAQ
                  </a>{" "}
                  to estimate name expiration dates. During our testing, we have
                  found the rules which Riot makes publicly available are
                  usually accurate. However, this is no guarantee that the name
                  will become available at the specified time. The times listed
                  are only estimates.
                </>
              }
            />

            <Question
              question="No matter what name I try, it says it's unavailable?"
              answer={`We have found during testing that Riot will throttle your account if you are checking names too frequently. 
              This will cause any name checked to appear as if it were unavailable. 
              We recommend slowing down and avoid checking name availability from the in-game client too frequently. 
              In our case, these throttles went away in an hour or two.`}
            />

            <Question
              question="Do you have any tips on grabbing the name I want?"
              answer={`Yes. We recommend against checking the name availability too frequently from the in-game client - 
              doing so will get your account temporarily throttled and will make any name appear as if it were unavailable. 
              Secondly, we recommend periodically checking the name availability before and after the time listed on the site. 
              The times listed here are estimates and while they are usually accurate, 
              there are cases where the estimated time has been off by a few minutes or even hours.`}
            />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default FAQ;
