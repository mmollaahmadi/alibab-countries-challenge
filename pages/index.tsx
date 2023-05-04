import Head from "next/head";
import HomePage from "@/components/screen/Home";
import Header from "@/components/composite/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alibab Countries Challenge</title>
        <meta
          name="description"
          content="Alibaba's Challenge for Senior Front-End Position"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomePage />
    </>
  );
}
