import Link from "next/link";

type Props = {
  label: string;
  url: string;
};

const SocialButton = (props: Props) => (
  <Link
    className="btn btn-link no-underline hover:no-underline social-btn mb-5 "
    href={props.url}
    target="_blank"
  >
    {props.label}
  </Link>
);

export default SocialButton;
