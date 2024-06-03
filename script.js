const data = ["one", "two", "three", "four", "five", "six", "seven"];

/*data.forEach((element, index, array) => {
    console.log(`The ${index}. element of the "${array}" array is: ${element}`)
})*/

data.forEach(element => console.log(element)); // for loop, átadja minden egyes értékét az arraynek
const newData = [];
const result = data.forEach(element => newData.push(`new${element}`)); // új tömb jön létre
console.log(newData);

//forEach függvénynek nincs return value-ja

const result1 = data.map(element => `new${element}`); // mindig visszatér egy ugyanannyi elemből álló fügvénnyel, mint amivel indultunk
console.log(result1);

const result2 = data.filter((element) => element.length > 3) // kiszűri az elemeket, amik teljesülnek T-visszaadja az adott elemet, F-nem adja vissza
console.log(result2);

const result3 = data.reduce((prev, curr) => prev + curr, "jeghidegmitiszol"); // az eddigi elemekből készített egy db értéket
/*  1.prev : "jeghidegmitiszol"
curr: "one"
cb: prev + curr -> "jeghidegmitiszol" + "one" -> "jeghitegmitiszolone"

2. prev: "jeghidegmitiszolone"
curr: "two"
... */

console.log(result3);
const result4 = data.reduce((prev, curr) => prev + curr);
/*
1. prev: "one"
curr: "two"
cb: prev + curr -> "one" + "two" -> "onetwo"
2. prev: "onetwo"
...*/

console.log(result4); 

const result5 = data.find(element => element.length > 3); // az első megtalált olyan elemet adja vissza, ahol előfordul
console.log(result5)