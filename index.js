import {
  helpRead,
  readContacts,
  addContact,
  deleteContact,
} from "./modules.js";

const args = process.argv.splice(2);

if (args[0] === "help") {
  console.log(helpRead);
} else if (args[0] === "list") {
  const response = readContacts(args[1]);
  console.log(response);
} else if (args[0] === "add") {
  const response = addContact(args[1], args[2], args[3], args[4]);
  console.log(response);
} else if (args[0] === "delete") {
  const response = deleteContact(args[1]);
  console.log(response);
} else {
  console.log("Invalid argument, the correct options are: list, add or delete");
}
