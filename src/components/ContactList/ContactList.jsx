import Contact from "../Contact/Contact";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
              handleDelete={handleDelete}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
