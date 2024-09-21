import styles from "./contactList.module.css";
import Contact from "../Contact/Contact.jsx";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={styles.contacts}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={() => onDelete(contact.id)}
        />
      ))}
    </div>
  );
};

export default ContactList;
