import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundShape from "./BackgroundShape";

function Hero({}) {
  const [text] = useTypewriter({
    words: [
      "Hi, I'm Shaylee Meyer",
      "fullStackDeveloper",
      "Debugging_SuperHero",
      "Science Enthusiast",
      "Philosophy Devotee",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden z-40">
      <BackgroundShape />
      <Image
        width={175}
        height={175}
        className="relative mx-auto rounded-full object-cover "
        src="/static/me.png"
        alt={""}
      />
      <div>
        <h2 className="text-xs md:text-lg uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-2xl lg:text-6xl md:text-4xl font-semibold px-10">
          <span className="mr-3 z-6">{text}</span>
          <Cursor cursorColor="#b624e6" />
        </h1>
        <div className="pt-5 z-20 relative">
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Portfolio</button>
          </Link>
          <Link href="#leadership">
            <button className="heroButton">Leadership</button>
          </Link>
          <Link href="#interests">
            <button className="heroButton">Interests</button>
          </Link>
          <Link href="#references">
            <button className="heroButton">References</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
