import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { child, get, ref as databaseRef } from "firebase/database";
import { getDownloadURL, ref as storageRef } from "firebase/storage";
import { getPlaiceholder } from "plaiceholder";

import { homeHeaderLinks } from "../lib/data/constants";
import {
  aboutSectionDataEmpty,
  introSectionDataEmpty,
} from "../lib/data/emptyObjects";
import { db, storage } from "../lib/data/initFirebase";
import {
  AboutSectionData,
  AppProjectData,
  ContactData,
  DownloadedAsset,
  IntroSectionData,
  ServiceData,
} from "../lib/data/models";
import {
  AboutSection,
  ContactSection,
  FooterSection,
  HeaderSection,
  IntroSection,
  ProjectsSection,
  ServicesSection,
} from "../lib/sections";

const Home: NextPage<{
  introData: IntroSectionData;
  aboutData: AboutSectionData;
  servicesData: ServiceData[];
  projectsData: AppProjectData[];
  contactsData: ContactData[];
  downloadedAssets: [String, DownloadedAsset][];
}> = (props) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center font-body">
      <Head>
        <title>Nirmal Code</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <HeaderSection
          headerLinks={homeHeaderLinks}
          downloadedAssets={new Map(props.downloadedAssets)}
        />
        <IntroSection data={props.introData} className="pt-24" />
        <AboutSection data={props.aboutData} />
        <ServicesSection data={props.servicesData} />
        <ProjectsSection
          data={props.projectsData}
          downloadedAssets={new Map(props.downloadedAssets)}
        />
        <ContactSection data={props.contactsData} />
      </main>

      <FooterSection downloadedAssets={new Map(props.downloadedAssets)} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{
  introData: IntroSectionData;
  aboutData: AboutSectionData;
  servicesData: ServiceData[];
  projectsData: AppProjectData[];
  contactsData: ContactData[];
  downloadedAssets: [String, DownloadedAsset][];
}> = async () => {
  var introData: IntroSectionData = introSectionDataEmpty;
  var aboutData: AboutSectionData = aboutSectionDataEmpty;
  var servicesData: ServiceData[] = [];
  var projectsData: AppProjectData[] = [];
  var contactsData: ContactData[] = [];
  let downloadedAssets = new Map<String, DownloadedAsset>();

  let downloadedAssetsNames = [
    "buttons/ButtonAppSite",
    "buttons/ButtonAppSiteDark",
    "buttons/ButtonPlaystore",
    "buttons/ButtonPlaystoreDark",
    "buttons/ButtonWebSite",
    "buttons/ButtonWebSiteDark",
    "backdrops/FlutterBackdrop",
    "backdrops/AndroidBackdrop",
    "backdrops/SvelteBackdrop",
    "site/logo",
    "site/logoDark",
    "site/logoFooter",
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

        let namepath = name.split("/");

        downloadedAssets.set(namepath[namepath.length - 1], downloadedAsset);
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
        introData = snapshot.val()["intro"];
        aboutData = snapshot.val()["about"];
        const dbServicesData: ServiceData[] = snapshot.val()["services"];
        const dbProjectsData: AppProjectData[] =
          snapshot.val()["featured-projects"];
        const dbContactsData: ContactData[] = snapshot.val()["contacts"];

        const myCVReference = storageRef(
          storage,
          "/my/Nirmal Ariyathilake CV.pdf"
        );

        const myPic1Reference = storageRef(storage, "/my/mypic.png");
        const myPic2Reference = storageRef(storage, "/my/mypic2.png");

        await getDownloadURL(myCVReference)
          .then(async (url) => {
            introData.cvdownload = url;
          })
          .catch((error) => {
            console.error("APPLOG : Storage intro cvdownload Error : ", error);
          });

        await getDownloadURL(myPic1Reference)
          .then(async (url) => {
            introData.imageUrl = url;
          })
          .catch((error) => {
            console.error("APPLOG : Storage intro Error : ", error);
          });

        await getDownloadURL(myPic2Reference)
          .then(async (url) => {
            var { img, base64 } = await getPlaiceholder(url);
            aboutData.image = img;
            aboutData.blurUrl = base64;
          })
          .catch((error) => {
            console.error("APPLOG : Storage about Error : ", error);
          });

        for (var i = 0; i < dbServicesData.length; i++) {
          const service = dbServicesData[i];

          const iconPathReference = storageRef(
            storage,
            "/services/" + service.icon + ".png"
          );

          await getDownloadURL(iconPathReference)
            .then(async (url) => {
              var { img, base64 } = await getPlaiceholder(url);
              service.iconImage = img;
              service.iconBlurUrl = base64;

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

          const iconPathReference = storageRef(
            storage,
            "/projects/" + project.imageName + "-project.png"
          );

          await getDownloadURL(iconPathReference)
            .then(async (url) => {
              var { img, base64 } = await getPlaiceholder(url);
              project.image = img;
              project.imageBlurUrl = base64;

              projectsData.push(project);
            })
            .catch((error) => {
              console.error(
                "APPLOG : Storage project " + project.title + " Error : ",
                error
              );
            });
        }

        for (var i = 0; i < dbContactsData.length; i++) {
          const contact = dbContactsData[i];

          const iconPathReference = storageRef(
            storage,
            "/contacts/" + contact.iconName + ".png"
          );

          await getDownloadURL(iconPathReference)
            .then(async (url) => {
              var { img, base64 } = await getPlaiceholder(url);
              contact.iconImage = img;
              contact.iconBlurUrl = base64;

              contactsData.push(contact);
            })
            .catch((error) => {
              console.error(
                "APPLOG : Storage contact " + contact.iconName + " Error : ",
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

  return {
    props: {
      introData: introData,
      aboutData: aboutData,
      servicesData: servicesData,
      projectsData: projectsData,
      contactsData: contactsData,
      downloadedAssets: Array.from(downloadedAssets.entries()),
    },
  };
};

export default Home;
