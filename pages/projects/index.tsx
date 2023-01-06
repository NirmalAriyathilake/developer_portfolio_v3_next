import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { DownloadedAsset, ProjectData } from "../../lib/firebase/models";
import { FooterSection } from "../../lib/sections";

const ProjectsPage: NextPage<{
  projectsData: ProjectData[];
  downloadedAssets: [String, DownloadedAsset][];
}> = (props) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center font-body">
      <Head>
        <title>Nirmal Code</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="flex flex-col items-center grow justify-center">
        <p className="text-2xl text-primary font-semibold">
          PAGE UNDER MAINTENANCE
        </p>
        <Link href={"/"} className="btn btn-link text-xl mt-10">
          Go back Home
        </Link>
      </main>

      <FooterSection />
    </div>
  );
};

export default ProjectsPage;
