type Props = {
  label: string;
  className?: string | undefined;
};

const SocialButton = (props: Props) => (
  <button
    className={"px-2 py-1 hover:text-primary hover:underline underline-offset-4 " +
      props.className}
  >
    <h3 className="text-xl font-semibold ">{props.label}</h3>
  </button>
);

export default SocialButton;
