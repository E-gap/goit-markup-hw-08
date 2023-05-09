/* const words = ['fggf', 'ffdf', 'rrf']


function smash(a) {
    return "";
};

console.log(smash(words)); */

/* function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let count=0;
  for (const i of arrayOfSheep) {
    if (i) {
      count+=1;
    } else continue
    
  }
  return count
}

const array = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
    false, false, true, true]
  
    console.log(countSheeps(array)) */

/*     function booleanToString(b){
  //your code here
  return b.toString()
}

console.log(booleanToString(false)) */
/* 
var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

function findNeedle(haystack) {
  // your code here
  for (let i = 0; i < haystack.length; i += 1) {
  if (haystack[i] === "needle") {
    return `found the needle at position ${i}`
  } else continue
}
}

console.log(findNeedle(haystack_1));
console.log(findNeedle(haystack_2));
console.log(findNeedle(haystack_3)); */

/* const arr = [1,-4,7,13]

function positiveSum(arr) {
  let sum =0;
  for (const i of arr) {
    if (i>0) {
      sum +=i
    } else
    continue
  }
  return sum
}

console.log(positiveSum(arr)); */

/* const array = [1, -4, 7, 13, -7]

function countPositivesSumNegatives(input) {
  // your code here
  let count = 0;
  let sum = 0;
  const arr = [];

  for (const i of input) {
    if (i > 0) {
      count += 1;
    } else {
      sum += i;
    }
    
    
  }
  arr.push(count, sum);  
  return arr;
}

console.log(countPositivesSumNegatives(array)); */

/* const array = [1, 4, 7, 13, 7]

function maps(x){
  const array = [];

  for (const i of x) {
    array.push(i * 2);
  }
  return array;

}

console.log(maps(array)); */

/* function greet () {
  return "hello world!";
} */

/* function countBy(x, n) {
  let z = [];
  for (let i = x; i <= n*x; i += x)
    if (i % x === 0) {
      z.push(i);
    }
  return z;
}


console.log(countBy(2, 5)) */

/* function hero(bullets, dragons){
//Get Coding!
  if (bullets < dragons * 2) {
    return false
  }
  else {
    return true
  }
}

console.log(hero(7,4)) */

/* function getGrade(s1, s2, s3) {
  // Code here
  const average = ((s1 + s2 + s3) / 3);

  if (average >= 90 && average <= 100) {
    return "A";
  }
  else if (average >= 80 && average < 90) {
    return "B";
  }
    else if (average >= 70 && average < 80) {
      return "C";
    } else if (average >= 60 && average < 70) {
      return "D";
    } else {
      return "F";
    }
  }


console.log(getGrade(40, 50, 170)); */

/* function cockroachSpeed(s) {
  //Good Luck!
  const sm = s * 1000 * 100/3600;
  return Math.floor(sm);
}

console.log(cockroachSpeed(20)); */

/* const array = [3,5,-6];

function countPositivesSumNegatives(input) {
  // your code here
  let count = 0;
  let sum = 0;
  let zero = 0;
  const arr = [];
  

  if (input.length === 0) {
  return arr;
  }
  
  for (const i of input) {


    if (i > 0) {
      count += 1;
    } else if (i < 0) {
      sum += i;
    } else if (i === 0) {
      zero += 1;
    }
  }

  if (zero === input.length) {
    return arr;
  } else {

    arr.push(count, sum)
    return arr;
  }
}

console.log(countPositivesSumNegatives(array))
 */

//const array = [3,2,-6]

/* function sumMix(x){
  let sum = 0;

  for (const el of x) {
    sum += Number(el);
  }
return sum
}

console.log(sumMix(array)) */

/* function grow(x){
  let sum = 1;
  for (const el of x) {
    sum *= el;
  }
  return sum
}

console.log(grow(array)) */

/* const text = 'один два три четыре'
const array = text.split(' ') */
//console.log(array);

//const rrr = array.map((el) => el[0].toUpperCase())

//console.log(rrr);
/* const up = [];
for (const i of array) {
  
  const eee = i.replace(i[0], i[0].toUpperCase())
  up.push(eee);
}

console.log(up)

const ddd = up.join(' ')

console.log(ddd)


//const text2 = array.join(' ')

//console.log(text2);

String.prototype.toJadenCase = function () {
  return this.split(' ').map
};

console.log(String.prototype.toJadenCase());

console.log(text.toJadenCase()); */

/* var summation = function (num) {
  // Code here
} */

//const ttt = "-1.234";
//const rrr = ttt.toUpperCase()
//console.log(rrr);
//console.log(Number(ttt))

//console.log(rrr);

//console.log(1 * n);

/* for (const i of ttt) {
  
    console.log(i*2)
  } */

/* const ttt = '123';
//const rrr = ' '
//console.log(rrr)

function validatePIN(pin) {
  //return true or false
  if (pin.toString().length !== 4 && pin.toString().length !== 6) {
    return false;
  }

  for (const el of pin) {
    //console.log(el*2)
    if ((el * 2 === el * 2) && (el !==" ")) {
      continue;
    } else {
      return false;
    }
  }
  return true;
} */

/* if ((pin.toString().length !== 4 && pin.toString().length !== 6)) {
    return false;
  } else {
    return true;
  } 
} */

/* console.log(validatePIN(ttt)); */

//longest(a, b)  "abcdefklmopqwxy"

/* const a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */

/* const aaa = a.split('');
const bbb = b.split('');
const ccc = [...aaa, ...bbb]
//console.log(ccc);
const array = [];
for (const el of ccc) {
  if (array.includes(el)) {
    continue;
  } else {
    array.push(el);
  }  
}


console.log(array); */

/* const a = "xyaabbbccccdefww"
const b = "xxxxyyyyabklmopq"

function longest(s1, s2) {
  // your code
  const aaa = s1.split('');
const bbb = s2.split('');
  const ccc = [...aaa, ...bbb]
  const array = [];
for (const el of ccc) {
  if (array.includes(el)) {
    continue;
  } else {
    array.push(el);
  }  
  }
  
const arraySorted = array.sort();
return arraySorted.join('')
}

console.log(longest(a, b)); */

/* function squareDigits(num) {
  const sss = Number(String(num).split('').map((el) => Math.pow(el, 2)).join(''));
  return sss;
  
}

console.log(squareDigits(0)); */

/* function greet(name){
  //your code here
} */

/* "scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!" */

/* const p1 = '';
const p2 = ''; 

const rps = (p1, p2) => {
  if (p1 === p2) { return "Draw!" }
  else if ((p1 === 'scissors' && p2 === 'rock') || (p1 === 'paper' && p2 === 'scissors') || (p1 === 'rock' && p2 === 'paper')) { return "Player 2 won!" }
  else {return "Player 1 won!"}
  
  };

console.log(rps(p1, p2)); */

/* const array = [3, 6, 7];

function findAverage(array) {
  // your code here
  if (array.length === 0) {
    return 0;
  } else {
    const total = array.reduce((acc, el) => { return acc + el }, 0);
    return total / array.length
  }
  
}

console.log(findAverage(array)); */

/* const array = [];

function oddOrEven(array) {
   //enter code here
  const sum = array.reduce((acc, el) => acc + el, 0);
  if (sum % 2 === 0 || array.length ===0) {
    return "even";
  } else {
    return "odd"
  }
}

console.log(oddOrEven(array)) */

/* const games = ["1:2", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"];
  
  
function points(games) {
  let points = 0;
  for (const el of games) {
    if (el[0] === el[2]) {
      points += 1;
    } else if (el[0] > el[2]) {
      points += 3;
    } else continue;
}
  return points
}

console.log(points(games)); */

/* const arr = [27, 2, 41, 4, 7, 3, 75];


function minMax(arr){
  arr.sort((a,b) => a-b);
   return [arr[0], arr[arr.length-1]];
}

console.log(minMax(arr)) */

/* const classPoints = [2, 3];
const yourPoints = 5;

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  const average = (classPoints.reduce((acc, el) => acc + el, 0)) / classPoints.length
  return yourPoints > average ? true : false;
}

console.log(betterThanAverage(classPoints, yourPoints)); */

/* function nbYear(p0, percent, aug, p) {
    // your code
  let counter = 0;
  let end = p0;
  while (end < p) {
    end = end +Math.floor(end * percent / 100) + aug;
    counter += 1;
  }  
  return counter;
}

console.log(nbYear(1500, 5, 100, 1700)) */

/* const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

function countPositivesSumNegatives(input) {
  // your code here

  const posarray = [];
  for (const i of input) {
    if (i > 0) {
      posarray.push(i);
      
    }
  }

  const countpositive = posarray.length;  
  const negative = input.filter(el => el < 0);
  const sumnegative = negative.reduce((acc, el) => acc + el, 0);
 

  if (countpositive === 0 && sumnegative === 0) {
    return [];
  } else {
    return [countpositive, sumnegative]
  }

}

console.log(countPositivesSumNegatives(input)); */

/* const arr = [3, 5, 6, 78];

function removeEveryOther(arr) {
  //your code here
  
  return arr.filter((el, i) => i % 2 === 0);
}
  
  //return sss;


console.log(removeEveryOther(arr)); */

//a, e, i, o, u

/* const str = 'artyuionhy';

function getCount(str) {
  
  const array = str.split('').filter(el => ((el === 'a') || (el === 'e') || (el === 'i') || (el === 'o') || (el === 'u')));
  return array.length;
}

console.log(getCount(str)); */
