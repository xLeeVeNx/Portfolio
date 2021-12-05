import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const instagramIcon = <BsInstagram className="footer__icon" />;
const telegramIcon = <FaTelegramPlane className="footer__icon" />;
const whatsAppIcon = <FaWhatsapp className="footer__icon" />;

const social = [
  {
    name: "Ramil",
    socialLinks: [
      {
        socialLink: "https://www.instagram.com/ashrafulin_/?hl=ru",
        icon: instagramIcon,
      },
      {
        socialLink: "https://t.me/niceguygg",
        icon: telegramIcon,
      },
      {
        socialLink: "https://api.whatsapp.com/send?phone=77004870180&text=",
        icon: whatsAppIcon,
      },
    ],
  },
  {
    name: "Damil",
    socialLinks: [
      {
        socialLink: "",
        icon: instagramIcon,
      },
      {
        socialLink: "",
        icon: telegramIcon,
      },
      {
        socialLink: "",
        icon: whatsAppIcon,
      },
    ],
  },
];

export default social;
