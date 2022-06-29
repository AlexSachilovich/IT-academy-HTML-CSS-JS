const name = prompt("Введите ваше имя?");
const surname = prompt("Введите вашу фамилию?");
const patronymic = prompt("Введите ваше отчество?");
const age = prompt("Сколько вам лет");

age >= 60 ? (pension = "да") : (pension = "нет");

let gender = confirm("Ваш пол - мужской?");

gender ? (gender = "мужской") : (gender = "женский");

alert(
  "ваше ФИО: " +
    surname +
    " " +
    name +
    " " +
    patronymic +
    " " +
    "\n" +
    "ваш возрост в годах: " +
    age +
    "\n" +
    "ваш возрост в днях: " +
    age * 365 +
    "\n" +
    "через 5 лет вам будет: " +
    (age * 1 + 5) +
    "\n" +
    "ваш пол: " +
    gender +
    "\n" +
    "вы на пенсии: " +
    pension
);
