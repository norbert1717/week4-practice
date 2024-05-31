console.log("loaded");

const rootElement = document.querySelector("div");
console.log(rootElement);

const logClicked = () => console.log("clicked");

rootElement.addEventListener("click", logClicked); // a logClicked meghívásánál az addEventListener függvénynél nem kell a zárójel, különben nem működik

console.log("script end");