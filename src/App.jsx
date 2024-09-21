import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [search, setSearch] = useState("");
  const [contacts, setContacts] = useState(() => {
    const contacts = localStorage.getItem("contacts");
    return contacts ? JSON.parse(contacts) : [];
  });

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(search.toLowerCase());
  });

  const handleAddContact = (contact, actions) => {
    const id = nanoid();
    setContacts([...contacts, { ...contact, id }]);
    actions.resetForm();
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <SearchBox value={search} setValue={(e) => setSearch(e.target.value)} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
}

export default App;
