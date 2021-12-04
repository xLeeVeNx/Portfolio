import { GrLocation } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const AddressIcon = <GrLocation className="contacts__image" />;
const EmailIcon = <MdOutlineMail className="contacts__image" />;
const PhoneIcon = <FiPhoneCall className="contacts__image" />;

const contacts = [
  {
    name1: "Ramil",
    textName1: "Kazakhstan, Taldykorgan",
    title: "Address",
    name2: "Damil",
    textName2: "Kazakhstan, Taldykorgan",
    icon: AddressIcon,
  },
  {
    name1: "Ramil",
    textName1: "ramilashrafulinfrontend@gmail.com",
    title: "Email",
    name2: "Damil",
    textName2: "-",
    icon: EmailIcon,
  },
  {
    name1: "Ramil",
    textName1: "+7 (700) 487-01-80",
    title: "Phone",
    name2: "Damil",
    textName2: "+7 (777) 369-22-86",
    icon: PhoneIcon,
  },
];

export default contacts;
