// Components
import ContactCard from "../ContactCard/ContactCard";
// Components

// Contacts Data
import contacts from "../../constants/contacts";
// Contacts Data

const Contacts = () => {
  return (
    <section className="contacts">
      <div className="contacts__container">
        {contacts.map(({ name1, textName1, title, name2, textName2, icon }) => {
          return (
            <ContactCard
              name1={name1}
              textName1={textName1}
              title={title}
              name2={name2}
              textName2={textName2}
              icon={icon}
            />
          );
        })}
      </div>
      <svg
        className="contacts__decor"
        x="0px"
        y="0px"
        viewBox="0 186.5 1920 113.5"
      >
        <polygon
          points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "
          fill="#202020"
        ></polygon>
      </svg>
    </section>
  );
};

export default Contacts;
