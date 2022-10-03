//#4

/* Необхідно написати логіку обробки замовлення піци.Виконай рефакторинг 
методу order таким чином, щоб він приймав другим і третім параметром два колбеки onSuccess і onError.

Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName,
    метод order повинен повертати результат виклику колбека onError,
        передаючи йому аргументом рядок "There is no pizza with a name <имя пиццы> in the assortment."
Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName,
    метод order повинен повертати результат виклику колбека onSuccess,
        передаючи йому аргументом назву замовленої піци.
Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Будь ласка, нічого там не міняй. */


/* const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
    order(pizzaName, callback1, callback2) {
        if (pizzaPalace.pizzas.includes(pizzaName)) {
            return callback1(pizzaName);
        } 

        return callback2(`There is no pizza with a name ${pizzaName} in the assortment.`);
      
  },
}; */
// Change code above this line

// Callback for onSuccess
/* function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
} */

// Callback for onError
/* function onOrderError(error) {
  return `Error! ${error}`;
} */

// Method calls with callbacks
//console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
//console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
//console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
//console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

//#5

/* Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел,
    і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи функції.

Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach. */

/* function calculateTotalPrice(orderedItems) {
  let totalPrice = 0; */
  // Change code below this line
    
    /* orderedItems.forEach(element => totalPrice +=element);
    return totalPrice;
  }  */

  // Change code above this line    


/* console.log(calculateTotalPrice([2, 3, 4])); */

//№6

/* Функція filterArray(numbers, value) приймає масив чисел numbers і повертає 
новий масив, в якому будуть тільки ті елементи оригінального масиву, які більші за значення параметра value.

Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach. */

/* function filterArray(numbers, value) {
  const filteredNumbers = []; */
  // Change code below this line
    
    /* numbers.forEach(element => {
        if (element > value) {
            filteredNumbers.push(element);
        }
        
    });

  return filteredNumbers;
  } */

  // Change code above this line
  

/* console.log(filterArray([1, 2, 3, 4, 5], 4)); */

//#7

/* Функція getCommonElements(firstArray, secondArray) приймає два масиви довільної 
довжини в параметри firstArray і secondArray, і повертає новий масив 
їхніх спільних елементів, тобто тих, які присутні в обох масивах.

Виконай рефакторинг функції таким чином, щоб замість циклу for,
    вона використовувала метод forEach. */
    
   /*  function getCommonElements(firstArray, secondArray) {
  const commonElements = []; */
  // Change code below this line

        /* firstArray.forEach(element => {
            if (secondArray.includes(element)) {
                commonElements.push(element);
      }
    
  }); */

  /* return commonElements; */
  // Change code above this line
/* }

console.log(getCommonElements([2, 3, 4], [1, 2, 3, 4])); */

//#11

/* const filterArray = (numbers, value) => {

    const filteredNumbers = [];

    numbers.forEach(number => {
        if (number > value) {
            filteredNumbers.push(number);
        };
        
    });
    return filteredNumbers;
};

console.log(filterArray([2, 3, 4, 5],3)); */

//#12
/* const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];
    
  firstArray.forEach(element => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    };
  });
  return commonElements;
};   */

//#13

/* function changeEven(numbers, value) {
  

    const newNumbers = [];

    numbers.forEach(number => {
        if (number % 2 === 0) {
            newNumbers.push(number + value);
            
        } else {
        
            newNumbers.push(number);
        };
    });
    return newNumbers;
};
  
console.log(changeEven([1, 2, 3, 4, 5], 10)); */

//#17

/* Доповни функцію getUserNames(users) таким чином, щоб вона повертала масив імен
користувачів(властивість name) з масиву об'єктів в параметрі users. */

/* const getUserNames = users => {
    return users.map(user => user.name);
        

};


console.log(getUserNames([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
])); */

//#20

/* const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
]; */
// Change code below this line
/* const allGenres = books.flatMap(book=>book.genres);
const uniqueGenres = allGenres.filter((course, index, array) => array.indexOf(course) === index);
 
console.log(allGenres);
console.log(uniqueGenres); */

//#21

/* Використовуючи метод filter(), доповни код таким чином, щоб:

У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating) 
більший за або дорівнює значенню змінної MIN_RATING.

У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям 
(властивість author), яке збігається зі значенням у змінній AUTHOR. */


/* const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell"; */
// Change code below this line

/* const topRatedBooks = books.filter(book=> book.rating>=MIN_RATING);
const booksByAuthor = books.filter(book=>book.author === AUTHOR);

console.log(topRatedBooks);
console.log(booksByAuthor); */

//#35

/* const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];




const totalAveragePlaytimePerGame = players.reduce(((acc, player) => acc + (player.playtime / player.gamesPlayed)), 0);


const totalGames = players.reduce(((acc, player) => acc + player.gamesPlayed), 0);

console.log(totalTime);
console.log(totalGames);

const average = totalTime / totalGames;
console.log(average); */

//#38

/* const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];


const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

console.log(ascendingReleaseDates);

console.log(alphabeticalAuthors);
console.log(releaseDates);
console.log(authors); */

//#39

/* const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];


const ascendingReleaseDates = [...releaseDates].sort((a,b) => a-b);

const descendingReleaseDates = [...releaseDates].sort((a,b) => b-a); */

//#40

/* const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];

const authorsInAlphabetOrder = [...authors].sort((a,b)=>a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a,b)=>b.localeCompare(a)); */

//#41

/* const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];


const sortedByAuthorName = [...books].sort((a,b) => a.author.localeCompare(b.author));

const sortedByReversedAuthorName = [...books].sort((a,b) => b.author.localeCompare(a.author));

const sortedByAscendingRating = [...books].sort((a,b) => a.rating - b.rating);

const sortedByDescentingRating = [...books].sort((a,b) => b.rating - a.rating); */

//#43

/* const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
];

const sortByDescendingFriendCount = users => {
  return [...users].sort((a, b) => b.friends.length - a.friends.length);
}; */

//#45

/* const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = [...books].filter((book) => book.rating > MIN_BOOK_RATING).map((book) => book.author).sort((a, b) => a.localeCompare(b));
 
console.log(names); */

//#46

/* const getNamesSortedByFriendCount = users => {
   return [...users].sort((a,b) => a.friends.length - b.friends.length).map((user) => user.name);
}; */

//#47

/* const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
];

const getSortedFriends = users => {
  return [...users].flatMap((user) => user.friends).filter((user, index, array) => array.indexOf(user) === index).sort((a, b) => a.localeCompare(b));
};

console.log(getSortedFriends(users)); */

//#48

/* const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]; */

/* Доповни функцію getTotalBalanceByGender(users, gender) таким чином, щоб вона повертала загальний баланс
користувачів(властивість balance), стать яких(властивість gender) збігається зі значенням параметра gender. */

/* const getTotalBalanceByGender = (users, gender) => {
  return [...users].filter((user) => user.gender === gender).reduce(((acc, user) => acc + user.balance), 0);
};

console.log(getTotalBalanceByGender(users, "male")); */

































