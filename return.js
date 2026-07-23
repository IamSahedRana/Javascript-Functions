function numbers (num1, num2){
     const sum = num1 + num2 ;
     return sum;
}

const totalSum = numbers(49,59);
console.log('The sum of the two Numbers are: ', totalSum);


function getPerson() {
    return {
        name: "Sahed",
        age: 22
    };
}

let person = getPerson();

console.log(person);