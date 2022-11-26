import React from "react";
import Image from "next/image";

function HomeBanner() {
  return (
    <>
      <div className="relative border-bottom-width border-slatBlack">
        <Image
          className="w-full"
          src="/Images/home-banner.png"
          alt="home-banner"
          layout="responsive"
          width={1440}
          height={500}
        />

        <div className="grid grid-flow-row gap-16 text-center max-w-3xl w-full absolute top-[22%] left-1/2 translate-y-[-50%] translate-x-[-50%]">
          <div className="grid grid-flow-row gap-7">
            <div className="grid grid-flow-row justify-center gap-4">
              <h3 className="font-mont font-bold text-2xl text-blrWhite">
                Food App
              </h3>
              <p className="font-pop font-bold text-5xl text-white">
                Why stay hungry when you can order form Bella Onojie
              </p>
            </div>
            <p className="font-pop font-medium text-2xl text-blrWhite">
              Download the bella onoje's food app now on
            </p>
          </div>
          <div className="max-w-lg w-full mx-auto my-0 grid grid-flow-col gap-11">
            <div className="cursor-pointer font-mont font-bold text-xl text-white px-14 py-4 border  border-white rounded-3xl hover:bg-orange hover:border-orange  ">
              Playstore
            </div>
            <div className="cursor-pointer font-mont font-bold text-xl text-white px-14 py-4 border border-white rounded-3xl hover:bg-orange hover:border-orange ">
              App store
            </div>
          </div>
        </div>

        <div>
          <Image
            className="my-0 mx-auto"
            width={548}
            height={640}
            src="/Images/home-banner-app.png"
            alt="app-preview"
            // layout="responsive"
          />
        </div>
      </div>
    </>
  );
}

export default HomeBanner;
