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
const addContact = () => {};

// Elimina contacto
const deleteContact = () => {};

export { readContacts, addContact, deleteContact };
