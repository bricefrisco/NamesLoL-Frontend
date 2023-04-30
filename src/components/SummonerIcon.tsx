import Image from "next/image";
import { useEffect, useState } from "react";

const SummonerIcon = ({ summonerIconId, ...rest }: any) => {
  const [src, setSrc] = useState(
    summonerIconId
      ? `https://ddragon.leagueoflegends.com/cdn/13.8.1/img/profileicon/${summonerIconId}.png`
      : `/unknown-summoner-icon.png`
  );

  useEffect(() => {
    setSrc(
      summonerIconId
        ? `https://ddragon.leagueoflegends.com/cdn/13.8.1/img/profileicon/${summonerIconId}.png`
        : `/unknown-summoner-icon.png`
    );
  }, [summonerIconId]);

  return (
    <Image
      {...rest}
      src={src}
      alt="Summoner Icon"
      onError={() => setSrc("/unknown-summoner-icon.png")}
      unoptimized
    />
  );
};

export default SummonerIcon;
