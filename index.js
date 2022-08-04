let num = Math.floor(Math.random() * 1000);
console.log(num);
let count = 0

while (true) {
    let guessNum = prompt('Введите целое число от 0 до 999, для выхода - q:');
    console.log(guessNum)
    count ++
    if (guessNum == 'q') {
        alert('Заходите еще попытать счастье, пока!');
        break;
    } else if (+guessNum === num) {
        alert('Вы угадали! Количество попыток -' + count);
        break;
    }

    if (isNaN(guessNum)) {
        alert('Вы ввели не число!')
    } else if (guessNum > 999 || guessNum < 0) {
        alert('Вы ввели число за пределами предлагаемого диапазона!')
    } else if (guessNum != Math.floor(guessNum)) {
        alert('Вы ввели не целое число!')
    } else if (guessNum - num > 0) {
        alert ('Загаданное число меньше Вашего числа, пока не угадали!')
    } else if (guessNum - num < 0) {
        alert ('Загаданное число больше Вашего числа, пока не угадали!')
    } 
}