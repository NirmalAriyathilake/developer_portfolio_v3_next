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
  DownloadedAsset,
  IntroSectionData,
  ProjectData,
  ServiceData,
} from "../lib/firebase/models";
import AboutSection from "../lib/sections/about_section";
import FooterSection from "../lib/sections/footer_section";
import IntroSection from "../lib/sections/intro_section";
import ProjectsSection from "../lib/sections/projects_section";
import ServicesSection from "../lib/sections/services_section";

const Home: NextPage<{
  introData: IntroSectionData;
  aboutData: AboutSectionData;
  servicesData: ServiceData[];
  projectsData: ProjectData[];
  downloadedAssets: [String, DownloadedAsset][];
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
        <ProjectsSection
          data={props.projectsData}
          downloadedAssets={new Map(props.downloadedAssets)}
        />
      </main>

      <FooterSection />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{
  introData: IntroSectionData;
  aboutData: AboutSectionData;
  servicesData: ServiceData[];
  projectsData: ProjectData[];
  downloadedAssets: [String, DownloadedAsset][];
}> = async () => {
  console.log("APPLOG : Calling getServerSideProps");

  var introData: IntroSectionData = introSectionDataEmpty;
  var aboutData: AboutSectionData = aboutSectionDataEmpty;
  var servicesData: ServiceData[] = [];
  var projectsData: ProjectData[] = [];
  let downloadedAssets = new Map<String, DownloadedAsset>();

  let downloadedAssetsNames = [
    "ButtonAppSite",
    "ButtonPlaystore",
    "ButtonWebSite",
    "FlutterBackdrop",
    "AndroidBackdrop",
    "SvelteBackdrop",
  ];

  const dbRef = databaseRef(db);

  for (let name of downloadedAssetsNames) {
    const iconPathReference = storageRef(storage, "/" + name + ".png");

    await getDownloadURL(iconPathReference)
      .then(async (url) => {
        var { img, base64 } = await getPlaiceholder(url);
        let downloadedAsset: DownloadedAsset = {
          image: img,
          blurUrl: base64,
          url: url,
        };

        downloadedAssets.set(name, downloadedAsset);
      })
      .catch((error) => {
        console.error(
          "APPLOG : Storage asset name " + name + " Error : ",
          error
        );
      });
  }

  await get(child(dbRef, "/"))
    .then(async (snapshot) => {
      if (snapshot.exists()) {
        console.log("APPLOG : Received snapshot : ", snapshot.val());

        introData = snapshot.val()["intro"];
        aboutData = snapshot.val()["about"];
        const dbServicesData: ServiceData[] = snapshot.val()["services"];
        const dbProjectsData: ProjectData[] =
          snapshot.val()["featured-projects"];

        console.log("APPLOG : Received intro : ", introData);
        console.log("APPLOG : Received about : ", aboutData);
        console.log("APPLOG : Received services : ", dbServicesData);
        console.log("APPLOG : Received projects : ", dbProjectsData);

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

        for (var i = 0; i < dbProjectsData.length; i++) {
          const project = dbProjectsData[i];

          console.log("APPLOG : Received projects project : ", project);

          const iconPathReference = storageRef(
            storage,
            "/" + project.imageName + "-project.png"
          );

          await getDownloadURL(iconPathReference)
            .then(async (url) => {
              var { img, base64 } = await getPlaiceholder(url);
              project.image = img;
              project.imageBlurUrl = base64;

              console.log(
                "APPLOG : Updated project " + project.title + " imageUrl : ",
                url
              );

              projectsData.push(project);
            })
            .catch((error) => {
              console.error(
                "APPLOG : Storage project " + project.title + " Error : ",
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
  console.log("APPLOG : Updated projects : ", projectsData);

  return {
    props: {
      introData: introData,
      aboutData: aboutData,
      servicesData: servicesData,
      projectsData: projectsData,
      downloadedAssets: Array.from(downloadedAssets.entries()),
    },
  };
};

export default Home;
