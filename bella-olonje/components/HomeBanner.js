import React from "react";
import Image from "next/image";

function HomeBanner() {
  return (
    <>
      <div className="relative">
        <Image
          className="w-full"
          src="/Images/home-banner.png"
          alt="home-banner"
          layout="responsive"
          width={1440}
          height={500}
        />

        <div className="max-w-3xl w-full my-0 mx-auto absolute text-center top-1/3 left-1/2 translate-y-[-50%] translate-x-[-50%]">
          <div>
            <h3 className="font-mont font-bold text-2xl text-blrWhite">
              Food App
            </h3>
            <p className="font-pop font-bold text-5xl text-white">
              Why stay hungry when you can order form Bella Onojie
            </p>
            <p className="font-pop font-medium text-2xl text-blrWhite">
              Download the bella onoje's food app now on
            </p>
          </div>
          <div>
            <div>Playstore</div>
            <div>App store</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeBanner;
