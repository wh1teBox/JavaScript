//Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
//   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//   Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 25
if(x !== 0){
    console.log('Вірно')
}else {
    console.log('Невірно')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//   (в першу, другу, третю или четверту частину години).

let time = 40

if (time >= 0 && time < 15) {
    console.log("Число попадає в першу четверть години.");
} else if (time >= 15 && time < 30) {
    console.log("Число попадає в другу четверть години.");
} else if (time >= 30 && time < 45) {
    console.log("Число попадає в третю четверть години.");
} else if (time >= 45 && time < 60) {
    console.log("Число попадає в четверту четверть години.");
} else {
    console.log("Число перевищує кількість хвилин.");
}

// - У змінній day дано якесь число від 1 до 31.
//   Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let date = 25

if (date >= 0 && date < 10) {
    console.log("Число попадає в першу декаду місяця.");
} else if (date >= 10 && date < 20) {
    console.log("Число попадає в другу декаду місяця.");
} else if (date >= 20 && date < 31) {
    console.log("Число попадає в третю декаду місяця.");
} else {
    console.log("Число перевищує кількість днів.");
}

// - Скласти розклад на тиждень за домопоги switch.
//   Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
//   (можна замість плану на день, назву дня англійською).

let day = "Monday";

switch(day) {
    case "Monday":
        console.log("Monday");
        break;
    case "Tuesday":
        console.log("Tuesday");
        break;
    case "Wednesday":
        console.log("Monday");
        break;
    case "Thursday":
        console.log("Tuesday");
        break;
    case "Friday":
        console.log("Monday");
        break;
    case "Saturday":
        console.log("Tuesday");
        break;
    case "Sunday":
        console.log("Tuesday");
        break;
    default:
        console.log("not a day");
}

// - Користувач вводить або має два числа.
//   Потрібно знайти та вивести максимальне число з тих двох .
//   Також потрібно врахувати коли введені рівні числа.

let int1 =prompt("Enter number1")
let int2 = prompt("Enter number2")

if (int1 > int2) {
    console.log(`Максимальне число: ${int1}`);
} else if (int1 < int2) {
    console.log(`Максимальне число: ${int2}`)
} else {
    console.log('Числа рівні')
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//   буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
//   (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x1 = undefined;
x1 = x || "default";

let y = 0;
y = y || "default";

let z = "Hello";
z = z || "default";


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//   За допомоги іф перевірити кожен його елемент на тривалість навчання.
//   У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.forEach(course => {
    if (course.monthDuration > 5) {
        console.log("Супер");
    }
});