// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.

let str1 =`hello`
let str2 =`owu`
let str3 =`com`
let str4=`ua`
let num1= 1;
let num2= 10;
let num3= -999;
let num4= 123;
let num5= 3.14;
let num6= 2.7;
let num7= 16;
let bool1= true;
let bool2= false;
//     Вивести кожну змінну за допомогою: console.log
console.log(str1)
console.log(str2)
console.log(str3)
console.log(str4)
console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)
console.log(num5)
console.log(num6)
console.log(num7)
console.log(bool1)
console.log(bool2)

//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName= `Marian`
let midleName=`Vuichyk`
let lastName=`Romanovich`
console.log(firstName + midleName + lastName)
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
 let a = 100;
let b = '100';
let c = true;
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let userName = prompt(`Ім'я`)
let lastName1 = prompt(`По батькові`)
let age = prompt(`Вік`)
console.log(`Ім'я: `+`${userName}` + ` `+ `По батькові: ` + `${lastName1}`+ ` ` +`Вік:  `+ `${age}`)
