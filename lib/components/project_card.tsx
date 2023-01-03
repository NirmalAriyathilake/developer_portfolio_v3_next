import Image from "next/image";
import Link from "next/link";

import { DownloadedAsset, ProjectData } from "../firebase/models";

type Props = {
  project: ProjectData;
  downloadedAssets: Map<String, DownloadedAsset>;
  className?: string | undefined;
};

const ProjectCard = (props: Props) => {
  console.log("ServiceCard props : ", props);

  return (
    <div
      className="card lg:card-side bg-primary-card shadow-xl border-l-4 border-solid border-primary rounded-r-lg rounded-l-none"
      key={props.project.title}
    >
      <div
        className="card-body bg-auto bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${
            props.downloadedAssets.get(props.project.language + "Backdrop")?.url
          })`,
          width: "100%",
          height: "100%",
        }}
      >
        <div className="card-title">{props.project.title}</div>
        <div className="dash-title">{props.project.shortDescription}</div>
        <p className="my-5">{props.project.description}</p>
        {props.project.points.map((point) => (
          <div key={point.label} className="flex flex-row">
            <div className="font-semibold">{point.label} :</div>
            <div>&nbsp;{point.value}</div>
          </div>
        ))}
        <div className="card-actions justify-end flex flex-col items-end">
          {props.project.links.map((link) => (
            <Link
              className="shadow-lg"
              href={link.url}
              target="_blank"
              key={link.url}
            >
              <Image
                {...props.downloadedAssets.get(link.type)?.image}
                alt="ButtonWebSite"
                placeholder="blur"
                blurDataURL={props.downloadedAssets.get(link.type)?.blurUrl}
                width={211}
              />
            </Link>
          ))}
        </div>
      </div>
      <figure>
        <Image
          {...props.project.image}
          alt="My Pic 2"
          className="rounded-xl m-5"
          loading="lazy"
          placeholder="blur"
          width={300}
          blurDataURL={props.project.imageBlurUrl}
        />
      </figure>
    </div>
  );
};

export default ProjectCard;
