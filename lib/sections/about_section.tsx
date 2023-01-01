import Image from "next/image";

import AboutInfoCard from "../components/about_info_card";
import SectionTitle from "../components/section_title";
import { AboutSectionData } from "../firebase/models";

type Props = {
  data: AboutSectionData;
  className?: string | undefined;
};

const AboutSection = (props: Props) => {
  console.log("AboutSection props : ", props);

  return (
    <div className={props.className}>
      <div className="flex flex-col w-full justify-start items-start px-10 py-10 ">
        <SectionTitle title="WHO AM I ?" />
        <div className="flex flex-row items-center mt-5">
          <div className="mr-10 w-3/5">
            <Image
              {...props.data.image}
              alt="My Pic 2"
              className="rounded-xl"
              loading="lazy"
              placeholder="blur"
              blurDataURL={props.data.blurUrl}
            />
          </div>
          <div className="flex flex-col py-6 grow">
            <div className="text-lg text-justify">{props.data.message}</div>
            <div className="grid grid-rows-2 grid-cols-2 gap-4 mt-5">
              {props.data.infoCards.map((info) => (
                <AboutInfoCard
                  label={info.label}
                  value={info.value}
                  key={info.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
