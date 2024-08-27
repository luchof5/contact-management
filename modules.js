import fs from "node:fs";
import { randomUUID } from "node:crypto";

const URL_FILE = "./data/contacts.json";

// Lee los contactos
const readContacts = () => {
  const exist = fs.existsSync(URL_FILE);

  if (!exist) {
    fs.writeFileSync(URL_FILE, JSON.stringify([]));
    return [];
  }

  const data = fs.readFileSync(URL_FILE);
  return JSON.parse(data);
};

// Agrega contactos
const addContact = (name, ph, mail) => {
  const num = Number(ph);
  if (name.length < 3 || isNaN(num) || !mail.includes("@")) {
    return "Dato incorrecto";
  }

  const contactsList = readContacts();

  const constact = {
    id: randomUUID(),
    nombre: name,
    telfono: ph,
    email: mail,
  };

  contactsList.push(constact);

  fs.writeFileSync(URL_FILE, JSON.stringify(contactsList));

  return constact;
};

// Elimina contacto
const deleteContact = (id) => {
  if (!id) {
    return "ID is required";
  }

  const contactsList = readContacts();

  const foundContact = contactsList.find((contact) => contact.id === id);

  if (!foundContact) {
    return "Contact not found";
  }

  const newContactList = contactsList.filter((contact) => contact.id !== id);

  fs.writeFileSync(URL_FILE, JSON.stringify(newContactList));

  return foundContact;
};

export { readContacts, addContact, deleteContact };
