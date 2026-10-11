'use strict'

function fn() {
  const obj1 = { name: "illia" };
  let obj2 = { name: "dasha" };

  obj1.name = "nazar"; // робить
  obj2.name = "nikol"; // робить

  // Спроба записати посилання на інший об'єкт
  // obj1 = { name: "dima" }; // помилка: TypeError: Assignment to constant variable
  obj2 = { name: "anna" };    // робить бо змінна obj2 оголошена через let

  console.log(obj1); // { name: "nazar" }
  console.log(obj2); // { name: "anna" }
}

fn();

function createUser(name, city) {
  return {
    name: name,
    city: city
  };
}

console.log(createUser("illia", "Kyiv"));
