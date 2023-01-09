import Image from "next/future/image";

import { DownloadedAsset } from "../data/models";

type Props = {
  downloadedAssets: Map<String, DownloadedAsset>;
  className?: string | undefined;
};

const FooterSection = (props: Props) => (
  <footer
    className={`relative flex h-24 w-full items-center justify-center border-t ${props.className}`}
  >
    Copyright &copy; {`${new Date().getFullYear()}`} - All rights reserved by
    <Image
      {...props.downloadedAssets.get("logoFooter")?.image}
      alt="Logo"
      className="mx-5"
      width={121}
      height={16}
    />
  </footer>
);

export default FooterSection;
