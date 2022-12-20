import Image from "next/image";
import SocialButton from "../components/social_button";
import MyPic from "../../public/assets/mypic.png";

type Props = {
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
            I'm Nirmal Ariyathilake
          </div>

          <h1 className="text-7xl font-semibold mt-10">Software Engineer</h1>

          <h1 className="text-4xl dash-title font-semibold mt-5">
            5+ years of experience
          </h1>

          <button className="bg-primary flex flex-row items-center px-10 py-5 font-semibold mt-10 self-center">
            <div className="text-xl font-semibold">Download CV</div>
          </button>
          <div className="flex flex-row mt-10 items-center self-center">
            <SocialButton label="LinkedIn" />
            <SocialButton label="GitHub" className="ml-5" />
            <SocialButton label="Play Store" className="ml-5" />
            <SocialButton label="Dart Pub" className="ml-5" />
            <SocialButton label="Stack Overflow" className="ml-5" />
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
