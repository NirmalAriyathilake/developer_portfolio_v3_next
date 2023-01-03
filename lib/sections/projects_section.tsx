import Image from "next/image";
import Link from "next/link";

import ButtonAppSite from "../../public/assets/ButtonAppSite.png";
import ButtonPlaystore from "../../public/assets/ButtonPlaystore.png";
import ButtonWebSite from "../../public/assets/ButtonWebSite.png";
import SectionTitle from "../components/section_title";
import { ProjectData } from "../firebase/models";

type Props = {
  data: ProjectData[];
  className?: string | undefined;
};

const ProjectsSection = (props: Props) => {
  console.log("ProjectsSection props : ", props);

  return (
    <div className={props.className}>
      <div className="flex flex-col w-full justify-start items-center px-10 py-10">
        <SectionTitle title="MY PROJECTS" />
        <div className="flex flex-col gap-5">
          {props.data.map((project) => (
            <div
              className="card lg:card-side bg-primary-card shadow-xl border-l-4 border-solid border-primary rounded-r-lg rounded-l-none"
              key={project.title}
            >
              <div className="card-body">
                <div className="card-title">{project.title}</div>
                <div className="dash-title">{project.shortDescription}</div>
                <p className="my-5">{project.description}</p>
                {project.points.map((point) => (
                  <div key={point.label} className="flex flex-row">
                    <div className="font-semibold">{point.label} :</div>
                    <div>&nbsp;{point.value}</div>
                  </div>
                ))}
                <div className="card-actions justify-end flex flex-col items-end">
                  {project.links.map((link) =>
                    link.type == "Playstore" ? (
                      <Link
                        className="shadow-lg"
                        href={link.url}
                        target="_blank"
                        key={link.url}
                      >
                        <Image
                          src={ButtonPlaystore}
                          alt="ButtonPlaystore"
                          height={62}
                        />
                      </Link>
                    ) : link.type == "AppSite" ? (
                      <Link
                        className="shadow-lg"
                        href={link.url}
                        target="_blank"
                        key={link.url}
                      >
                        <Image
                          src={ButtonAppSite}
                          alt="ButtonAppSite"
                          height={62}
                        />
                      </Link>
                    ) : (
                      <Link
                        className="shadow-lg"
                        href={link.url}
                        target="_blank"
                        key={link.url}
                      >
                        <Image
                          src={ButtonWebSite}
                          alt="ButtonWebSite"
                          height={62}
                        />
                      </Link>
                    )
                  )}
                </div>
              </div>
              <figure>
                <Image
                  {...project.image}
                  alt="My Pic 2"
                  className="rounded-xl m-5"
                  loading="lazy"
                  placeholder="blur"
                  width={300}
                  blurDataURL={project.imageBlurUrl}
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
