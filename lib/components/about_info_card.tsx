type Props = {
  label: string;
  value: string;
  className?: string | undefined;
};

const AboutInfoCard = (props: Props) => {
  return (
    <div
      className={`px-3 py-3 flex flex-col items-start bg-base-200 border-l-4 border-solid border-primary rounded-r-lg shadow-lg ${props.className}`}
    >
      <div className="text-xl font-semibold mb-2">{props.label}</div>
      <div className="text-xl">{props.value}</div>
    </div>
  );
};

export default AboutInfoCard;
