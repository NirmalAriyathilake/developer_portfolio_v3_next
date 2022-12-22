import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { child, get, ref as databaseRef } from "firebase/database";
import { getDownloadURL, ref as storageRef } from "firebase/storage";
import { getPlaiceholder } from "plaiceholder";

import {
  aboutSectionDataEmpty,
  introSectionDataEmpty,
} from "../lib/firebase/emptyObjects";
import { db, storage } from "../lib/firebase/initFirebase";
import { AboutSectionData, IntroSectionData } from "../lib/firebase/models";
import AboutSection from "../lib/sections/about_section";
import FooterSection from "../lib/sections/footer_section";
import IntroSection from "../lib/sections/intro_section";

const Home: NextPage<{ intro: IntroSectionData; about: AboutSectionData }> = (
  props
) => {
  console.log("APPLOG : Received Home props : ", props);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center font-body">
      <Head>
        <title>Nirmal Code</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <IntroSection data={props.intro} />
        <AboutSection data={props.about} />
      </main>

      <FooterSection />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{
  intro: IntroSectionData;
  about: AboutSectionData;
}> = async (context) => {
  console.log("APPLOG : Calling getServerSideProps");

  var intro: IntroSectionData = introSectionDataEmpty;
  var about: AboutSectionData = aboutSectionDataEmpty;

  const dbRef = databaseRef(db);
  const pathReference = storageRef(storage, "/mypic.png");
  const pathReference2 = storageRef(storage, "/mypic2.png");

  await get(child(dbRef, "/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log("APPLOG : Received snapshot : ", snapshot.val());

        intro = snapshot.val()["intro"];
        about = snapshot.val()["about"];
      } else {
        console.log("APPLOG : No data available");
      }
    })
    .catch((error) => {
      console.error("APPLOG : Database Error : ", error);
    });

  console.log("APPLOG : Received intro : ", intro);
  console.log("APPLOG : Received about : ", about);

  await getDownloadURL(pathReference)
    .then(async (url) => {
      intro.imageUrl = url;
      console.log("APPLOG : Received intro imageUrl : ", url);
    })
    .catch((error) => {
      console.error("APPLOG : Storage intro Error : ", error);
    });

  await getDownloadURL(pathReference2)
    .then(async (url) => {
      var { img, base64 } = await getPlaiceholder(url);
      about.image = img;
      about.blurUrl = base64;
      console.log("APPLOG : Received about imageUrl : ", url);
    })
    .catch((error) => {
      console.error("APPLOG : Storage about Error : ", error);
    });

  return {
    props: { intro, about },
  };
};

export default Home;
