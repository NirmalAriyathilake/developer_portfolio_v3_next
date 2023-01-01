import Image from "next/image";

import SocialButton from "../components/social_button";
import { IntroSectionData } from "../firebase/models";

type Props = {
  data: IntroSectionData;
  className?: string | undefined;
};

const IntroSection = (props: Props) => {
  console.log("IntroSection props : ", props);

  return (
    <div className={props.className}>
      <div className="flex flex-row w-full top-0 bg-primary-bg items-center pl-10">
        <div className="flex flex-col w-full items-start ml-10">
          <h1 className="text-9xl font-bold">
            Hey<div className="text-primary inline">,</div>
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

          <div className="flex flex-row gap-5  mt-10">
            <button className="border-4 border-primary px-10 py-5 font-semibold shadow-xl rounded-lg ">
              <div className="text-xl font-semibold">Contact Me</div>
            </button>
            <button className="bg-primary px-10 py-5 font-semibold shadow-2xl rounded-lg">
              <div className="text-xl font-semibold">Download CV</div>
            </button>
          </div>
          
          <div className="flex flex-row mt-10 items-center self-center gap-5">
            {props.data.socialLinks.map((link) => (
              <SocialButton label={link.label} key={link.label} />
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
    </div>
  );
};

export default IntroSection;
