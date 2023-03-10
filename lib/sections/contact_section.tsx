import { ContactCard, SectionTitle } from "../components";
import { ContactData } from "../data/models";

type Props = {
  data: ContactData[];
  className?: string | undefined;
};

const ContactSection = (props: Props) => (
  <div
    className={`scroll-m-24 flex flex-col w-full justify-start items-center px-10 py-10 ${props.className}`}
    id="contact"
  >
    <SectionTitle title="Contact Me" />
    <div className="flex flex-col lg:flex-row gap-10 mt-5 lg:w-full ">
      {props.data.map((contact) => (
        <ContactCard
          contact={contact}
          key={contact.iconName}
          className="lg:basis-1/3"
        />
      ))}
    </div>
  </div>
);

export default ContactSection;
