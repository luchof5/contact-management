import { readContacts, addContact, deleteContact } from "./modules.js";

const args = process.argv.splice(2);

if (args[0] === "list") {
  const response = readContacts();
  console.log(response);
} else if (args[0] === "add") {
  const response = addContact(args[1], args[2], args[3]);
  console.log(response);
} else if (args[0] === "delete") {
  const response = deleteContact(args[1]);
  console.log(response);
} else {
  console.log("Invalid argument, the correct options are: list, add or delete");
}
