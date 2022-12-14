import React from 'react';
import Head from "next/head";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div>Hello World</div>
    </div>
  );
}
