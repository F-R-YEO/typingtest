const app = {
  contacts: [
    { name: "Simon", phone: "999" },
    { name: "Eileen", phone: "999" },
  ],
};

function isEven(num) {
  return num % 2 == 0;
}

const result = isEven(3);
console.log(result);

const addContact = (name, phone) => {
  app.contacts.push({ name, phone });
};

addContact("Kerin", "911");
console.log(app);
