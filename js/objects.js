/* const book = {
    author: "aaa",
    pages: 100,
    location: {
        city: "kyiv",
        street: "nnnn",
    },
    live: ["first", "second"],
};

console.log(book);

console.log(book.pages);

console.log(book.location.city);

console.log(book.live[1]);

console.log(book.live.length);

console.log(book["author"]);

console.log(book["authorr"]);

const xxx = "pages";

console.log(book[xxx]); */


/* const book = {
    author: "aaa",
    pages: 100,
    location: {
        city: "kyiv",
        street: "nnnn",
    },
    live: ["first", "second"],
};

book.pages = 200;

console.log(book.pages);

book.live.push("add");

console.log(book.live);

book.term = "ccc";

console.log(book); */

/* const book = {
    author: "aaa",
    pages: 100,
    location: {
        city: "kyiv",
        street: "nnnn",
    },
    live: ["first", "second"],
}; */

/* const bookShelf = {
  books: ["The Last Kingdom", "Dream Guardian"],
  // Це метод об'єкта
  getBooks() {
    console.log("Цей метод буде повертати всі книги - властивість books");
  },
  // Це метод об'єкта
    addBook(bookName) {
    bookShelf.books.push(bookName),
    console.log("Цей метод буде додавати нову книгу у властивість books");
  },
};

/* bookShelf.getBooks(); */

/* bookShelf.addBook("Нова книга");

console.log(bookShelf.books);  */

/* const book = { */
/*     author: "aaa",
    pages: 100,
    viewBook() {
        console.log(this.author);
    },
};

book.viewBook(); */

/* const book = {
    author: "aaa",
    pages: 100,
    location: {
        city: "kyiv",
        street: "nnnn",
    },
    live: ["first", "second"],
};

for (const xxx in book) {
    console.log(xxx);
    console.log(book[xxx]);    
} */

/* const book = {
    author: "aaa",
};

console.log(book);

const dog = Object.create(book);
dog.name = "xxx";

console.log(dog);

console.log(dog.author);

console.log(dog.hasOwnProperty("legs")); */

/* const book = {
    author: "aaa",
    pages: 100,
    location: {
        city: "kyiv",
        street: "nnnn",
    },
    live: ["first", "second"],
};


const keys = Object.keys(book);

for (const key of keys) {
    console.log(key);
    console.log(book[key]);

    } */

/*     const book = {
    author: "aaa",
    pages: 100,
    location:
    live: ["first", "second"],
};

console.log(Object.keys(book));

console.log(Object.values(book)); */

/* const book = {
    author: "aaa",
    pages: 100,
    location: {
        city: "kyiv",
        street: "nnnn",
    },
    live: ["first", "second"],
};

console.log(Object.entries(book)); */


/* const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На березі спокійних вод",
    author: "Роберт Шеклі",
    rating: 8.51,
  },
  {
    title: "Сон смішної людини",
    author: "Федір Достоєвський",
    rating: 7.75,
  },
];

for (const book of books) {
    console.log(book);
    console.log(book.title);
    console.log(book.author);
    console.log(book.rating);

} */

/* const car = "a";

const book = {
    a: 6,
    b: 7,
    
};

console.log(book["a"]); */

/* const cars = [
    { name: "dffdf", ppp: "dfdfdf"},
    { name: "dfdfd", ppp: "rtrtrtt"},
]

for (const car of cars) {
    console.log(car);
    car[1] = "xxx";
    
}

console.log(cars);

cars[2] = { name: "uuu", ppp: "ppp" };

cars[1].nnn = 555;

console.log(cars); */

/* const a = {
    b: 1,
    c: 2,
    d: 3,
}

const fff = Object.keys(a);

console.log(fff.length); */

/* const a = [14, 5, 6, 4];

console.log(a);

console.log(Math.max(a));

console.log(...a);

console.log(Math.max(...a));

const copy = [...a];

console.log(copy);

const third = [...a, ...copy];

console.log(third); */


/* function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // Значення першого аргументу
  console.log(secondNumber); // Значення другого аргументу
  console.log(otherArgs); // Масив інших аргументів
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4); */


/* const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

// Деструктуризуємо
const { title, author, isPublic, rating, coverImage } = book;
console.log(coverImage); // undefined

const accessType = isPublic ? "публічному" : "закритому";
const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`; */


/* const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На березі спокійних вод",
    author: "Роберт Шеклі",
    rating: 8.51,
  },
];

for (const book of books) {
  console.log(book.title);
  console.log(book.author);
  console.log(book.rating);
} */

/* function doStuffWithBook(book) {
  // Робимо щось з властивостями об'єкта
  console.log(book.title);
  console.log(book.numberOfPages);
  // І так далі
  }

const book = {
  title: "The Last Kingdom",
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  isPublic: true,
};

doStuffWithBook(book); */

/* function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line  

  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
    
  } 
  
  return "Access denied, wrong password!";
 
  // Change code above this line
}


console.log(checkPassword("polyhax")); */

/* const fruits = ["apple", "peach", "pear", "banana"];

const lastElement = fruits[fruits.length-1];
const lastElementIndex = fruits.indexOf(fruits[fruits.length-1]);
// Change code below this line

console.log(lastElement);
console.log(lastElementIndex); */

/* function getExtremeElements(array) {
  // Change code below this line
return [array[0], array[array.length-1]];

  // Change code above this line
}


console.log(getExtremeElements([1, 2, 3, 4])); */

/* const book = {
  title: "The Last Kingdom",
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  isPublic: true,
}; */

/* console.log(book);

console.log(book.title, book.rating); */

/* const { rating } = book;

console.log(book.rating);
console.log(rating); */

/* const book = {
  title: "The Last Kingdom",
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  isPublic: true,
}; 

const { title, yyy: x ="555"} = book;

console.log(yyy); */

/* console.log(1, 2, 3, 4, 5,
  6, 7, 8); */

 /*  const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags = ["premium", "promoted", "top", "trusted"];

console.log(apartment.tags);

console.log(apartment); */


/* const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  // Ключ
  /* console.log(key); */
  // Значення властивості з таким ключем
  /* console.log(book[key]); */
//}
/* 
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}

console.log(keys);
 */

/* const gamers = ["player-1","111"];
const www = [...gamers];

console.log(www); */


/* const players = [{ id: "player-1", name: "111" }, { id: "player-2", name: "222" }];
const qqq = players.filter(({name}) => name==="111");


console.log(qqq); */

/* const numbers = [5, 10, 15, 20, 25];

const total = numbers.reduce((acc, number) => {
  console.log(number);
  console.log(acc);

  return 100;
}, 10);

console.log(total);
 */

/* const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

console.log(book.title);
console.log(book['title']); */


/* function countProps(object) {
  let propCount = 0;
  // Change code below this line
  for (const key in object) {
    /* console.log(key); */
  /* if (object.hasOwnProperty(key)) {
    propCount += 1; */
    /* continue; */
/*   }
 */
/* }
 */  // Change code above this line
  /* return propCount;
}

console.log(countProps({ name: "Mango", age: 2 })); */ 

/* const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};  */



/* console.log(apartment.descr); */
/* console.log(apartment[descr]); */
/* console.log(apartment["descr"]);  


const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
}; */

/* const bookTitle = book["title"]; */
/* console.log(book["title"]); */ // 'The Last Kingdom'

/* const bookGenres = book["genres"];
console.log(bookGenres); // ['historical prose', 'adventurs']

const propKey = "author";
const bookAuthor = book[propKey];
console.log(bookAuthor); // 'Bernard Cornwell' */

























    








