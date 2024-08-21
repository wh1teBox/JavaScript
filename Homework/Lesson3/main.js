//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

let sentences = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas."
];

// for (let i = 1; i < sentences.length; i++) {
//
// let text = sentences[i];
//
//     document.write(`<div>
//
//        <h3> ${text} </h3>
//
//     </div>`)
// }

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 1; i < sentences.length; i++) {
//
//     let text = sentences[i];
//
//     document.write(`<div>
//
//        <h3> ${text} index ${i} </h3>
//
//     </div>`)
// }

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let sentences_while = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est nobis pariatur perferendis quidem voluptas."
];

let i = 1
let text = sentences_while[i]

while (i <= sentences_while.length){
    document.write(`<div>

       <h1> ${text} </h1>
       
    </div>`)

    i++

}

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
//ШАБЛОН:
// <ul>
//   <li>ITEM OF ARRAY</li>
// &lt;!&ndash;
//  ітд інші об'єкти масиву
//    ...
//    ...
//    ...
//  &ndash;&gt;
// </ul>

//замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву.

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js']

document.write('<ul>')

for (i = 0; i <listOfItems.length; i++){
    document.write('<li>' + listOfItems[i] + '</li>')
}

document.write('</ul>')


//Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

// ШАБЛОН
// <div class="product-card">
//<h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
//</div>
//Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];


for (i = 0; i< products.length; i++){

    let product = products[i]
    document.write(`<div class = 'product-class'>
              <h3 class = "product-title"> ${product.title}. price - ${product.price} </h3>
              <img class="product-image" src="${product.image}" alt="product-image" >
              </div>`
         )
}

//є масив users
// за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

console.log("Користувачі зі статусом true:");
for (let user of users) {
    if (user.status) {
        console.log(user);
    }
}

console.log("Користувачі зі статусом false:");
for (let user of users) {
    if (!user.status) {
        console.log(user);
    }
}

console.log("Користувачі старші за 30 років:");
for (let user of users) {
    if (user.age > 30) {
        console.log(user);
    }
}