let number;

do {
    number = prompt('Введіть чотирицифрове натуральне число:');
    if (number === null) {
        break;
    }

    if (number.length !== 4 || isNaN(number)) {
        console.log("Введене значення не є чотирицифровим натуральним числом.");
    } else {
        const st = number.charAt(0) + "__" + number.charAt(3);
        console.log("Результат:", st);
        break;
    }
} while (true);
