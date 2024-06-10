import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main>
        <HomePage />
      </main>
    </>
  );
}
