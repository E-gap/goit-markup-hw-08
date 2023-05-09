/* const petya = {
  username: "Petya",
  showName() {
    console.log(petya.username);
  },
};

petya.showName(); */

/* function foo() {
  console.log(this);
}

foo(); */

/* function showThis() {
  console.log("this in showThis: ", this);
}

// Викликаємо у глобальному контексті
showThis();

const user = {
  username: "Mango",
};

user.showContext = showThis; */

/* console.log(user); */

/* const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  // callback() - це виклик методу getFullName без об'єкта
  console.log(`Обробляємо заявку від ${callback()}.`);
}

makeMessage(customer.getFullName); */

/* const showThis = () => {
  console.log("this in showThis: ", this);
};

showThis(); */


/* const hotel = {
  username: "Resort hotel",
  showThis() {
    const foo = () => {
      // Стрілки запам'ятовують контекст під час оголошення
      // з батьківської області видимості
      console.log("this in foo: ", this);
    };

    foo();
    console.log("this in showThis: ", this);
  },
};

hotel.showThis(); */

/* function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const mango = {
  username: "Манго",
};
const poly = {
  username: "Полі",
};

greetGuest.call(mango, "Ласкаво просимо"); // Ласкаво просимо, Манго.
greetGuest.call(poly, "З прибуттям"); */ // З прибуттям, Полі.

/* const user = {
  tag: "Mango",
  showTag() {
    console.log(`object`, this);
  }

};

const user2 = {
  tag: "Mangoooooo",
  showTag() {
    console.log(`object`, this);
  }

}; */

/* user.showTag(); */

/* const foo = function () {
  console.log(`foo`, this);
};

/* foo(); */

/* user.foo(); */

/* const aaa = {
  tag: "Mango",
};
  
aaa.link = foo;

console.log(aaa);

aaa.link();  */

/* const test = user.showTag;

user2.test(); */

/* function greet(clientName) {
  return `${clientName}, ласкаво просимо в «${this.service}».`;
}

const steam = {
  service: "Steam",
};
const steamGreeter = greet.bind(steam);
steamGreeter("Манго"); // "Манго, ласкаво просимо в «Steam»."

console.log(steamGreeter); */

/* const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  // callback() - це виклик методу getFullName без об'єкта
  console.log(`Обробляємо заявку від ${callback()}.`);
}

makeMessage(customer.getFullName);  */// Виникне помил

/* const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Манго";

console.log(dog); // { name: 'Манго', __proto__: animal }
console.log(animal.isPrototypeOf(dog)); // true

console.log(dog.hasOwnProperty("name")); // true
console.log(dog.name); // 'Манго'

console.log(dog.hasOwnProperty("legs")); // false
console.log(dog.legs); // 4 */


// ВОПРОС:


/* const animal = {
  legs: 4,
};


const proto = Object.create(animal);
console.log(animal);
console.log(proto);

animal.ddd = 5;

console.log(animal);
console.log(proto);
 */

/* class User {
  // Тіло класу
}

const mango = new User();
console.log(mango); // {}

const poly = new User();
console.log(poly); // {} */

/* class Test {
  constructor(name, email) {
    this.name = name;
    this.email = email;
      
  }
  
};


const fff = new Test("nnnnn", "eeeee");
console.log(fff);


console.log(fff.name); */

/* class User {
  static #takenEmails = [];

  static isEmailTaken(email) {
    return User.#takenEmails.includes(email);
  }

  #email;

  constructor({ email }) {
    this.#email = email;
    User.#takenEmails.push(email);
  }
}

const mango = new User({ email: "mango@mail.com" });

console.log(User.isEmailTaken("poly@mail.com"));
console.log(User.isEmailTaken("mango@mail.com")); */

 /* const animal = {
  legs: 4,
};

console.log(animal); */

/* class User {
  // Тіло класу
}

const mango = new User();
console.log(mango); // {}

const poly = new User();
console.log(poly); // {} */

/* const animal = {
  legs: 4,
};
const dog = Object.create(animal);

console.log(animal);
console.log(dog); */

/* const Car = function () {
  console.log(`fgfgfg`);
};

const myCar = new Car();

console.log(myCar); */

/* const animal = {
  legs: 4,
};

console.log(animal);

animal.__proto__.fff = function () {
  console.log(`fgfgf`);
}
console.log(animal);

animal.fff();

console.log(animal); */

/* class User {
  ppp;

  constructor({ name, email }) {
    this.name = name;
    this.ppp = email;
  }

  // Геттер email
  get email() {
    return this.ppp;
  }

  // Сеттер email
  set email(newEmail) {
    this.ppp = newEmail;
  }
}

const mango = new User({ name: "Манго", email: "mango@mail.com" });
console.log(mango.email); // mango@mail.com
mango.email = "mango@supermail.com";
console.log(mango.ppp); // mango@superm
console.log(mango); */

/* console.log('ddfdfdfd');

 */



