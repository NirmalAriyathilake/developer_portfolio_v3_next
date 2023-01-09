import { AppLink } from ".";

type Props = {
  label: string;
  url: string;
};

const SocialButton = (props: Props) => (
  <AppLink
    className="btn btn-link no-underline hover:no-underline social-btn mb-5 "
    href={props.url}
    target="_blank"
  >
    {props.label}
  </AppLink>
);

export default SocialButton;
