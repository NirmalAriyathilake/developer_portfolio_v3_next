type Props = {
  title: string;
  className?: string | undefined;
};

const SectionTitle = (props: Props) => (
  <div
    className={`self-center font-semibold text-3xl section-title mb-5 ${props.className}`}
  >
    {props.title}
  </div>
);

export default SectionTitle;
