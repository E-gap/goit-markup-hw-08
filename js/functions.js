/* function a() {
  console.log(`dfdfdfdff`);
}

a();
a();
a(); */

/* function a(x, y, z, c) {
    console.log(`${x * y * z * c}`);
    
}

a(1,2,4,5); */
/* a(4,5);
a(1,3); */

/* function multiply(x, y, z) {
  console.log("Код до return виконується звичайним чином");

  
  return x * y * z;

  console.log("Цей лог ніколи не виконається, він стоїть після return");
}

let result = multiply(2, 3, 5);
console.log(result);

result = multiply(4, 8, 12);
console.log(result);

result = multiply(17, 6, 25);
console.log(result); */

/* function a() {return}

console.log(a()); */

/* function count(countFrom = 0, countTo = 10, step = 1) {
  console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

  for (let i = countFrom; i <= countTo; i += step) {
    console.log(i);
  }
}

/* count(1, 5); */
/* count(1); */

/* function a(b = 1, c = 3, step = 1) {
    for (let i = b; i <= c; i += step) {
        console.log(i);
    }
}

a(1,5,1); */

/* function a() {
    let total = 1;

    for (const argument of arguments) {
        total *= argument;
    }

    
    return total;
}

console.log(a(1, 2, 3, 4, 5)); */

/* function fn() {
    const args = Array.from(arguments);
    console.log(args);
}

fn(1, 5, 6, 7, 8, 9); */




/* function withdraw(amount, balance) {
    if (amount === 0) {
        console.log(`enter amount`)
    } else if (amount > balance) {
        console.log(`fail`);
    } else {
        console.log(`ok`);
            }
} */

/* withdraw(100, 50); */

/* const withdraw = function (amount, balance) {
    if (amount === 0) {
        console.log(`enter amount`)
    } else if (amount > balance) {
        console.log(`fail`);
    } else {
        console.log(`ok`);
            }
}

withdraw(100, 50); */

/* function a() {
    console.log(`f1`);
    b(); 
console.log(`f3`);
    
}

a();

function b() {
    console.log(`f2`);
} */

/* function bar() {
  console.log("bar");
}

function baz() {
  console.log("baz");
}

function foo() {
  console.log("foo");
  bar();
  baz();
}

foo(); */

/* function add(a, b, c) {
    let result = a + b + c;
  console.log(`Addition result equals ${result}`);
  
}

add(2, 3, 5); */

/*   function add(a, b, c) {
  let result = a + b + c;
  console.log(`Addition result equals ${result}`);
  
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15); */

/* function isAdult(age) {
  // Change code below this line
  const passed = age >= 20 ? true : false;

  // Change code above this line
    console.log(passed);
    return passed;
    
}

isAdult(20);
let a = passed;
console.log(a);
 */

  /* function add(a, b, c) {
    let result = a + b + c;
    console.log(result);
    /* return result; 
  
} */

/* const bbb = add(1, 2, 3);
console.log(bbb);

const c = bbb + 6;
console.log(c);  */

/* function a() {

  
  console.log(1);
return 555;
  console.log(2);

  console.log(3);


}

console.log(a());

a(); */

/* function a() {

  
  console.log(value);


}

a(); */


/* function a() {
  console.log("ffggf");
}
console.log(a); */

/* function a() {
  const arg = Array.from(arguments);
  console.log(arg);
  /* return arg; 
} */

/* a(1, 2, 3, 4, 5); */

/* console.log(a(1, 2, 3, 4, 5));  */

/* function a(...ddd) {
  console.log(ddd);
}

a(1, 2, 3, 4, 7); */

/* function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  const isMatch = password === SAVED_PASSWORD;

  // Change code above this line
  return isMatch;
}

  
console.log(isValidPassword("jqueryismyjam")); */

/* function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line
  let a = message.split(" ");
  let b = a.length;
  console.log(a);
  let c = b * pricePerWord;
  return c;


   // Change code above this line
}



console.log(calculateEngravingPrice("sdsd sddssd sdsd sdsd sdsd", 3)); */

/* function slugify(title) {
  // Change code below this line
  return title.toLowerCase().split(" ").join("-");


  // Change code above this line
}

console.log(slugify("DFdf dfdf DFdf")); */

/* const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0,2);
const nonExtremeEls = fruits.slice(1, (fruits.length-1));
const lastThreeEls = fruits.slice(-3);

console.log(fruits);
console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls); */

/* function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
const x = firstArray.concat(secondArray)


  if (x.length >= maxLength) {
    return x.slice(0,maxLength);
  }

  return x;
    // Change code above this line
  }

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); */

/* const a = [1, 2, 3, 4, 5, 6];
const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];

console.log(a.concat(oldClients).concat(newClients));

console.log(a.concat(oldClients, newClients)); */

/* function multiply(a, b, ...args) {
  console.log(args); // масив усіх аргументів
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4); */

/* Напиши функцію filterArray(numbers, value), яка приймає масив чисел(параметр numbers) 
і повертає новий масив, в якому будуть тільки ті елементи масиву numbers,
  які більші за значення параметра value(число). */

/* function filterArray(numbers, value) {
   // Change code below this line
  const array = [];
  for (const i of numbers) {
    /* console.log(i); */
    /* if (i > value) {
      array.push(i); */
      /* continue; */
      /* console.log(array); */
/* }
        
  } */
  /* return array; */
  // Change code above this line
/* } */

/* console.log(filterArray([1, 2, 3, 4, 5], 3));  */

/* function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];
  console.log(fruits.includes(fruit));

  return fruits.includes(fruit); // Change this line
}

console.log(checkFruit("mandarin")); */

/* function getCommonElements(array1, array2) {
  // Change code below this line
  const array = [];
  for (const i of array1) {
    /* console.log(i); */

    /* if (array2.includes(i)) {
      array.push(i);
    }
  }
 */
  /* return array; */

 // Change code above this line
/* }

console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));  */




