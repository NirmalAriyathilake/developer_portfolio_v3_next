import Link from "next/link";

type Props = {
  label: string;
  url: string;
};

const SocialButton = (props: Props) => (
  <Link
    className="btn btn-ghost hover:btn-link"
    href={props.url}
    target="_blank"
  >
    {props.label}
  </Link>
);

export default SocialButton;
