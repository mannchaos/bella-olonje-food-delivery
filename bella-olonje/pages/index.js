import Image from "next/image";
import PageTitle from "../components/PageTitle";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";
import AppWork from "../components/AppWork";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <PageTitle pageTitle="Bella Olonje" />
      <Header />
      <HomeBanner />
      {/* //todo make one component for all of them app info */}
      <div className="max-w-6xl w-full my-0 mx-auto">
        <AppWork />
      </div>
    </>
  );
}
