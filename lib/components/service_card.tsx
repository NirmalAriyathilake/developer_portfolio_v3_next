import Image from "next/image";
import Link from "next/link";

type Props = {
  label: string;
  description: string;
  iconImage: any;
  iconBlurUrl: string;
  seeMorePath: string;
  className?: string | undefined;
};

const ServiceCard = (props: Props) => {
  console.log("ServiceCard props : ", props);

  return (
    <div
      className={
        "flex flex-col items-center rounded-xl shadow-lg relative " +
        props.className
      }
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
      <div className="px-5 py-5 flex flex-col items-center bg-primary-card ">
        <div className="text-xl font-semibold mb-2 mt-20">{props.label}</div>
        <div className="text-base text-justify mt-2">{props.description}</div>
        <Link
          className="text-lg text-right font-semibold self-end text-primary mt-5 hover:underline underline-offset-4 "
          href={props.seeMorePath}
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
