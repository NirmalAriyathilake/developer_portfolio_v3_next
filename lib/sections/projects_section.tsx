import { AppLink, ProjectsContainer, SectionTitle } from "../components";
import { AppProjectData, DownloadedAsset } from "../data/models";

type Props = {
  data: AppProjectData[];
  downloadedAssets: Map<String, DownloadedAsset>;
  className?: string | undefined;
};

const ProjectsSection = (props: Props) => {
  return (
    <div
      className={`scroll-m-24 flex flex-col w-full justify-start items-center px-10 py-10 ${props.className}`}
      id="projects"
    >
      <SectionTitle title="My Projects" />
      <ProjectsContainer
        data={props.data}
        downloadedAssets={props.downloadedAssets}
      />
      <AppLink
        href={"projects"}
        className="btn btn-outline btn-primary btn-lg mt-14 "
      >
        MORE PROJECTS
      </AppLink>
    </div>
  );
};

export default ProjectsSection;
