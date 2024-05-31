console.log("hello world");

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
