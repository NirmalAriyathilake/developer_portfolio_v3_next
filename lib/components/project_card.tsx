import { useEffect, useState } from "react";
import Image from "next/future/image";
import { useTheme } from "next-themes";

import {
  AppProjectData,
  DownloadedAsset,
  ProjectLinkData,
} from "../data/models";

import { AppLink } from ".";

type Props = {
  project: AppProjectData;
  downloadedAssets: Map<String, DownloadedAsset>;
  className?: string | undefined;
};

const ProjectCard = (props: Props) => {
  const { systemTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function ThemedButton(link: ProjectLinkData) {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    const suffix = currentTheme == "dark" ? "Dark" : "";

    return (
      <AppLink
        className="shadow-lg"
        href={link.url}
        target="_blank"
        key={link.url}
      >
        <Image
          {...props.downloadedAssets.get(link.type + suffix)?.image}
          alt="Action Button"
          placeholder="blur"
          blurDataURL={props.downloadedAssets.get(link.type + suffix)?.blurUrl}
          width={211}
        />
      </AppLink>
    );
  }

  return (
    <div
      className={`card lg:card-side shadow-lg border-l-4 border-solid border-primary rounded-r-lg rounded-l-none bg-base-200 ${props.className}`}
      key={props.project.title}
    >
      <div
        className="card-body bg-contain bg-no-repeat bg-center my-5 "
        style={{
          backgroundImage: `url(${
            props.downloadedAssets.get(props.project.language + "Backdrop")?.url
          })`,
          width: "100%",
          height: "100%",
        }}
      >
        <h2 className="card-title">{props.project.title}</h2>
        <h3 className="dash-title">{props.project.shortDescription}</h3>
        <p className="my-5">{props.project.description}</p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-2">
            {props.project.points.map((point) => (
              <p key={point.label}>
                <span className="font-semibold">{point.label} :</span>{" "}
                {point.value}
              </p>
            ))}
          </div>
          <div className="card-actions justify-end flex flex-col items-end gap-5">
            {props.project.links.map((link) => ThemedButton(link))}
          </div>
        </div>
      </div>
      <figure className="m-5">
        <Image
          {...props.project.image}
          alt="Project pic"
          loading="lazy"
          placeholder="blur"
          width={390}
          blurDataURL={props.project.imageBlurUrl}
        />
      </figure>
    </div>
  );
};

export default ProjectCard;
