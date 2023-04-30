import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Props = {
  id: string;
  className?: string;
};

declare const window: any;

const HorizontalAdMobile = ({ id, className }: Props) => {
  const [ad, setAd] = useState<any>();
  const router = useRouter();

  useEffect(() => {
    const createAd = async () => {
      const ad = await Promise.resolve(
        window.nitroAds.createAd(id, {
          demo: process.env.NEXT_PUBLIC_ENVIRONMENT !== "production",
          format: "display",
          sizes: [[320, 50]],
          mediaQuery: "(max-width: 777px)",
          refreshVisibleOnly: true,
          renderVisibleOnly: true,
          refreshLimit: 10,
          refreshTime: 60,
          report: {
            enabled: true,
          },
        })
      );

      setAd(ad);
    };

    createAd();
  }, [id]);

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      if (ad?.onNavigate) {
        ad.onNavigate();
      }
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [ad, router]);

  return <div id={id} className={`np-horizontal-mobile ${className || ""}`} />;
};

export default HorizontalAdMobile;
