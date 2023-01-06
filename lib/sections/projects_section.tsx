import Link from "next/link";

import { ProjectCard, SectionTitle } from "../components";
import { DownloadedAsset, ProjectData } from "../firebase/models";

type Props = {
  data: ProjectData[];
  downloadedAssets: Map<String, DownloadedAsset>;
  className?: string | undefined;
};

const ProjectsSection = (props: Props) => {
  return (
    <div className={"scroll-m-24 " + props.className} id="projects">
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
        <Link
          href={"projects"}
          className="btn btn-outline btn-primary btn-lg mt-14 "
        >
          MORE PROJECTS
        </Link>
      </div>
    </div>
  );
};

export default ProjectsSection;
