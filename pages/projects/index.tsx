import { NextPage } from "next";
import Head from "next/head";

import { projectPageHeaderLinks } from "../../lib/data/constants";
import { AppProjectData, DownloadedAsset } from "../../lib/data/models";
import { FooterSection, HeaderSection } from "../../lib/sections";

const ProjectsPage: NextPage<{
  projectsData: AppProjectData[];
  downloadedAssets: [String, DownloadedAsset][];
}> = (props) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center font-body">
      <Head>
        <title>Nirmal Code</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <HeaderSection headerLinks={projectPageHeaderLinks} />
      </main>

      <FooterSection />
    </div>
  );
};

export default ProjectsPage;
