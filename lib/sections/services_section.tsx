import ServiceCard from "../components/service_card";
import { ServiceCardData } from "../firebase/models";

type Props = {
  data: ServiceCardData[];
  className?: string | undefined;
};

const ServicesSection = (props: Props) => {
  console.log("ServicesSection props : ", props);

  return (
    <div className={props.className}>
      <div className="flex flex-col w-full justify-start items-start px-10 py-10">
        <div className="self-center font-semibold text-2xl">WHAT I DO ?</div>
        <div className="flex flex-row items-center mt-5">
          <div className="grid grid-rows-1 grid-cols-3 gap-5">
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
      </div>
    </div>
  );
};

export default ServicesSection;
