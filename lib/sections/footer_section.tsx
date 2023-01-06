import Image from "next/image";

type Props = {
  className?: string | undefined;
};

const FooterSection = (props: Props) => (
  <footer
    className={
      "relative flex h-24 w-full items-center justify-center border-t" +
      props.className
    }
  >
    Copyright &copy; {`${new Date().getFullYear()}`} - All rights reserved by
    <Image
      src="/logo_footer.png"
      alt="Logo"
      className="mx-5"
      width={121}
      height={16}
    />
  </footer>
);

export default FooterSection;
