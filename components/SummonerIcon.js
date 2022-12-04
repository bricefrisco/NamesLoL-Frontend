import Image from "next/image";
import { useState } from "react";

const SummonerIcon = ({ summonerIconId, ...rest }) => {
  const [src, setSrc] = useState(
    summonerIconId
      ? `https://ddragon.leagueoflegends.com/cdn/12.22.1/img/profileicon/${summonerIconId}.png`
      : `/unknown-summoner-icon.png`
  );
  return (
    <Image
      {...rest}
      src={src}
      alt="Summoner Icon"
      onError={() => setSrc("/unknown-summoner-icon.png")}
    />
  );
};

export default SummonerIcon;
