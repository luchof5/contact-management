import { readContacts, addContact, deleteContact } from "./modules.js";

const args = process.argv.splice(2);

if (args[0] === "list") {
  const response = readContacts();
  console.log(response);
} else if (args[0] === "add") {
  const response = addContact(args[1], args[2], args[3]);
  console.log(response);
}
