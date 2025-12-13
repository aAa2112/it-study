// let userSurname = prompt ("Введите вашу фамилию")
// let userName = prompt ("Введите ваше имя")
// let userSecondname = prompt ("Введите ваше отчество")
// let age = prompt ("Введите ваш возраст")
// let ageDay = age * 365
// let five = 5
// let ageFive = Number( age + five)
// let userGender = confirm("Вы мужского пола?");

// if (userGender == true) 
//     userGender = " мужской"
// else { 
//     userGender = " женский"
// }
// if (age >= 63 && userGender == true) {

//     pensionAge = "да"
// } else {
//     pensionAge = "нет"
// } if (userGender != true && age >= 58) {
//         pensionAge = "да";
//     } else {
//         pensionAge = "нет";
//     }
 
//     alert('Ваше ФИО: ' + userSurname + ' ' + userName + ' ' + userSecondname + '\n\r ' + 'Ваш возраст в годах: ' + age + '\n\r ' + 'Ваш возраст в днях: ' + ageDay + '\n\r ' + 'Через 5 лет вам будет: ' +ageFive + '\n\r' + 'Ваш пол' + userGender + '\n\r ' + 'Вы на пенсии?: ' + pensionAge);





let userSurname = prompt ("Введите вашу фамилию")
let userName = prompt ("Введите ваше имя")
let userSecondname = prompt ("Введите ваше отчество")
let age = prompt ("Введите ваш возраст")
let ageDay = age * 365

let ageFive = 5 + age
let userGender = confirm("Вы мужского пола?");

    (userGender == true) ? userGender = " мужской " : userGender = " женский ";

    (userGender == true && age >= 63) ? pensionAge = "да" : pensionAge = "нет";

    (userGender != true && age >= 58) ? pensionAge = "да" : pensionAge = "нет";
 
    alert('Ваше ФИО: ' + userSurname + ' ' + userName + ' ' + userSecondname + '\n\r ' + 'Ваш возраст в годах: ' + age + '\n\r ' + 'Ваш возраст в днях: ' + ageDay + '\n\r ' + 'Через 5 лет вам будет: ' +ageFive + '\n\r' + 'Ваш пол' + userGender + '\n\r ' + 'Вы на пенсии?: ' + pensionAge);