/* const numbers = [5, 10, 15, 20, 25];

// Класичний for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Індекс ${i}, значення ${numbers[i]}`);
}

// Метод перебирання forEach
numbers.forEach(function (number, index) {
  console.log(`Індекс ${index}, значення ${number}`);
}); */


/* const arrowAdd = (a, b, c) => a + b + c;

console.log(arrowAdd(2, 4, 5)); */


/* const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Індекс ${index}, значення ${number}`);
};

numbers.forEach(logMessage); */

/* const makeSheff = function (name) {
  const makeDish = function(dish) {
    console.log(`${name} готовит ${dish}`);   


  };
  
  return makeDish;
}

const povar = makeSheff("mango"); */
/* console.log(mango("котлеты"));
 */
/* povar(`котлеты`); */


/* mango(`котлеты`);
 */

/* makeSheff("Манго");
console.log(makeSheff("Манго")); */



/* mango(`котлеты`);
mango(`пирожок`); */

/* function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
} */

// Функція вищого порядку
/* function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
} */

//registerGuest("Манго", greet);

/* const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter(value => value > 3);
console.log(filteredNumbers); */ // [4, 5]

/* const a = function () {
  console.log("Привет");
}

a("ffdf"); */

/* const b = (...args) => { */
/*   console.log(args);
};

(b("1,2,3,4")); */

/* const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
}; */

/* const numbers = [1, 2, 3, 4, 5];
dirtyMultiply(numbers, 2); */
// Відбулася мутація вихідних даних - масиву numbers
/* console.log(numbers);  */// [2, 4, 6, 8, 10]


/* const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach(i => {
    newArray.push(i * value);
  });

  return newArray;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers, 2); */

// Мутація вихідних даних не відбулася
/* console.log(numbers); */ // [1, 2, 3, 4, 5]
// Функція повернула новий масив зі зміненими даними
/* console.log(doubledNumbers); */ // [2, 4, 6, 8, 10]



/* const students = [
  { name: "Манго", courses: ["математика", "фізика"] },
  { name: "Полі", courses: ["інформатика", "математика"] },
  { name: "Ківі", courses: ["фізика", "біологія"] },
];

students.map(student => student.courses);
// [['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']]

students.flatMap(student => student.courses);
// ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

console.log(students); */

/* const numbers = [1, 4, 6, 7, 8];
numbers.sort((a,b) => a-b);
console.log(numbers); */

/* const numbers = ["aa", "bb", "cc", "dd", "ee"];
numbers.sort((a,b) => b.localeCompare(a));
console.log(numbers); */

/* const students = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
];

const inAscendingScoreOrder = students.sort(
  (a, b) => a.score - b.score
);

console.log(inAscendingScoreOrder); */

/* const f = function (a, b) {
  return a + b;
}

console.log(f(7, 5));

console.log(f); */

/* 
function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
}

// Функція вищого порядку
function registerGuest(nnn, callback) {
  /* console.log(`Реєструємо гостя ${name}.`); */
  /* callback(nnn);
}

registerGuest("Манго", greet);  */



// Функція вищого порядку
/* function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
}

registerGuest("Манго", greet); */

/* function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
}

function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
} */

// Передаємо інлайн функцію greet у якості колбека
/* registerGuest("Манго", function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
}); */

// Передаємо інлайн функцію notify у якості колбека
/* registerGuest("Полі", function notify(name) {
  console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
}); */

/* function processCall(recipient) {
  // Імітуємо доступність абонента випадковим числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
    // Логіка активації автовідповідача
  } else {
    console.log(`З'єднуємо з ${recipient}, очікуйте...`);
    // Логіка прийняття дзвінка
  }
}

processCall("Манго"); */

/* function processCall(recipient, onAvailable, onNotAvailable) {
  // Імітуємо доступність абонента випадковим числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`З'єднуємо з ${name}, очікуйте...`);
  // Логіка прийняття дзвінка
}

function activateAnsweringMachine(name) {
  console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
  // Логіка активації автовідповідача
}

function leaveHoloMessage(name) {
  console.log(`Абонент ${name} недоступний, записуємо голограму.`);
  // Логіка запису голограми
}

processCall("Манго", takeCall, activateAnsweringMachine);
processCall("Полі", takeCall, leaveHoloMessage); */

/* const numbers = [5, 10, 15, 20, 25]; */

// Класичний for
/* for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Індекс ${i}, значення ${numbers[i]}`);
} */

// Метод перебирання forEach
/* numbers.forEach(function (number, index) {
  console.log(`Індекс ${index}, значення ${number}, ${numbers}`);
}); */


/* const numbers = [5, 10, 15, 20, 25]; */

// Оголошення функції
/* numbers.forEach(function (number, index) {
  console.log(`Індекс ${index}, значення ${number}`);
}); */

// Анонімна стрілочна функція
/* numbers.forEach((number, index) => {
  console.log(`Індекс ${index}, значення ${number}`);
}); */

/* const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
]; */

// Пройдемо по всіх елементах колекції і додамо значення властивості likes
// до акумулятора, початкове значення якого вкажемо 0.
/* const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

console.log(likes); // 32 */

// Мабуть, підрахунок лайків - не одиночна операція, тому напишемо функцію
// для підрахунку лайків з колекції
/* const countLikes = tweets => {
  return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
};

console.log(countLikes(tweets)); // 32 */


/* const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const tweets = ["js", "nodejs", "html", "css", "html", "js", "nodejs","css", "react", "js", "nodejs", "react"];

const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []); 

const tags = getTags(tweets);

console.log(tags);

const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
}; */
 
// Початкове значення акумулятора - це порожній об'єкт {}
/* const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount); */

/* const tweets = { id: "000", likes: 5, a: [1, 2] };
  

const copy = {...tweets};

console.log(tweets);
console.log(copy);
console.log(copy === tweets);

console.log(copy.a === tweets.a) */
/* 
const allCourses = ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

const uniqueCourses = allCourses.filter(
  (course, index, allCourses) => allCourses.indexOf(course) === index
);




console.log(uniqueCourses); */

/* const aaa = [5, 10, 15, 20];

const total = aaa.reduce((acc, number) => {
  console.log("acc", acc);
  console.log("number", number);

  return acc + number;
});

console.log(total);
 */



/* const allTags = ["js", "nodejs", "html", "css", "html", "js", "nodejs", "css", "react", "js", "nodejs", "react"];

const tagsStats = allTags.reduce((acc, tag) => {
  console.log(acc[tag]);
  return {};
}, {});

console.log(tagsStats);
 */


/* 
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

const tags = getTags(tweets); */

// Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// Це стандартна практика, якщо callback-функція досить велика.

// Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// то створюємо її і записуємо їй значення 0.
// В іншому випадку збільшуємо значення на 1.
/* const getTagStats = (acc, tag) => {
  if (acc[tag]) {
    acc[tag] = 5;
    return acc;
  }

  acc[tag] =1;

  return acc;
};

// Початкове значення акумулятора - це порожній об'єкт {}
const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount); */

/* const user = {
  name: "Mango"
};

let key = "name";

key = 5;

console.log(user.name);
console.log(user[key]);
console.log(user["name"]); */

/* const add = (...args) => {
  console.log(args);
  return args;
} */

/* const add = function() {
  console.log(arguments);
  return Array.from(arguments);
}

const ddd = add(1, 2, 3, 4, 5, 6);

console.log(ddd); */

/* function multiply() {
  let total = 1;
  console.log(arguments);
  for (const argument of arguments) {
    total *= argument;
  }

  return total;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120
 */

/* const objA = {
  x: 5,
  showX() {
    console.log(this.x);

    const objB = {
      y: 10,
      showThis: () => {
        console.log(this);
      },
    };

    objB.showThis();
  },
};

objA.showX(); */


