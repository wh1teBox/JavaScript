function showMessage(){
    alert ('Hello')
}

showMessage();

arrA = [1,2,3];
arrB = [10,20,30];
arrC = [100, 200,300];

function printArray (arr){
    for(let arrayElement of arr){
        console.log(arrayElement);
    }
}

printArray(arrA);
printArray(arrB);
printArray(arrC);

// Функція addObjToConcreteArray додає новий об'єкт до масиву arr. Ось пояснення її роботи:
//
// let arr = [];: створює порожній масив, у який будуть додаватися об'єкти.
// function addObjToConcreteArray(obj) { ... }: визначається функція, яка приймає один параметр obj (об'єкт,
// який потрібно додати до масиву).
// arr[arr.length] = obj;: цей рядок додає об'єкт до масиву arr на наступну доступну позицію.
// arr.length повертає кількість елементів у масиві, тому новий об'єкт додається в кінець масиву.

// Це еквівалентно використанню методу arr.push(obj), який також додає елемент до кінця масиву.
let arr= [];

function addObjToConcreteArray(obj){
    arr[arr.length] = obj;
}

addObjToConcreteArray({id:1});
addObjToConcreteArray({id: 2});
addObjToConcreteArray({id:3,name:'Ira'})

console.log(arr)

//Додавання обєктів у два різні масиви
let arr1= [];
let brr= [];

function addObjToArray(obj,array){
    array[array.length] = obj;
}

addObjToArray({id: 1},arr1)
addObjToArray({id: 2},brr)

console.log(arr1);
console.log(brr);

