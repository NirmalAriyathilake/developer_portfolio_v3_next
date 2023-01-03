import ProjectCard from "../components/project_card";
import SectionTitle from "../components/section_title";
import { DownloadedAsset, ProjectData } from "../firebase/models";

type Props = {
  data: ProjectData[];
  downloadedAssets: Map<String, DownloadedAsset>;
  className?: string | undefined;
};

const ProjectsSection = (props: Props) => {
  console.log("ProjectsSection props : ", props);

  return (
    <div className={props.className}>
      <div className="flex flex-col w-full justify-start items-center px-10 py-10">
        <SectionTitle title="MY PROJECTS" />
        <div className="flex flex-col gap-10 mt-5">
          {props.data.map((project) => (
            <ProjectCard
              project={project}
              key={project.title}
              downloadedAssets={props.downloadedAssets}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
