const myDiv = document.getElementById('myDiv');
//const myForm = document.getElementById('myForm');
const numInput = document.getElementById('number')
const btn = document.getElementById('myBtn');

btn.onclick = function() {
    checkNumber();
}

// const myobjec = {

//     handleEvent: function() {
//         // checkNumber();
//         //grab the nubmer from the input
//         const number = numInput.value.trim();
//         if (number%2) {
//             myDiv.textContent = "Odd";
//         } else {
//             myDiv.textContent = "Even";
//         }




//     }
// }

// btn.addEventListener('click', checkNumber);

function checkNumber() {
    const numberValue = numInput.value;

    if (numberValue % 2 == 0) {
        myDiv.textContent = "Even";
    } else {
        myDiv.textContent = "Odd";
    }
}


// const myPromise = new Promise((resolve, reject) => {
//     // Simulating an asynchronous operation
//     const success = 0;
//     if (success) {
//       resolve("Operation completed successfully!");
//     } else {
//       reject("Operation failed!");
//     }
//   });
  
//   myPromise
//     .then((successMessage) => {
//       console.log("***Success:", successMessage);
//     })
//     .catch((errorMessage) => {
//         console.log("Error: !!!", errorMessage);
//     });

    