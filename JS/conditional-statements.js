//Control FLow structure
//Conditional Statements

//if statement;
let age = 17;
if (age >= 18) {
    console.log("you are eligible to vote!");
} else {
    console.log("you are not eligible to vote!");
}

//if-else  if-else;
let tmperature = 20;
if(tmperature < 0) {
    console.log("It's freezing!");
} else if (tmperature >=0 && tmperature <= 20) {
    console.log("It's cool outside!");
} else {
    console.log("It's a warm day!")
}


//Conditionals: switch statement 
let day = "Tuesday";
switch (day) {
    case "Monday":
        console.log("it's the start of the week.\n");
    break;
    case "Friday": 
        console.log("it's the end of the week.");
    break;
    default:
        console.log("it's a regular day.");

}