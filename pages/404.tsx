import { NextPage } from "next";
import Head from "next/head";

import { AppLink } from "../lib/components";

const PageNotFound: NextPage = (props) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center font-body">
      <Head>
        <title>Nirmal Code | 404</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="flex flex-col items-center grow justify-center">
        <div className="flex flex-row text-3xl">
          <p className="font-bold mr-5">404</p> |{" "}
          <p className="ml-5">This page could not be found</p>
        </div>
        <AppLink href={"/"} className="btn btn-link text-xl mt-10">
          Go back Home
        </AppLink>
      </main>
    </div>
  );
};

export default PageNotFound;
