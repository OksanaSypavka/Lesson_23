/*console.log('35' + - "22");
console.log('35' * "22");
let userCounter = 0;
let newUsers = userCounter++;
console.log(newUsers);
console.log(!false && 11 || 18 && !"");
let one = 0;
console.log(one ?? "Без імені");

//Вітвлення

//Задача №1 
for (let num = 0; num < 5; num++){
   console.log(num);
}

//Задача №2
let num = 8;
while (num){
   console.log(num);
   num--;
}

//Задача №3 
let num = 0;
while (num < 3){
   console.log(`Число: ${num}`);
   num++;
}


//Задача №4 Зупинити роботу циклу 1 коли size рівна 1
firstFor: 
for(let num = 0; num <2; num++){
   for (let size = 0; size < 3; size++){
      if(size==1){
         break firstFor;
      }
      console.log(size);
}
}


//Числа
//Задача №1 Зробити коректне округлення
let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
console.log(numOne);


//Задача №2 Отримати число 135.58 з рядка
let value = "135.58px";
console.log(parseFloat(value));


//Задача №3 Зробити правильну умову
let value = 58 + "Фрілансер";
if (value !== NaN) {
   console.log("Результат виразу NaN");
}


//Задача №4 Знайти максимальне число з 10, 58,39,-150, 0
console.log(Math.max(10, 58, 39,-150, 0));

//Задача №5 Округлити число 58,858 до числа 58
let numOne = 5.858;
console.log(Math.round(numOne));




//Рядки
//Задача №2 Отримати символ "н"
let text = 'фрілансер';
let firstSymbol = text[5];
console.log(firstSymbol);


//Задача №4 Отримати строки в верхньому регістрі
let text = "фрілансер";
console.log(text.toUpperCase());
*/
//Задача №5 Отримати підрядок "лан" з:
let text = "фрілансер";
console.log(text.indexOf('лан'));