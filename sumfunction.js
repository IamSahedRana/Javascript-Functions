function sumArray(numbers) {
    let sum = 0;

    for (const number of numbers) {
        sum = sum + number;
    }

    return sum;
}

const num = [10, 20, 30, 40, 50];

const total = sumArray(num);

console.log(total);