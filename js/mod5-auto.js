//#1

/* Виконай рефакторинг методів об'єкта pizzaPalace, розставивши 
відсутні this в місцях звернення до властивостей і методів об'єкта. */

/* const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  // Change code below this line
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  }, */
  // Change code above this line
/* }; */

//#2

/* Перед звільненням розробник зламав вихідний код управління акаунтами 
користувачів нашого сервісу доставки їжі.Виконай рефакторинг методів об'єкта customer, 
розставивши відсутні this під час звернення до властивостей об'єкта.

Після оголошення об'єкта ми додали виклики методів у тій послідовності, 
в якій твій код перевірятимуть тести.Будь ласка, нічого там не змінюй. */

/* const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  
};
 */

//#3

/* const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ], */
  // Change code below this line
 /*  getOrdersLog() {
    return this.orders.map(order => `email: ${order.email} dish: ${order.dish}`).join(" - ");
  },
  getEmails() {
    const emails = this.orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter(order => order.email === email);
  }, */
  // Change code above this line
/* }; */

//#7

/* Додай класу Car метод constructor, який приймає три параметри:

brand - марка автомобіля.
model - модель автомобіля.
price - ціна автомобіля.
Клас Car повинен створювати об'єкт з однойменними властивостями brand, 
model і price, значеннями яких повинні бути передані аргументи під час його виклику з оператором new. */


/* class Car {
  
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    
 
    }
};

const aaa = new Car('ddd', 'ffff', 'fff');

console.log(aaa); */


//#9
/* class Car {
    constructor({ brand, model, price }) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    
    getPrice() {
        return this.price;
    };

    changePrice(newPrice) {
        return this.price = newPrice;
    };

} */

//№10

/* Напиши клас Storage, який буде створювати об'єкти для 
управління складом товарів.Клас очікує тільки один аргумент -
    початковий масив товарів, який записується у властивість items об'єкта, що створюється.

Оголоси наступні методи класу:

getItems() - повертає масив поточних товарів у властивості items об'єкта, який викликає цей метод.
addItem(newItem) - приймає новий товар newItem і додає його в масив товарів у властивості items об'єкта, який викликає цей метод.
removeItem(itemToRemove) - приймає товар itemToRemove і видаляє його з масиву товарів у властивості items об'єкта, який викликає цей метод.
Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код 
перевірятимуть тести.Будь ласка, нічого там не змінюй. */

/* class Storage {
  constructor (items) {
    this.items = items;
  }
  getItems() {
    return this.items
  }
  addItem(newItem) {
    return this.items.push(newItem);
  }
  removeItem(itemToRemove) {
    const index = this.items.indexOf(itemToRemove);
    return this.items.splice(index, 1);
  }
  } */


// Change code above this line
/* const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"] */
    
//#11

/* Напиши клас StringBuilder, який приймає один параметр initialValue -
    довільний рядок, який записується у властивість value об'єкта, що створюється.

Оголоси наступні методи класу:

getValue() - повертає поточне значення властивості value.
padEnd(str) - отримує параметр str (рядок) і додає його в кінець значення властивості value об'єкта, який викликає цей метод.
padStart(str) - отримує параметр str (рядок) і додає його на початок значення властивості value об'єкта, який викликає цей метод.
padBoth(str) - отримує параметр str (рядок) і додає його на початок і в кінець значення властивості value об'єкта, який викликає цей метод.
Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. 
Будь ласка, нічого там не змінюй. */

/* class StringBuilder {
  constructor (initialValue) {
    this.value = initialValue;
  }

  getValue() {
      return this.value;
  }
    padEnd(str) {
this.value = this.value + str;
    
  }
  padStart(str) {
    this.value = str + this.value;
  }
  padBoth(str) {
    this.value = str+this.value + str;
  }
} */


// Change code above this line
/* const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^=" */


/* class User {
  // Необов'язкове оголошення публічних властивостей
  name;
  // Обов'язкове оголошення приватних властивостей
  //#email;

  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }

  getEmail() {
    return this.email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

const mango = new User({
  name: "Манго",
  email: "mango@mail.com",
});

mango.changeEmail("mango@supermail.com");
console.log(mango.getEmail()); // mango@supermail.com
console.log(mango.email); // Виникне помилка, це приватна властивість */

//#16

/* class Car {
  // Change code below this line
  
  static MAX_PRICE = 50000;
    
  
  #price;
  #role;

  

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= Car.MAX_PRICE)
      this.#price = newPrice;
  }
  // Change code above this line

}
const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000 */

//#18

/* class User {
  constructor(email) {
    this._email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Change code below this line
class Admin extends User {
  static AccessLevel = {BASIC: "basic", SUPERUSER: "superuser"};
  
}

const aaa = new Admin();
console.log(aaa); */

//#19








