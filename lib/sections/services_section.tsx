import { SectionTitle, ServiceCard } from "../components";
import { ServiceData } from "../data/models";

type Props = {
  data: ServiceData[];
  className?: string | undefined;
};

const ServicesSection = (props: Props) => {
  return (
    <div
      className={`scroll-m-24 flex flex-col w-full justify-start items-start px-10 py-10 ${props.className}`}
      id="services"
    >
      <SectionTitle title="My Services" />
      <div className="grid grid-rows-1 grid-cols-3 gap-5 mt-28">
        {props.data.map((service) => (
          <ServiceCard
            key={service.label}
            label={service.label}
            description={service.description}
            iconImage={service.iconImage}
            iconBlurUrl={service.iconBlurUrl}
            seeMorePath={service.seeMorePath}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
