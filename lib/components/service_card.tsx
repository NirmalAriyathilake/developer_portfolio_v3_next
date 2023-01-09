import Image from "next/future/image";

import { AppLink } from ".";

type Props = {
  label: string;
  description: string;
  iconImage: any;
  iconBlurUrl: string;
  seeMorePath: string;
  className?: string | undefined;
};

const ServiceCard = (props: Props) => {
  return (
    <div
      className={`flex flex-col items-center rounded-xl shadow-lg relative bg-base-200 ${props.className}`}
    >
      <Image
        {...props.iconImage}
        alt="Mobile dev"
        className="rounded-xl absolute -top-20"
        loading="lazy"
        placeholder="blur"
        blurDataURL={props.iconBlurUrl}
        width={150}
      />
      <div className="px-5 py-5 flex flex-col items-center ">
        <div className="text-xl font-semibold mb-2 mt-20">{props.label}</div>
        <div className="text-base text-justify mt-2">{props.description}</div>
        <AppLink
          className="text-lg text-right font-semibold self-end text-primary mt-5 hover:underline underline-offset-4 "
          href={props.seeMorePath}
        >
          See More
        </AppLink>
      </div>
    </div>
  );
};

export default ServiceCard;
