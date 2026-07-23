function square(number){
     num = number * number
     console.log('The Number Square is: ', num)
}

square(10); // Way 01
const numInput = 80; 
square(numInput); // Way 02

function numbers(num1, num2, num3, num4) {
     const sum = num1 + num2 + num3 + num4;
     const sub = num1 - num2 - num3 - num4;
     const mul = num1 * num2 * num3 * num4;
     const div = num1 / num2 / num3 / num4;
     console.log('The Sum of Numbers: ',sum);
     console.log('The Subtraction of Numbers: ',sub);
     console.log('The Multiplication of Numbers: ',mul);
     console.log('The Division of Numbers: ',div);
}

numbers(100,80,60,40);

