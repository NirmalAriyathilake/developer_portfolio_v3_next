import { AppLink } from ".";

type Props = {
  label: string;
  link: string;
  className?: string | undefined;
};

const HeaderItem = (props: Props) => {
  return (
    <AppLink
      href={props.link}
      className={`btn btn-link no-underline hover:no-underline ${props.className}`}
    >
      {props.label}
    </AppLink>
  );
};

export default HeaderItem;
