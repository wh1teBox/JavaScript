// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let animals = ['cat', 'dog', 'rabbit', 'fox', 'lion', 'elephant', 'giraffe', 'alligator', 'skunk', 'wolf' ]
console.log(animals[0])
console.log(animals[1])
console.log(animals[2])
console.log(animals[3])
console.log(animals[4])
console.log(animals[5])
console.log(animals[6])
console.log(animals[7])
console.log(animals[8])
console.log(animals[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let book1 = {
//     title: 'Harry Potter and the Philosophers Stone',
//     pageCount: 325,
//     genre: 'fantasy'
// }
//
// let book2 = {
//     title: 'Lord of the rings',
//     pageCount: 287,
//     genre: 'fantasy'
// }
//
// let book3 = {
//     title: 'Duna',
//     pageCount: 656,
//     genre: 'fantasy'
// }

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
//  Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1 = {
    title: 'Harry Potter and the Philosophers Stone',
    pageCount: 325,
    genre: 'fantasy',
    authors: ['Joan Rowling', 56]
}

let book2 = {
    title: 'Lord of the rings',
    pageCount: 287,
    genre: 'fantasy',
    authors: ['John RTolkien', 81]

}

let book3 = {
    title: 'Duna',
    pageCount: 656,
    genre: 'fantasy',
    authors: ['Frank Herbert', 65]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". ' +
// 'Поля: name, username,password. Вивести в консоль пароль кожного користувача.

let users = [
    {name:'Max', username:'max21',password:'qwerty'},
    {name:'Igor', username:'igorS21',password:'[poiuyt'},
    {name:'Olga', username:'olga_45',password:'jfgrythv1'},
    {name:'Victoria', username:'vika465g',password:'gfvt6e'},
    {name:'Andy', username:'fg_andy',password:'fgre56d'},
    {name:'Sergiy', username:'siryi33',password:'zxcv36h'},
    {name:'Iryna', username:'ira22',password:'fdghdhdh'},
    {name:'Maria', username:'mari3332',password:'gfgtruw75e'},
    {name:'Paul', username:'pwol64',password:'fgdtye'},
    {name:'Luke', username:'lukeG4',password:'asgrty445'},
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
//   Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
//   Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

// let temperatures = [
//         [18, 25, 20],
//         [19, 26, 21],
//         [17, 24, 19],
//         [20, 28, 23],
//         [21, 29, 24],
//         [22, 30, 25],
//         [18, 27, 22]
//     ]

let temperature = [
    {morning:18, afternoon:25, evening:20},
    {morning:19, afternoon:26, evening:21},
    {morning:17, afternoon:24, evening:19},
    {morning:20, afternoon:28, evening:23},
    {morning:21, afternoon:29, evening:24},
    {morning:22, afternoon:30, evening:25},
    {morning:18, afternoon:27, evening:22}
]

