import React from "react";
import Image from "next/image";

function AppWork() {
  return (
    <>
      <div className="grid grid-flow-row justify-center py-16">
        <div className="mb-32 text-center text-5xl font-pop font-semibold text-black">
          How the app works
        </div>
        <div className="grid grid-flow-col justify-between gap-44 ">
          <div>
            <Image src="/Images/login-preview.png" width={302} height={525} />
          </div>
          <div className="grid place-content-center">
            <p className="text-orange text-2xl font-bold font-mont">
              Create an account
            </p>
            <p className="mt-4 text-black text-4xl font-bold font-mont">
              Create/login to an existing account to get started
            </p>
            <p className="mt-7 text-slatBlack text-2xl font-medium font-mont">
              An account is created with your email and a desired password
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppWork;
