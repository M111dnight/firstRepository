//  console.log(`hello`)

//  let cars:number = 70
//  let trucks:number = cars + 90
//  let combains:number = trucks / 4
//   let techinks:number = cars + trucks + combains
//   console.log(`Всего транспорта: ${techinks} единиц техники `+ "\n")

//  За три дня выставку картин посетили 385 человек, из них в первый день 95 человек,
//  во второй в 2 раза больше. Сколько человек посетили выставку в третий день?

//  let summary:number = 385
//  let oneDay:number = 95
//  let twoDay:number = oneDay * 2

//  let threeDay:number = summary - (oneDay+twoDay)
//  console.log(`Задача первая:
// В третий день выставку посетили ${threeDay} человек` + "\n")

//  //Школьники за день собрали 1200кг винограда. Из них 200кг оставили для школы,
//  //а остальной отдали в детский сад в ящиках. по 10кг в каждом.
//  // Сколько ящиков с виноградом отдалив детсад?

//  let allVinograd:number = 1200
//  let school:number = 200
//  let child:number = (allVinograd - school) / 10

// console.log(`Задача вторая:
// В детсад отдали ${child} ящиков с виноградом`+ "\n")

// // Длина участка 70м, а ширина 40м. Найди площадь и периметр участка.
// let length1:number = 70
// let width:number = 40

// let S:number = length1 * width
// let P:number = length1 + width

// console.log(`Задача третья:
// -Площадь участка: ${S} м2
// -Периметр участка: ${P} м` + "\n")

// //В одной книге 236 страниц, а в другой 148 страниц.
// //За сколько дней можно прочитать эти две книги, если читать в день по 8 страниц

// let bookOne:number = 236
// let bookTwo:number = 148

// let read:number = (bookOne + bookTwo) / 8
// console.log(`Задача четвертая:
// Эти две книги будут прочтены за ${read} дней` + "\n")

// //N школьников делят K яблок поровну, неделящийся остаток остается в корзинке.
// // Сколько яблок достанется каждому школьнику?

// let N:number = 10
// let K:number = 3

// let remain:number = N % K
// let teenager:number = (N-remain) / K

// console.log(`Задача пятая:
// -Количество яблок: ${teenager}  каждому школьнику
// -Остаток: ${remain} яблок` + "\n")

// // Улитка ползёт по вертикальному шесту высотой h метров,
// // поднимаясь за день на a метров, а за ночь спускаясь на b метров.
// // На какой день улитка доползёт до вершины шеста?

// let h:number = 3
// let a:number = 1.5
// let b:number = 0.5

// let day:number = h/(a-b)

// console.log(`Задача шестая: Улитка доползет до веришны шеста за ${day} дня` + "\n")

// За день машина проезжает n километров.\
// Сколько дней нужно, чтобы проехать маршрут длиной m километров?

// let n:number = 2500
// let m:number = 18325

// let days:number = m/n

// console.log(`Задача седьмая: Маршрут длиной ${m} километров пройдет за ${days} дней ` + "\n")

// let num1= 45
// let num2= 333

// if(num1>num2){
//     console.log(`${num1} является большим числом` + "\n")
// }
// else if(num1=num2){
//     console.log(`числа равны`)
// }
// else {
//     console.log(`${num2} является большим числом`)
// }

// && - оператор и
// || - оператор или
// ! - оператор не

// Сделать программу, которая выдает оценку эффективности сотрудника.
// Инеженер имеет N лет стажа и завершил K проектов.
// Рассчитать его эффективность по формуле: проекты/стаж
// Показатели
// эффективность >=4 сотрудник эффективен
// эффективность >=3 сотрудник должен улучшить результаты
// все что ниже сотруднику необходимо пройти переквалификацию

// let experience:number = 3
// let project:number = 15
// let effect:number = project/experience

// if (effect>=4){
//     console.log(`Сотрудник эффективен`)
// }
// else if (effect>=3){
//     console.log(`Сотрудник должен улучшить результаты`)
// }

// else {
//     console.log(`Сотруднику нужно переквалифицироваться` + "\n")
// }

// Есть 3 отдела. Технический, Аппаратный, проектировщики
// У каждого отдела N закрытых проектов (зп) и успешно запущенных проектов
// показатель качества (зп+узп)/100*узп
// если пк отдела превышает 70% то отобразить отдел название отдела получат премию 10%
// если пк отдела меньше 40% то отобразить отдел закрыт

// let techZp: number = 5
// let techYzp: number = 85
// let effct1:number = (techZp + techYzp)/100*techYzp
// let otdelName:string = "Аппаратный"
// if (effct1>=70){
//     console.log(otdelName + " получает премию 10%")
// }

// function sumNumbers(num1:number = 2,num2:number = 2,num3:number = 3,num4:number = 1){
//     return (num1+num2+num3+num4)
// }
// let sum:number = sumNumbers(10,20)
// console.log(sum + 10 * 2/4)

// function getInfo(age:number, username:string) {
//     console.log(`Вас зовут: ${username} Вам ${age} лет`)
// }

// // const getInfo (age:number, username:string) => {
// //     console.log(`Вас зовут: ${username} Вам ${age} лет`)
// // }
// // getInfo(21,"danila")

// type TGetInfo = (age:number, username:string) => string

// const getInfo1:TGetInfo = (age:number,username:string) => {
//     console.log(`Вас зовут: ${username} Вам ${age} лет`);
//     return "Привет"
// };

// const getEffcet = (project: number, exp: number) => {
//     let effect: number = project/exp;
//     if(effect >= 4) {
//         return "Сотрудник эффективен";
//     } else if (effect >= 3){
//         return "Сотрудник должен улучшить результаты";
//     } else {
//         return "Сотруднику необходимо пройти переквалификацию";
//     }
// // //Можно не использовать else потому что функция завершена до неё
// // };
// // console.log(getEffcet(20,5))

// const getBonus = (sallary:number) => {
//   if(sallary > 400) {
//         let bonus:number = ((sallary / 100) * 10)
//           return `Сотрудник получит премию ${bonus} тенге в размере 10 процентов от оклада ${sallary} ` ;
//     } else if (sallary >= 300) {
//         let bonus:number = ((sallary / 100) * 15)
//         return `Сотрудник получит премию ${bonus} тенге в размере 15 процентов от оклада ${sallary}`;
//     } else {
//         let bonus:number = ((sallary / 100) * 20)
//         return `Сотрудник получит премию ${bonus} тенге  в размере 20 процентов от оклада ${sallary}`
//     };

// };
// console.log(getBonus(250))

// function evaluateEmployeePerformance(experience,project) {
//     let effect = project / experience;

//     if (effect >= 4) {
//         return "Сотрудник эффективен";
//     } else if (effect >= 3) {
//         return "Сотрудник должен улучшить результаты";
//     } else {
//         return "Сотруднику нужно переквалифицироваться";
//     }
// }

// // Пример использования функции
// let employee1 = { experience: 3, project: 15 };
// let employee2 = { experience: 5, project: 20 };

// // Вызов функции для сотрудника 1
// let result1 = evaluateEmployeePerformance(employee1.experience, employee1.project);
// console.log(`Оценка для сотрудника 1: ${result1}`);

// // Вызов функции для сотрудника 2
// let result2 = evaluateEmployeePerformance(employee2.experience, employee2.project);
// console.log(`Оценка для сотрудника 2: ${result2}`);

// enum EColors {
//     Black,
//     Yellow,
//     Green,
// }
// const getColorText = (color:EColors) =>{
//     switch(color){
//         case EColors.Black:
//             return "Черный"
//         case EColors.Yellow:
//             return "Желтый"
//         default:
//             return "Зеленый"
//     }
// }
// console.log(getColorText(EColors.Black));

// let age:number = 10
// switch(age){
//     case 10:
//     break
//     case 11:
//      break
// }

// const getName = (callback:(name:string) => void) =>{
//     let name:string = "Danya"
//     callback(name)
// }
// //type TFucntion = (username:string) => void
// const sayHi = (username:string) => {
//     console.log("Здравствуйте, " + username)
// }

// const sayBye = (username:string) => {
//     console.log("Возвращайтесь поскорее, " + username)
// }
// let test:string = "test"
// test.length

// getName(sayHi)
// getName(sayBye)

// const getString = (callback:(msg:string) => void) => {
//     callback("случайная строка qwerty")
// }
// const getStringLength = (text:string) => {
//     console.log(text.length)
// }
// const checkQwerty =  (text:string) => {
//     console.log(text.includes("qwerty"))
// }
// getString(getStringLength)
// getString(checkQwerty)

// Продуктовый магазин с 3 видами продукции: молочная, мучная и мясная.
// Вывести на какую сумму было продано каждой продукции для каждого
// дня недели (Пон-Воскр). Также вывести общий доход за всю неделю.

// Центр связи предлагает 4 оператора: Beeline, Tele2, Kcell, Active. При
// выборе оператора необходимо выводить стоимость подключения. Если
// пользователь выбирает Kcell, то подключение бесплатное

// социальной сети у пользователя есть время, как давно он в ней
// зарегистрирован (в годах). Вывести что пользователь новичок если он
// зарегистрирован меньше 2-ух лет, если до 4 лет, то “страж”, если больше 4,
// то “магистр”

// const getNumber = (skill:number) => {
//   if (skill >= 4) {
//     console.log("Магистр");
//   } else if (skill < 4 && skill >= 2) {
//     console.log("Cтраж");
//   } else {
//     console.log("новичек");
//   }
// };
// getNumber(40)

// enum mobileOperator {
//   Beeline,
//   Tele2,
//   Active,
//   Kcell
// }
// let operatorSelection = (operator:mobileOperator) => {
//   switch(operator){
//     case mobileOperator.Beeline:
//       return 'Стоимость подключения - 3500 тенге'
//       case mobileOperator.Tele2:
//         return 'Стоимость подключения - 2300 тенге'
//         case mobileOperator.Active:
//           return 'Стоимость подключения - 4000 тенге'
//           case mobileOperator.Kcell:
//             return 'Подключение будет бесплатным'
//             default:
//               return 'Оператор не выбран'
//   }
// }
// let definition:mobileOperator = mobileOperator.Kcell
// console.log(operatorSelection(definition))

// let seasons:string[] = ["summer","autumn","winter","spring"]
// let seasonsAge:number [] = [2019,2020,2021,2022,2023,2024]
// console.log(seasonsAge[3])
// console.log(seasons[2])
// console.log(seasons[3])
// console.log(seasons[1])

// interface IPerson{
//   name:string
//   age:number

// let people:IPerson[] = [
//   {
//     name: 'Grandma Galina',
//     age: 34,
//   },
//   {
//     name: 'Donald Trump',
//     age: 15,
//   },
//   {
//     name: 'Elon Musk',
//     age: 40,
//   },
// ]

// console.log(people[1].age)
// console.log(people[0].name)
// console.log(people[2])

// Каждый сотрудник может создать заявку на отпуск.
// При создании заявки он указывает: дату, отмечает с семьей или в одиночку.
// Также выбирает один из 3-ех пакетов: в городе, по стране или заграницу.

// enum EVacation {
//   in_city = "в городе",
//   country = "по стране ",
//   travel = "за границу",
// }
// type TDays = 7 | 14;
// type TOrder = {
//   name: string;
//   isFamily: boolean;
//   date: string;
//   days: TDays;
//   vacation: EVacation;
// };
// const getFamilyText = (isFamily: boolean) => {
//   return isFamily ? "с семьей" : "в одиночку";
// };

// let order: TOrder = {
//   name: "Николай",
//   isFamily: true,
//   date: "12.05.23",
//   days: 7,
//   vacation: EVacation.travel,
// };

// console.log(`Имя Сотрудника:${order.name}
// Куда отправляется:${getFamilyText(order.isFamily)}
// Дата отъезда:${order.date}
// Место отдыха:${order.vacation}`);

// type TStuff = {
//   category: "Смартфон" | "Ноутбук";
//   price: number;
//   count: number;
// };
// let massive: TStuff[] = [
//   {
//     category: "Смартфон",
//     price: 24000,
//     count: 25,
//   },
//   {
//     category: "Ноутбук",
//     price: 2300,
//     count: 11,
//   },
//   {
//     category: "Смартфон",
//     price: 5000,
//     count: 30,
//   },
//   {
//     category: "Ноутбук",
//     price: 25000,
//     count: 29,
//   },
//   {
//     category: "Смартфон",
//     price: 60000,
//     count: 10,
//   },
// ];
// let smartphone: TStuff[] = massive.filter(
//   (stuff) => stuff.category == "Смартфон"
// );
// let notebook: TStuff[] = massive.filter((stuff) => stuff.category == "Ноутбук");

// notebook.sort((a, b) => {
//   return b.price - a.price;
// });
// smartphone.sort((a, b) => {
//   return b.price - a.price;
// });

// const addStuff = (
//   category: "Смартфон" | "Ноутбук",price: number,count: number) => {
//     if (category == "Смартфон") {
//       smartphone.push({
//         category: category,
//         price: price,
//         count: count,
//       });
//     } else {
//       notebook.push({
//         category: category,
//         price: price,
//         count: count,
//       });
//     }
//   };
//   addStuff("Смартфон", 2300,45)
//   addStuff("Смартфон", 2000,55)
//   addStuff("Ноутбук",5000,22)
//   addStuff("Ноутбук",10000,11)
//   console.log(smartphone);
//   console.log(notebook);
  
  