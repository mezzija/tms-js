// задание 1
let  manager,name,currentUser;
name='Вася';
manager=name;
currentUser=manager;
console.log(currentUser);

// задание 2
console.log(`hello ${1}`);
console.log( `hello ${"name"}` );
console.log( `hello ${name}` );

//задание 3
console.log("\n\n"+2);// почему не работает , если поставить 2 без +?
console.log(true+false);//если хоть один есть true , то true
console.log(false+false);//нет true,поэтому false
console.log(6/"3");//js переводить строку в number так как стоит оператор делить
console.log(7/0);// Бесконечность
console.log(4+5+"px");// операции выполняются слева направо
console.log(" "+3+0);// так как стоит бинрый плюс перевело все в строку
console.log(" "-4+0);// а вот тут хз что js делает начинаю скучать по строгой типизации
console.log("!" + 2 + 5);// ну тут перевело все в строку , так как стоит бинарный плюс
console.log("1" - 2);//перевело все в number так как стоит -
console.log("3px" - 2);// от строки нелльзя отнимать числа пишет Nan
console.log("  -9  " + 5);// бинарный плюс если есть хоть одна строка переводит в строку
console.log("  -9  " - 5); //оператор минус работает только с числами
console.log(null+1);// number
console.log(undefined + 1); //NaN

console.log("\n");


//задание 4
console.log(`2>4-${2>4}`);// false
console.log(`undefined == null-${undefined == null} `);// особое правило js
console.log(`undefined === null-${undefined === null}`);// используется строгое равенсто
console.log(`false==0-${false==0}`);// с приведением типов
console.log(`false==" "-${false == ""}`); //с приведением типов
console.log(`false === ""-${false === ""}`);// без приведением типов

console.log("\n");
//задние 5
 let animal={
     type:'dog',
     weight: 40,
 };
animal.color='red';
animal.speed=100;
delete animal.weight;
animal.color='pink';
console.log(animal);