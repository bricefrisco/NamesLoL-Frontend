import Breadcrumbs from "@/components/Breadcrumbs";
import PageWrapper from "@/components/PageWrapper";

const PrivacyPolicy = () => {
  return (
    <PageWrapper
      title="Privacy Policy- NamesLoL"
      description="View upcoming or recently expired summoner names."
    >
      <Breadcrumbs
        breadcrumbs={[
          { name: "home", href: "/" },
          { name: "privacy policy", href: "/privacy-policy" },
        ]}
      />

      <h1 className="mt-7 text-2xl font-bold">Privacy Policy</h1>
      <p className="mt-1 max-w-2xl text-lg text-gray-400">
        NamesLoL uses third-party vendors such as Google for analytics and to
        serve personalized ads to our users.
      </p>

      <ul className="mt-7 max-w-3xl list-inside list-disc space-y-1 text-gray-400">
        <li>
          Third party vendors, including Google, use cookies to serve ads based
          on a user&apos;s prior visits to our website or other websites.
        </li>
        <li className="pt-2">
          Google&apos;s use of advertising cookies enables it and its partners
          to serve ads to users based on their visit to our site and/or other
          sites on the Internet.
        </li>
        <li className="pt-2">
          Users may opt out of personalized adveritsing by visiting
          Google&apos;s{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.google.com/settings/ads"
            className="text-blue-400 hover:underline"
          >
            Ads Settings
          </a>
          .
        </li>
        <li className="pt-2">
          Users may also opt out of personalized advertising by visiting{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://www.aboutads.info/choices/"
            className="text-blue-400 hover:underline"
          >
            www.aboutads.info
          </a>
          .
        </li>
        <li className="pt-2">
          The{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://oag.ca.gov/privacy/ccpa"
            className="text-blue-400 hover:underline"
          >
            California Consumer Privacy Act (CCPA)
          </a>{" "}
          provides you with rights regarding how your data or personal
          information is treated. Under the legislation, California residents
          can choose to opt out of the &quot;sale&quot; of their personal
          information to third parties. Based on the CCPA definition,
          &quot;sale&quot; refers to data collection for the purpose of creating
          advertising and other communications.
        </li>
      </ul>
    </PageWrapper>
  );
};

export default PrivacyPolicy;
