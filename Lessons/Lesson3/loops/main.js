
//loops

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (i = 0; i < 6; i++){
    if (coursesAndDurationArray[i].monthDuration >5 )
    console.log("Super")
}


//itar будує цикл for використовуючи останній масив з даними
for (let i = 0; i < coursesAndDurationArray.length; i++) {
    const element = coursesAndDurationArray[i];

}

//ritar зворотній цикл від останього до першого значення
for (let i = coursesAndDurationArray.length - 1; i >= 0; i--) {
    const coursesAndDurationArrayElement = coursesAndDurationArray[i];
    
}

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    const element = coursesAndDurationArray[i];

    if ( (i > 0 && i <= 5) || (i > 8 && i <= 10)){
        console.log(element)
    }
}

//for..of (не має діапазону в якому він діє)

for (let course of coursesAndDurationArray) {
    if (course.monthDuration < 100){
        console.log("hey");
    }
}

let user = {
    name: "John",
    age: 33,
    isAdmin: true,
    skills: ['html','java','python']
}

for(let key in user){
    console.log(key);
    console.log(user[key]);
}

for (let key of user) {
    console.log(key, user[key])
    if(Array.isArray(user[key])){
        let someArray = user[key]
        for (let ArrayElement of someArray) {
            console.log(ArrayElement)
        }
    }

}