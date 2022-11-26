import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div>
        <div className="max-w-7xl w-full mx-auto my-3 grid grid-flow-col  items-center ">
          <div>
            <Image
              // loader={myLoader}
              src="/Images/BellaOlonje-logo.png"
              alt="BellaOlonje-logo"
              width={200}
              height={100}
            />
          </div>
          <div>
            <ul className="grid grid-flow-col font-mont font-semibold text-base text-black ">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Product</Link>
              </li>
              <li>
                <Link href="/">Faq</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
