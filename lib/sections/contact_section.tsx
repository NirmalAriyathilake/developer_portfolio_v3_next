import { ContactCard, SectionTitle } from "../components";
import { ContactData } from "../firebase/models";

type Props = {
  data: ContactData[];
  className?: string | undefined;
};

const ContactSection = (props: Props) => (
  <div className={"scroll-m-24 " + props.className} id="contact">
    <div className="flex flex-col w-full justify-start items-center px-10 py-10">
      <SectionTitle title="CONTACT ME" />
      <div className="flex flex-row gap-10 mt-5">
        {props.data.map((contact) => (
          <ContactCard contact={contact} key={contact.iconName} />
        ))}
      </div>
    </div>
  </div>
);

export default ContactSection;
