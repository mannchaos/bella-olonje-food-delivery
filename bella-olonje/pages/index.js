import Image from "next/image";
import PageTitle from "../components/PageTitle";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <PageTitle pageTitle="Bella Olonje" />
      <Header />
      <HomeBanner />
    </>
  );
}
