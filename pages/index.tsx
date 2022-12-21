import { child, get, onValue, ref } from "firebase/database";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { db } from "../lib/firebase/initFirebase";

import AboutSection from "../lib/sections/about_section";
import FooterSection from "../lib/sections/footer_section";
import IntroSection from "../lib/sections/intro_section";
import { IntroSectionData, introSectionDataEmpty } from "./api/models";

const Home: NextPage<{ intro: IntroSectionData }> = (props) => {
  console.log("APPLOG : Received Home props : ", props);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center font-body">
      <Head>
        <title>Nirmal Code</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <IntroSection data={props.intro} />
        <AboutSection />
      </main>

      <FooterSection />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{
  intro: IntroSectionData;
}> = async (context) => {
  console.log("APPLOG : Calling getServerSideProps");

  var intro: IntroSectionData = introSectionDataEmpty;

  const dbRef = ref(db);

  await get(child(dbRef, "intro/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log("APPLOG : Received snapshot for intro : ", snapshot.val());

        intro = snapshot.val();
      } else {
        console.log("APPLOG : No intro data available");
      }
    })
    .catch((error) => {
      console.error("APPLOG : Error : ", error);
    });

  console.log("APPLOG : Received intro : ", intro);

  return {
    props: { intro },
  };
};

export default Home;
