//#25

/* function getCommonElements(array1, array2) {
  // Change code below this line
const array = [];
  for (const i of array1) {
    

    if (array2.includes(i)) {
      array.push(i);
    }
  }

  return array;


 // Change code above this line
} */

//#26

/* function calculateTotalPrice(order) {
  let total = 0;
  

  for (const i of order) {
    total += i;
  }

  
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4])); */

//#27

/* function filterArray(numbers, value) {
  
  const filteredNumbers = [];

  for (const i of numbers) {
    const number = i;

    if (number > value) {
      filteredNumbers.push(i);
    }
  }

  return filteredNumbers;
  
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); */

//#29

/* Напиши функцію getEvenNumbers(start, end),
    яка повертає масив усіх парних чисел від start до end.
    Парним вважається число, яке ділиться на 2 без остачі(10 % 2 === 0). */

/* function getEvenNumbers(start, end) {
   
    const array = [];
    for (let i = start; i <= end; i += 1) {
        
        if (i % 2 === 0) {
            array.push(i);
        }        
    }
    return array;    
  }

console.log(getEvenNumbers(6, 12));
 */

//#30

/* Доповни код таким чином, щоб у змінну number 
записувалося перше число від start до end, яке ділиться на 5 без остачі. */

/* const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
      number = i;
      break;
  }
} */

/* #32 
Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє,
    чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).
 */

/* function includes(array, value) {
  
    for (const i of array) {
        
        if (i === value) {
            return true;            
        }        
    }
    return false;

  
}

console.log(includes([1, 2, 3, 4, 5], 3)); */


/* function includes(array, value) {
  
    for (const i of array) {
        
        if (i === value) {
            return true;            
        }        
    }
    return false;

  
}

console.log(includes);

let a = includes;

console.log(a); */