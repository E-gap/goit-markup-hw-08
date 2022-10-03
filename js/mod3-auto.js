//#14

/* function countProps(object) {
    // Change code below this line
    let propCount = 0;

    let keys = Object.keys(object);
    
    propCount = keys.length;
    
}
  
countProps({ name: "Mango", age: 2 }) */

//#15

/* const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment); */

//#16

/* function countTotalSalary(salaries) {
    let totalSalary = 0;
    // Change code below this line
    for (const salary in salaries) {
        if (salaries.hasOwnProperty(salary)) {
        
        
            totalSalary += salaries[salary];
        }
    }

  // Change code above this line
  return totalSalary; 
} 

console.log(countTotalSalary({})); */

//#17

/* const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (const color of colors) {
    //console.log(color);
    hexColors.push(color.hex);
    rgbColors.push(color.rgb); 
    
}

console.log(hexColors);
console.log(rgbColors); */

//#18

/* Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту.Функція шукає 
об'єкт продукту з таким ім'ям(властивість name) в масиві products і повертає його ціну(властивість price).
Якщо продукт з такою назвою не знайдений, функція повинна повертати null. */

/* const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
    for (const product of products) {
        /* console.log(product); */
        /* if (productName === product.name) {
            return product.price;
        }  */

        
   /*  }

return null; */


  // Change code above this line
/* }
console.log(getProductPrice("Grip"));  */

//#19

/* Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. 
Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві 
products.Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив. */

/* const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line  
   
    
    const array = [];
    for (const product of products) {
        
        const y = Object.keys(product);
        /* console.log(y);     */
        /* if (propName === y[0]) {
            array.push(product.name)
        } else if (propName === y[1]) {
            array.push(product.price);
        } else if (propName === y[2]) {
        array.push(product.quantity);
        }
    }

    return array; */

  // Change code above this line
/* }

console.log(getAllPropValues("ffff"));  */

//#20

/* const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  
    for (const product of products) {
        if (productName === product.name) {
            return product.price * product.quantity;
    }
    }
    return 0;

  
}

console.log(calculateTotalPrice("fgfg")); */

//#21 Деструктуризация объекта

//№22 Деструктуризация объекта со значением по умолчанию

//№23

/* const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};


const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

console.log(highIcon); */

//#24 Деструктуризация в циклах

//#25

/* Ми отримали прогноз погоди на два дні, з мінімальними і максимальними температурами,
а також необов'язковими іконками. Заміни оголошення всіх змінних однією операцією деструктуризації 
властивостей об'єкта forecast.Задай значення за замовчуванням для іконок, змінних todayIcon 
і tomorrowIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg". */

/* const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};

const { today: { low: lowToday, high: highToday,
  icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
  tomorrow: { low: lowTomorrow, high: highTomorrow,
    icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } } = forecast;

console.log(highToday); */

//#26

/* Функція calculateMeanTemperature(forecast) приймає один параметр forecast -
  об'єкт температур на два дні наступного формату.

{
  today: { low: 10, high: 20 },
  tomorrow: { low: 20, high: 30 }
}
Заміни оголошення змінних todayLow, todayHigh, tomorrowLow і 
tomorrowHigh однією операцією деструктуризації властивостей об'єкта forecast. */

// Change code below this line
/* function calculateMeanTemperature(forecast) {
  
  const { today: { low: todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh } } = forecast;
  

  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
} */

//#27
/* У змінній scores зберігається масив результатів тестування.
Використовуючи розподіл і методи Math.max() і Math.min(),
  доповни код таким чином, щоб у змінній bestScore був найвищий бал, а у worstScore - найнижчий. */
  
  /* const scores = [89, 64, 42, 17, 93, 51, 26];

const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores); */

//№28

/* У змінних firstGroupScores, secondGroupScores і 
thirdGroupScores зберігаються результати тестування окремих груп.
Використовуючи розподіл, доповни код таким чином, щоб:

У змінній allScores зберігався масив всіх результатів від першої до третьої групи.
У змінній bestScore був найвищий загальний бал.
У змінній worstScore був найнижчий загальний бал. */

/* const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores); */

//#29

/* В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням,
  які зберігаються у змінній defaultSettings.Під час створення тесту, усі або частину 
  налаштувань можна перевизначити, вони зберігаються у змінній overrideSettings.

Для того щоб отримати фінальні налаштування тесту, необхідно взяти налаштування 
за замовчуванням і поверх них застосувати перевизначені налаштування.
Доповни код таким чином, щоб у змінній finalSettings утворився об'єкт фінальних налаштувань тесту. */
  
/* const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = {...defaultSettings, ...overrideSettings}; */

//#30

/* Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними властивостями.

text - текст завдання.
category - категорія завдання.
priority - пріоритет завдання.
Функція повинна створити і повернути новий об'єкт завдання, 
не змінюючи напряму параметр data.У новому об'єкті повинна бути властивість completed, 
значення якої зберігається в однойменній локальній змінній.

В параметрі data гарантовано буде тільки властивість text, а інші дві,
  category і priority, можуть бути відсутніми.Тоді, в новому об'єкті завдання, 
  у властивостях category і priority повинні бути значення за замовчуванням, що зберігаються в однойменних локальних змінних. */

/* function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  
  
    const newObject = {
      completed, category, priority, ...data      
    };
  
    console.log(newObject);
  
}

makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });  */

//#31

/* Використовуючи операцію rest, доповни код функції add() 
таким чином, щоб вона приймала будь - яку кількість аргументів, рахувала і повертала їх суму. */

// Change code below this line
/* function add(...args) {
  console.log(args);
  let total = 0;
  for (const arg of args) {
    console.log(arg);
    total += arg;
  }
  
  return total;
  
}

console.log(add(15, 27)); */

//#32

/* Функція addOverNum() рахує суму всіх аргументів.Зміни параметри і тіло функції addOverNum() 
таким чином, щоб вона рахувала суму тільки тих аргументів, які більші за задане число.
Це число повинно бути першим параметром функції. */

/* function addOverNum(first, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > first) {
      total += arg;
    }
  }

  return total;
  
}

console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); */

//#33

/* Функція findMatches() приймає довільну кількість аргументів. 
Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами.

Доповни код функції таким чином, щоб вона повертала новий масив matches,
  в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.

  Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна 
повернути масив[1, 2], тому що тільки вони є в масиві першого аргументу. */

// Change code below this line
/* function findMatches(array, ...args) {
  const matches = []; 
  for (const arg of args) {
    if (array.includes(arg)) {
      matches.push(arg);
  }
}
  
  return matches;
}

console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); */

//#34

/* Додай об'єкту bookShelf ще два методи, які поки що будуть 
повертати просто рядки за аналогією з getBooks() і addBook(bookName).

Метод removeBook(bookName) буде видаляти книгу за назвою. 
Повертає рядок "Deleting book <назва книги>", де < назва книги > - це значення параметра bookName.

Метод updateBook(oldName, newName) буде оновлювати назву книги на нову. 
Повертає рядок "Updating book <стара назва> to <нова назва>", де < стара назва > і < нова назва > - це 
значення параметрів oldName і newName відповідно. */

/* const bookShelf = {
  
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },

  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  },

  
};

console.log(bookShelf.getBooks());
console.log(bookShelf.addBook("dfdfd")); */

//#35

/* Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву 
книги з oldName на newName у властивості books.Використовуй indexOf() для того,
  щоб знайти потрібний елемент масиву, і splice() для того, щоб замінити цей елемент. */

  /* const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
    updateBook(oldName, newName) {       
      
    

this.books.splice(this.books.indexOf(oldName), 1, newName);

    
  },
};

bookShelf.updateBook("Haze", "Dungeon chronicles"); */

//#36

/* До нас звернулася власниця крамниці зілля «У старої жаби» і замовила 
програму для ведення інвентарю - додавання, видалення, пошуку та оновлення зілля.
Додай об'єкту atTheOldToad властивість potions, значенням якої зроби порожній масив. */

/* const atTheOldToad = {
  
  potions: [],  
}; */

//#37

/* Додай об'єкту atTheOldToad метод getPotions(), який просто повертає значення властивості potions. */

/* const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  
  getPotions() {
    return this.potions;
},
  
}; */

//#38

/* Доповни метод addPotion(potionName) таким чином, щоб він додавав 
зілля potionName в кінець масиву зілля у властивості potions. */

/* const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
    

    this.potions.push(potionName);
    console.log(this.potions);
    
  },
};

console.log(atTheOldToad.addPotion("dfdfdf")); */

//#39

/* Доповни метод removePotion(potionName) таким чином,
  щоб він видаляв зілля potionName з масиву зілля у властивості potions. */

  /* const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
   
    this.potions.indexOf(potionName);
    this.potions.splice(this.potions.indexOf(potionName), 1);
    console.log(this.potions);
    
  },
};

atTheOldToad.removePotion("Dragon breath");
atTheOldToad.removePotion("Speed potion"); */

//#40

/* Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював 
назву зілля з oldName на newName в масиві зілля у властивості potions. */

/* const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    

    this.potions.splice(this.potions.indexOf(oldName), 1, newName);

    
  },
}; */

//#41

/* Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, 
а в майбутньому, можливо, й іншими характеристиками.Тому зараз у властивості potions буде 
зберігатися масив об'єктів з наступними властивостями.

{
  name: "Dragon breath",
  price: 700
}
Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони 
працювали не з масивом рядків, а з масивом об'єктів.

getPotions() - метод для отримання всього зілля. Повертає значення властивості potions.
addPotion(newPotion) - додає зілля newPotion(вже об'єкт) в масив у властивості 
potions, але тільки, якщо такого зілля ще немає в інвентарі.В іншому випадку повертається рядок.
removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName на newName в масиві potions. */

/* const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],

  
  getPotions() {
    return this.potions;
  },


  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name !== newPotion.name) {
        continue;
        
      }
      
      else {
        
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }          
    } 
    this.potions.push(newPotion);
    return this.potions;
  },
  
  removePotion(potionName) {
    for (const potion of this.potions) {
      if (potion.name === potionName) {
        this.potions.splice(this.potions.indexOf(potion), 1);
      }
    }
    return this.potions;   
  },


  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (potion.name === oldName) {
        
        this.potions[this.potions.indexOf(potion)].name = newName;  
        
        return this.potions;
      }
    }    
  },
} */


/* console.log(atTheOldToad.getPotions()); */
/* console.log(atTheOldToad.addPotion({ name: "fffff", price: 780 }));  */
/* console.log(atTheOldToad.removePotion("Stone skin")); */
/* console.log(atTheOldToad.updatePotionName("Speed potion", "END")); */






























