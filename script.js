/*console.log("hello world");

// függvények

helloWorld(); // már azelőtt meghívhatom a függvényt, mielőtt megírtam vollna, ha nem változóként hozom létre, felkúszik a 0. sorba a függvény.

function helloWorld () {
    console.log("hello world from the function");
    helperFunction();
    
    function helperFunction() {
        console.log("i am helping");
    }
    
    const functionVariable = "text";
    console.log(functionVariable);
}
    
    console.log("hello world2");
    
const coolerHelloWorld = function() { // ha változóba mentem a függvényem, akkor később kapja meg a feladatát
    console.log("hello world from the cooler function");
}

coolerHelloWorld();

const coolestHelloWorld = () => {
    console.log("hello world from the coolest function");
}

coolestHelloWorld(); */

function sumOfTwoNumbers(number1, number2) {
    return number1 + number2;
    // number1 + number2;  az érték undefined lesz
}

/*const result = sumOfTwoNumbers(1, 2);
console.log("result: " + result);*/

function multiplyTwoNumbers(number1, number2) {
    return number1 * number2;
}

console.log(sumOfTwoNumbers(20, 2));

const arrowSumOfTwoNumbers = (number1, number2) => number1 + number2; // a nyíl függvénynél nem szükséges a return szó, nem szükséges a kapcsos zárójel se. több műveletnél kell a kapcsos zárójel

console.log(arrowSumOfTwoNumbers(1, 2));

function doSomeMagic (number1, number2, callback) { // a callback elkér egy függvényt és majd valamikor lefuttatja
    return callback(number1, number2);
} 

console.log(doSomeMagic(1, 2, sumOfTwoNumbers));
console.log(doSomeMagic(1, 2, multiplyTwoNumbers));