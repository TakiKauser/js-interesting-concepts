function msg(name, greetHandler) {
    // console.log(name);
    // console.log(greetHandler);
    greetHandler(name);
}
const names = ["ali", "taki"];
// msg(names);
const object = { name: "ali", age: 39 };
// msg(object);

function greetMorning(name) {
    console.log("Good Morning!", name);
}
function greetAfterNoon(name) {
    console.log("Good Afternoon!", name);
}
function greetEvening(name) {
    console.log("Good Evening!", name);
}
msg("ali", greetMorning);
msg("taki", greetAfterNoon);
msg("kauser", greetEvening);

