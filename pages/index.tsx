import type { NextPage } from "next";
import Head from "next/head";

import AboutSection from "../lib/sections/about_section";
import FooterSection from "../lib/sections/footer_section";
import IntroSection from "../lib/sections/intro_section";

const Home: NextPage = () => (
  <div className="min-h-screen w-full flex flex-col items-center justify-center font-body">
    <Head>
      <title>Nirmal Code</title>
      <link rel="icon" href="/favicon.png" />
    </Head>

    <main>
      <IntroSection />
      <AboutSection />
    </main>

    <FooterSection />
  </div>
);

export default Home;
