function hasDigit(num, d) {
    while (num > 0) {
        if (num % 10 === d) {
            return true;
        }
        num = Math.floor(num / 10);
    }
    return false;
}

function sumOfNumbers1(d) {
    let sum = 0;
    for (let num = 100; num <= 999; num++) {
        if (hasDigit(num, d)) {
            sum += num;
        }
    }
    return sum;
}

console.log("Знайти суму трицифрових чисел, які мають в своєму записі цифру d:");

let d = parseInt(prompt("Введіть значення d:"));
if (!isNaN(d) && d >= 0 && d <= 9) {
    let sumOfNumbers = sumOfNumbers1(d);
    console.log("Сума трицифрових чисел, які мають цифру " + d + " в своєму записі: " + sumOfNumbers);
} else {
    console.log("Будь ласка, введіть коректну цифру від 0 до 9.");
}
