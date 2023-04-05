import React from "react";
import { ReactComponent as ClientDatabiz } from "../assets/client-databiz.svg";
//import { ReactComponent as AudioPhile } from "../assets/client-audophile.svg";
import { ReactComponent as ClientMeet } from "../assets/client-meet.svg";
import { ReactComponent as ClientMaker } from "../assets/client-maker.svg";
export default function Hero() {
  return (
    <div className="Hero--section">
      <div className="hero--section--left">
        <h1>Make Remote Work</h1>
        <h2>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </h2>
        <a>Learn more</a>
        <div className="hero--section--svg">
          <ClientDatabiz />
          {/* /* <AudioPhile /> */}
          <ClientMeet />
          <ClientMaker />
        </div>
        <div className="hero--section--right">
          <img src="src/assets/image-hero-desktop.png" />
        </div>
      </div>
    </div>
  );
}
