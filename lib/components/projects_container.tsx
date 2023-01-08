import { ProjectCard } from "../components";
import { AppProjectData, DownloadedAsset } from "../data/models";

type Props = {
  data: AppProjectData[];
  downloadedAssets: Map<String, DownloadedAsset>;
  className?: string | undefined;
};

const ProjectsContainer = (props: Props) => {
  return (
    <div className={`flex flex-col gap-10 mt-5 ${props.className}`}>
      {props.data.map((project) => (
        <ProjectCard
          project={project}
          key={project.title}
          downloadedAssets={props.downloadedAssets}
        />
      ))}
    </div>
  );
};

export default ProjectsContainer;
