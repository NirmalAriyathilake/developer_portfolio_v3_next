import Image from "next/image";
import Link from "next/link";

import { ContactData } from "../data/models";

type Props = {
  contact: ContactData;
  className?: string | undefined;
};

const ContactCard = (props: Props) => {
  return (
    <Link
      key={props.contact.iconName}
      className={`flex flex-col justify-center items-center bg-base-200 p-5 border-l-4 border-primary rounded-r-lg shadow-lg ${props.className}`}
      href={props.contact.value}
      target="_blank"
    >
      <Image
        {...props.contact.iconImage}
        alt={props.contact.iconName}
        width={48}
      />
      <p className="text-lg mt-5">{props.contact.show}</p>
    </Link>
  );
};

export default ContactCard;
