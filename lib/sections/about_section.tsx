import Image from "next/image";
import MyPic2 from "../../public/assets/mypic2.png";
import AboutMeCard from "../components/about_me_card";

type Props = {
  className?: string | undefined;
};

const AboutSection = (props: Props) => (
  <div className={props.className}>
    <div className="flex flex-col w-full justify-start items-start px-10 py-10">
      {/* <div className="dash-title text-lg">About</div> */}
      <div className="self-center font-semibold text-2xl">WHO AM I ?</div>
      <div className="flex flex-row items-center mt-5">
        <div className="mr-10">
          <Image
            src={MyPic2}
            alt="My Pic 2"
            className="rounded-xl"
            loading="lazy"
            height={800}
          />
        </div>
        <div className="flex flex-col py-6">
          <div className="text-lg text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            rhoncus non tortor eget auctor. Donec nisl neque, dictum sed
            pulvinar id, varius ac libero. Suspendisse non sollicitudin eros.
            Morbi sodales dui dictum, dignissim turpis id, posuere lacus. Mauris
            pharetra a justo sed varius. Curabitur tortor odio, semper et neque
            sed, sagittis so
          </div>
          <div className="grid grid-rows-2 grid-cols-2 gap-4 mt-5">
            <AboutMeCard label="Name" value="John Doe" />
            <AboutMeCard label="Email" value="jhon.doe@gmail.com" />
            <AboutMeCard label="Address" value="Pasadenia, CF" />
            <AboutMeCard label="Mobile No" value="+01 123 456 789" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutSection;
