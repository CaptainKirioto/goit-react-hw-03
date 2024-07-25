import s from "./App.module.css";
import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import contactsList from "./contactsList.json";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("Contacts");
    return savedContacts ? JSON.parse(savedContacts) : contactsList;
  });

  useEffect(() => {
    window.localStorage.setItem("Contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleDelete = (id) => {
    const remainingContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(remainingContacts);
  };

  const [filter, setFilter] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  // const handleFilter = (query) => {
  //   const filteredContacts = contacts.filter(
  //     (contact) => query.toLowerCase === contact.name.toLowerCase
  //   );
  //   setContacts(filteredContacts);
  // };

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
