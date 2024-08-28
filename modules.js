import fs from "node:fs";
import { randomUUID } from "node:crypto";

const URL_FILE = "./data/contacts.json";
const HELP = "./help.txt";

const helpRead = fs.readFileSync(HELP, "utf8");

// Lee los contactos
const readContacts = (favorit) => {
  const exist = fs.existsSync(URL_FILE);

  if (!exist) {
    fs.writeFileSync(URL_FILE, JSON.stringify([]));
    return [];
  }

  if (favorit === "favoritos") {
    const data = fs.readFileSync(URL_FILE);
    const dataFavorite = JSON.parse(data).filter(
      (data) => data.favorito === true
    );
    return dataFavorite;
  } else {
    const data = fs.readFileSync(URL_FILE);
    return JSON.parse(data);
  }
};

// Agrega contactos
const addContact = (name, phone, mail, favorit = "") => {
  const phoneNumber = Number(phone);
  if (name.length < 3 || isNaN(phoneNumber) || !mail.includes("@")) {
    return "Dato incorrecto";
  }

  const contactsList = readContacts();

  const contact = {
    id: randomUUID(),
    nombre: name,
    telfono: phoneNumber,
    email: mail,
    favorito: favorit === "favoritos",
  };

  contactsList.push(contact);

  fs.writeFileSync(URL_FILE, JSON.stringify(contactsList));

  return contact;
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

export { helpRead, readContacts, addContact, deleteContact };
