import React from "react";
import AssetCard from "./shared/AssetCard";
import gold from "../assets/assets_MacBook Air M2 - 54_2022-12-27/gold-ingots 1.png";
import fund from "../assets/assets_MacBook Air M2 - 54_2022-12-27/fund (3) 1.png";
import certificate from "../assets/assets_MacBook Air M2 - 54_2022-12-27/certificate 1.png";
import shield from "../assets/assets_MacBook Air M2 - 54_2022-12-27/shield (1) 1.png";
import "../style/multipleasset.css";

function MultipleAsset() {
  return (
    <div className="multipleasset">
      <AssetCard
        title="Mutual Funds"
        icon={fund}
        desc="Set Your Monthly Target"
        bgColor="#e9eeff"
      />
      <AssetCard
        title="Digital Gold"
        icon={gold}
        desc="Set Your Monthly Target"
        bgColor="#fff1dc"
      />
      <AssetCard
        title="Insurance"
        icon={shield}
        desc="Set Your Monthly Target"
        bgColor="#f2f0ff"
      />
      <AssetCard
        title="Bonds"
        icon={certificate}
        desc="Set Your Monthly Target"
        bgColor="#e1f6ff"
      />
    </div>
  );
}

export default MultipleAsset;
