import Link from "next/link";

type Props = {
  href: string;
  children: any;
  target?: string | undefined;
  className?: string | undefined;
};

const AppLink = (props: Props) => {
  return (
    <Link href={props.href} target={props.target} >
      <a className={props.className} target={props.target}>{props.children}</a>
    </Link>
  );
};

export default AppLink;
