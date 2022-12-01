import Head from "next/head";
import Image from "next/image";
import Details from "../components/Details/Details";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Details />
    </div>
  );
}
