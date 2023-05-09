/* let a = "dfdfd";
console.log(a);
console.log(typeof a);
a = Number(a);
console.log(typeof a);
console.log(a); */
/* let b = prompt("dfdff"); */
/* console.log(b); */
/* alert(b); */
/* let c = confirm(b); */
/* console.log(c); */
/* console.log(!false);
console.log(!5); */

/* if (5 < 2) {
    alert("dfrfdfff")
}
else alert("fack") */

/* let cost;
let a = 5;

if (a > 7) {
    cost = 7;
} else if (a < 7) {
    cost = 8;
}

console.log(cost); */

/* let type;
const age = 20;

/* if (age >= 18) {
  type = "adult";
} else {
  type = "child";
} */

/* type = age <= 18 ? "adult" : "dfdefd";
console.log(type);  */

/* const num1 = 5;
const num2 = 10;
let biggerNumber;

biggerNumber = num2 > num1 ? num2 : num1;

console.log(biggerNumber); */
/* let cost;
const subscription = "free";

switch (subscription) {
  case "free":
    cost = 0;
    break;

  case "pro":
    cost = 100;
    break;

  case "premium":
    cost = 500;
    break;

  default:
    console.log("Invalid subscription type");
}

console.log(cost); */

/* let a;
const b = 6;

switch (b) {
    case 6:
        a = "super";
        
    case 7:
        a = "bad";
        
    default:
        alert("dfdfdf")
}

console.log(a); */

/* const value = 5;

if (true) {
  console.log("Block scope: ", value);
}

console.log("Global scope: ", value); */

/* let a = 5;
while (a<10) {
    
   console.log(a);
    a+=2;
} */

/* let counter = 0;

while (counter < 10) {
  console.log("counter: ", counter);
  counter += 1;
} */

/* let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
} */

/* let a = 5;
do {
    console.log(a)
    a += 1;

} while (a < 7); */

/* let password = "";

do {
  password = prompt("Введіть пароль довший 4-х символів", "");
} while (password.length < 5);

console.log("Ввели пароль: ", password); */

/* for (let i = 5; i < 3; i++) {
    console.log(i);

    const target = 3;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  sum += i;
}

console.log(sum);
} */
/* 
const target = 3;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  sum += i;
}

console.log(sum); */

/* const max = 10;
for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
} */

/* for (let i = 0; i <= 5; i += 1) {
  console.log(i);

  if (i === 3) {
    console.log("Знайшли число 3, перериваємо виконання циклу");
    break;
  }
}

console.log("Лог після циклу"); */

/* const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
} */

/* let a = 1;
let b = "";
while (a < 8) {
    b = b + "#";
    console.log(b);
    a += 1;    
} */

/* let a = 100;

for (let i = 1; i <= a; i += 1) {

if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz")
        continue;
    }

    if (i % 5 === 0 && i % 3 !== 0) {
        console.log("buzz")
        continue;
    }

    if (i % 3 === 0) {
        console.log("fizz")
        continue;
    }
   

    console.log(i);
} */

/* const a = "# # # #";
const b = " # # # #";


for (let i = 1; i <= 8; i += 1) {
    if (i % 2 === 0) {
        console.log(b);
        continue;
    }

    console.log(a);
} */

/* const a = "# # # #";
const b = " # # # #";
let i = 1;

while(i <= 8) {
    
        if (i % 2 === 0) {
            console.log(b);        
        }

    console.log(a);
    i += 1;
    }  */
/* let a = 5;
console.log(a);

a++;
console.log(a);

let b = a++;
console.log(b);

console.log(a); */

/* const min = 0;
const max = 5;
let total = 0;

for (let i = 0; i <= max; i += 1) {
  if (i % 2 !== 0) {
    console.log("не четное:", i);
 continue; 
  }

  console.log("четное: ", i)
  total += i;

}

console.log("total: ", total); */

/* const a= ["Mango", "Poly", "Ajax"];
console.log(a); */

/* const b = [5, 6, 8];

for (let i = 0; i <= 2; i += 1) {
  console.log(b[i]);
}
 */

/* const b = ["audi", "bmw", "mercedes"];

b[2] = "pejo";

console.log(b[2]);
console.log(b);

b[3] = "citroen";
console.log(b);

console.log(b.length);

const end = b.length - 2;

console.log(b[end]); */

/* const b = ["audi", "bmw", "mercedes", "citroen"];
 */
/* for (const mash of b) {
  console.log(mash);
} */

/* const mashNameToFind = "bmw";
let message;

for (const mash of b) {
  if (mash === mashNameToFind) {
    message = `dfdfdffdf`;
    break;
  }

  message = `dffdfdfd sdfddf dfd f`
}

console.log(message); */

/* const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;  

for (const xxx of numbers) {
  if (xxx > threshold) {
    console.log(xxx)
    continue;
  }
}
 */

/* let a = 5;
let b = a;

console.log(a);
console.log(b);

a = 6;

console.log(a);
console.log(b); */

/* const a = ["Mango"];
console.log(typeof (a)); */

/* let a = [5];
let b = a;

a.push(6);

console.log(a);
console.log(b);

b.push(7);

console.log(a);
console.log(b); */

/* const a = "automobile super";
console.log(a.split(""));

const message = "JavaScript - це цікаво";
console.log(message.split(" "));

const words = ["JavaScript", "це", "цікаво"];
console.log(words.join("")); 
console.log(words.join(" ")); 
console.log(words.join("-"));  */

/* const a = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(a.indexOf("Kiwi"));

console.log(a.includes("Kiwi")); */

/* const a = ["Mango", "Ajax", "Poly", "Kiwi"];
const fruit = "Kiwi";

/* const hasFruit = a.includes("Kiwi"); */

/* if (a.includes("Kiwi")) {
  console.log(`yes, ${fruit} yes`);
}  */

/* const a = ["Mango", "Ajax", "Poly", "Kiwi"];
a.push("dfdff")

console.log(a);

console.log(a.pop());
console.log(a);

console.log(a.pop());
console.log(a);

console.log(a.pop());
console.log(a);

console.log(a.pop());
console.log(a);

console.log(a.pop());
console.log(a);

console.log(a.pop());
console.log(a); */

/* const a = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(a);

const b = a.slice(1, 2);
console.log(b); */

/* const a = ["mango", "ajax", "poly", "kiwi", "samsung", "bmw", "audi"]; */
/* const b=a.splice(2, 3);
console.log(b);
console.log(a); */

/* a.splice(2, 0, "mers", "porcshe");
console.log(a); */

/* a.splice(1, 2, "dffd", "dfdfdfdf");
console.log(a); */

/* const a = ["mango", "ajax", "poly", "kiwi"];


const b = ["samsung", "bmw", "audi"];

const c = a.concat(b);
const d = b.concat(a);

console.log(a);
console.log(b);
console.log(c);
console.log(d); */

/* const a = ["mango", "ajax", "poly", "kiwi"];
const b=a.splice(0, 1);
console.log(a);
console.log(b); */

/* const a = ["mango", 5, "poly", "kiwi"];
const b = ["mango", 5, "poly", "kiwi"]; */

/* console.log(a === b); */

/* a.unshift("dfdffd");

console.log(a);

a.shift();
console.log(a);
 */

/* const a = ["mango", 5, "poly", "kiwi"];

a.xxx = "555";

console.log */

/* function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
  switch (password) {
     case "auto":
       message = "Welcome!";
       return message;        
    break;

    case null:
      message = "Canceled by user!";
      return message; 
    break;  

    

  default:
  message = "Access denied, wrong password!";

  // Change code above this line
  return message;
   }
}

console.log(checkPassword(null)); */

/* function getShippingCost(country) {
  let message;
  // Change code below this line
  switch (country) {
    case "China":
      message = 100;
      return message;
      break;
    
    case "Chile":
      message = 250;
      return message;
      break;

    case "Australia":
      message = 170;
      return message;
      break;

    case "Jamaica":
      message = 120;
      return message;
      break;

    default:
      message = "Sorry, there is no delivery to your country";    

      // Change code above this line
      return message;
  }

}

console.log(getShippingCost("China")); */

/* let a = "abcdef";

console.log(a.length); */

/* const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.lenght;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.lenght - 1];

// Change code above this line

console.log(courseTopicLength);
console.log(firstElement);
console.log(lastElement); */

/* function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
if (message.length <= maxLength) {
  result = message;
} else {
  result = message.slice(0, maxLength) + "...";
}
  /// Change code above this line
  return result;
}

console.log(formatMessage("12345678", 5)); */

/* const a = "# # # #";
const b = " # # # #";
	
for (let i = 1; i <= 8; i += 1) {
if (i % 2 === 0) {
console.log(b);
continue;
 }

console.log(a);
}  */

/* const a = "# # # #";
const b = " # # # #";
let i = 1;

while(i <= 8) {
 
if (i % 2 === 0) {
  console.log(b); 
  i += 1;
  continue;
}

console.log(a);
 i += 1;
}    */

/* 
function calculateTotal(number) {
  // Change code below this line
  let total = 0;
  for (let i = 0; i <= number; i += 1) {
    /* console.log(i); */
/* total += i; */
/* } */

/*  return total; */

/*  for (let i = 0; i <= 20; i += 5) {
     console.log(i);
   } */

// Change code above this line

/* } */

/* console.log(calculateTotal(7));  */

/* const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i<=(fruits.length-1); i+=1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
} */

/* function calculateTotalPrice(order) { */
/* let total = 0; */
// Change code below this line
/* for (let i=0; i < order.length; i+=1) {
  console.log(order[i]); */
/* total += i; */
/* } */
// Change code above this line
/* return total; */
/* } */

/* calculateTotalPrice([12, 85, 37, 4]); */

/* function findLongestWord(string) {
  // Change code below this line
  
  const array = string.split(" ");
  
  let longestWord = array[0];
  
  
  for (const word of array) {
    

    if (word.length > longestWord.length) {
      
      longestWord = word;
      continue;
    }   
      
  }

  return longestWord;

}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); */

/* function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for (let i = min; i <= max; i += 1) {
    /* console.log([i]); */
/* numbers.push(i); */

/* } */

// Change code above this line
/* return numbers; */
/* } */

/* console.log(createArrayOfNumbers(3, 10));  */

console.log("dfdfdfdfdffdfd");
