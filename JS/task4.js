function isPalindrome(num) {
    return num.toString() === num.toString().split('').reverse().join('');
}

let number;

while (true) {
    number = prompt('Введіть початкове число:');

    if (number === null) {
        break;
    }

    number = parseInt(number);

    if (!isNaN(number)) {
        break;
    } else {
        console.log("Введіть коректне число.");
    }
}

if (!isNaN(number)) {
    while (true) {
        const square = number ** 2;
        if (isPalindrome(square)) {
            console.log("Число, квадрат якого є паліндромом:", number);
            break;
        }
        number++;
    }
}
