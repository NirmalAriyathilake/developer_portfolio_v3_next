import Link from "next/link";

type Props = {
  label: string;
  link: string;
  className?: string | undefined;
};

const HeaderItem = (props: Props) => {
  return (
    <Link
      href={props.link}
      className="btn btn-link no-underline hover:no-underline header-item "
    >
      {props.label}
    </Link>
  );
};

export default HeaderItem;
