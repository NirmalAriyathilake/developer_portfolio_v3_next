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
import {
  AboutSectionData,
  IntroSectionData,
  ServiceCardData,
} from "../lib/firebase/models";
import AboutSection from "../lib/sections/about_section";
import FooterSection from "../lib/sections/footer_section";
import IntroSection from "../lib/sections/intro_section";
import ServicesSection from "../lib/sections/services_section";

const Home: NextPage<{
  introData: IntroSectionData;
  aboutData: AboutSectionData;
  servicesData: ServiceCardData[];
}> = (props) => {
  console.log("APPLOG : Received Home props : ", props);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center font-body">
      <Head>
        <title>Nirmal Code</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <IntroSection data={props.introData} />
        <AboutSection data={props.aboutData} />
        <ServicesSection data={props.servicesData} />
      </main>

      <FooterSection />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{
  introData: IntroSectionData;
  aboutData: AboutSectionData;
  servicesData: ServiceCardData[];
}> = async () => {
  console.log("APPLOG : Calling getServerSideProps");

  var introData: IntroSectionData = introSectionDataEmpty;
  var aboutData: AboutSectionData = aboutSectionDataEmpty;
  var servicesData: ServiceCardData[] = [];

  const dbRef = databaseRef(db);

  await get(child(dbRef, "/"))
    .then(async (snapshot) => {
      if (snapshot.exists()) {
        console.log("APPLOG : Received snapshot : ", snapshot.val());

        introData = snapshot.val()["intro"];
        aboutData = snapshot.val()["about"];
        const dbServicesData: ServiceCardData[] = snapshot.val()["services"];

        console.log("APPLOG : Received intro : ", introData);
        console.log("APPLOG : Received about : ", aboutData);
        console.log("APPLOG : Received services : ", dbServicesData);

        const pathReference = storageRef(storage, "/mypic.png");
        const pathReference2 = storageRef(storage, "/mypic2.png");

        await getDownloadURL(pathReference)
          .then(async (url) => {
            introData.imageUrl = url;
            console.log("APPLOG : Updated intro imageUrl : ", url);
          })
          .catch((error) => {
            console.error("APPLOG : Storage intro Error : ", error);
          });

        await getDownloadURL(pathReference2)
          .then(async (url) => {
            var { img, base64 } = await getPlaiceholder(url);
            aboutData.image = img;
            aboutData.blurUrl = base64;
            console.log("APPLOG : Updated about imageUrl : ", url);
          })
          .catch((error) => {
            console.error("APPLOG : Storage about Error : ", error);
          });

        for (var i = 0; i < dbServicesData.length; i++) {
          const service = dbServicesData[i];

          console.log("APPLOG : Received services service : ", service);

          const iconPathReference = storageRef(
            storage,
            "/" + service.icon + ".png"
          );

          await getDownloadURL(iconPathReference)
            .then(async (url) => {
              var { img, base64 } = await getPlaiceholder(url);
              service.iconImage = img;
              service.iconBlurUrl = base64;

              console.log(
                "APPLOG : Updated service " + service.label + " imageUrl : ",
                url
              );

              servicesData.push(service);
            })
            .catch((error) => {
              console.error(
                "APPLOG : Storage service " + service.label + " Error : ",
                error
              );
            });
        }
      } else {
        console.log("APPLOG : No data available");
      }
    })
    .catch((error) => {
      console.error("APPLOG : Database Error : ", error);
    });

  console.log("APPLOG : Updated intro : ", introData);
  console.log("APPLOG : Updated about : ", aboutData);
  console.log("APPLOG : Updated services : ", servicesData);

  return {
    props: {
      introData: introData,
      aboutData: aboutData,
      servicesData: servicesData,
    },
  };
};

export default Home;
