type Props = {
  label: string;
  value: string;
  className?: string | undefined;
};

const AboutMeCard = (props: Props) => {
  console.log("AboutMeCard props : ", props);

  return (
    <div
      className={
        "px-3 py-3 flex flex-col items-start bg-primary-card border-l-4 border-solid border-primary " +
        props.className
      }
    >
      <div className="bg-primary"></div>
      <div className="text-xl font-semibold mb-2">{props.label}</div>
      <div className="text-xl">{props.value}</div>
    </div>
  );
};

export default AboutMeCard;
