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
        "px-5 py-5 flex flex-col items-center service-card-background " +
        props.className
      }
    >
      <Image
        {...props.iconImage}
        alt="Mobile dev"
        className="rounded-xl"
        loading="lazy"
        placeholder="blur"
        blurDataURL={props.iconBlurUrl}
        width={200}
      />
      <div className="text-xl font-semibold mb-2 mt-5">{props.label}</div>
      <div className="text-xl text-justify mt-2">{props.description}</div>
      <Link
        className="text-xl text-right self-end text-primary mt-5 "
        href={props.seeMorePath}
      >
        See More
      </Link>
    </div>
  );
};

export default ServiceCard;
