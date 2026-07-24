function isEven(numbers){
     if (numbers % 2 === 0){
          return "Even";
     }
     else {
          return "Odd";
     }
}

const result = isEven(9);
console.log('The Number is:', result);