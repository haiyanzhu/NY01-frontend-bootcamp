//Introductin to Arrays

//Creating an array;
let superhero = ['Spiderman','Sailor Moon', 'Scarlet witch', 'Homelander', 'Batman'];

//Accessing array element;
for (let i = 0; i < superhero.length; i++) {
    console.log("Here ", i, ":",  superhero[i]);
}

//modifying array elements;
superhero[3] = 'Iron man';
console.log("Change the value @", 3, " to ",  superhero[3]);

superhero.push('Captain Planet');
superhero.pop();
console.log("The last super man is : ", superhero[superhero.length-1]);


//Array iteration;
for (let hero in superhero) {
    console.log("Iteration super heros:" , hero);
}

superhero.forEach(function(hero) {
    console.log("This hero is",  hero);
})

console.log('Arry length:', superhero.length);
//index of;
console.log('Index of a value: ', superhero.indexOf('Sailor Moon'));
console.log("Includes a value : ", superhero.includes('Scarlet witch'));

//join each elements together;
console.log('Joined array: ', superhero.join(' - '));

//slice [);
let sliceArray = superhero.slice(1,4);
console.log('A slice : ', sliceArray);
console.log('original array :', superhero);

let removeElements = superhero.splice(2, 3);
console.log("after removing : ", removeElements);


//using if-else if-elseif since the condition is not a value but a boolen expression;
let score = parseInt(prompt("Enter the score: "));
if (score >= 90) {
    console.log('A');
} else if (score >= 80) {
    console.log('B');
} else if (score >= 70) {
    console.log('C');
} else if (score >= 60) {
    console.log('D');
} else {
    console.log('F');
}
