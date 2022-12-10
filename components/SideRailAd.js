import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "./SideRailAd.module.css";

const SideRailAd = ({ id, mediaMinWidth }) => {
  const [ad, setAd] = useState();
  const router = useRouter();

  useEffect(() => {
    const createAd = async () => {
      const ad = await Promise.resolve(
        window.nitroAds.createAd(id, {
          demo: process.env.NEXT_PUBLIC_ENVIRONMENT !== "production",
          format: "display",
          sizes: [[160, 600]],
          mediaQuery: `(min-width: ${
            mediaMinWidth || "1600px"
          }) and (min-height: 700px)`,
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
  }, [id, mediaMinWidth]);

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

  return <div id={id} className={styles.sideRailAd} />;
};

export default SideRailAd;
