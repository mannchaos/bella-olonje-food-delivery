import React from "react";
import Image from "next/image";

function HomeBanner() {
  return (
    <>
      <div>
        <Image
          className="w-full"
          src="/Images/home-banner.png"
          alt="home-banner"
          layout="responsive"
          width={1440}
          height={500}
        />
      </div>
    </>
  );
}

export default HomeBanner;
