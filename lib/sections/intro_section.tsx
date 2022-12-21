import Image from "next/image";
import { IntroSectionData } from "../../pages/api/models";
import MyPic from "../../public/assets/mypic.png";
import SocialButton from "../components/social_button";

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
            I'm {props.data.name}
          </div>

          <h1 className="text-7xl font-semibold mt-10">
            {props.data.profession}
          </h1>

          <h1 className="text-4xl dash-title font-semibold mt-5">
            {props.data.yearsOfExperience}+ years of experience
          </h1>

          <button className="bg-primary flex flex-row items-center px-10 py-5 font-semibold mt-10 self-center">
            <div className="text-xl font-semibold">Download CV</div>
          </button>
          <div className="flex flex-row mt-10 items-center self-center gap-5">
            {props.data.socialLinks.map((link) => (
              <SocialButton label={link.label} />
            ))}
          </div>
        </div>

        <div className="mt-10 mr-10">
          <Image src={MyPic} alt="My Pic" priority />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
