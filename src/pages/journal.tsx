import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";

const Journal: NextPage = () => {
  return (
    <>
      <Head>
        <title>Journal | Dashboard</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="col-span-10 flex min-h-screen flex-col items-center justify-center">
        <p>Journal</p>
      </main>
    </>
  );
};

export default Journal;
