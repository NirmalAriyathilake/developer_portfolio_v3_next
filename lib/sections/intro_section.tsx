import Image from "next/image";
import Link from "next/link";

import { SocialButton } from "../components";
import { IntroSectionData } from "../data/models";

type Props = {
  data: IntroSectionData;
  className?: string | undefined;
};

const IntroSection = (props: Props) => {
  return (
    <div
      className={
        "flex flex-row w-full top-0 bg-primary-bg items-center pl-10 " +
        props.className
      }
    >
      <div className="flex flex-col w-full items-start ml-10">
        <h1 className="text-9xl font-bold">
          Hey<span className="text-primary">,</span>
        </h1>

        <div className="text-7xl dash-title font-bold mt-10">
          I&apos;m {props.data.name}
        </div>

        <h1 className="text-7xl font-semibold mt-10">
          {props.data.profession}
        </h1>

        <h1 className="text-4xl dash-title font-semibold mt-5">
          {props.data.yearsOfExperience}+ years of experience
        </h1>

        <div className="flex flex-row gap-5 mt-10">
          <Link
            className="btn btn-outline btn-primary btn-lg"
            href={"#contact"}
          >
            Contact Me
          </Link>
          <Link
            className="btn btn-primary btn-lg"
            href={props.data.cvdownload}
            target="_blank"
            download
            rel="noopener noreferrer"
          >
            Download CV
          </Link>
        </div>

        <div className="flex flex-row mt-10 items-center self-center gap-3">
          {props.data.socialLinks.map((link) => (
            <SocialButton label={link.label} key={link.label} url={link.url} />
          ))}
        </div>
      </div>

      <div className="mt-10 mr-10">
        <Image
          src={props.data.imageUrl}
          alt="My Pic"
          priority
          width={720}
          height={946}
        />
      </div>
    </div>
  );
};

export default IntroSection;
