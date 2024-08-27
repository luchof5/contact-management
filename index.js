import { readContacts, addContact, deleteContact } from "./modules.js";

const args = process.argv.splice(2);

if (args[0] === "list") {
  const response = readContacts();
  console.log(response);
}
