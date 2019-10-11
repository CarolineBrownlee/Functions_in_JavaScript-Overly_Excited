// The learning objective of this exercise is to use the JavaScript if statement inside a loop to do one operation when a certain conditions is true, and a different operation if that condition is false.

// Add logic to addExcitement that places an exclamation point (!) after every third word. Read the following English statement and write the equivalent in JavaSript code to make it work.

// If the current value of the counter variable can be evenly divided by 3 (using the JavaScript remainder operator) add a single exclamation point (!) to the current word in the array.

// ***** BEGIN STACKING WORDS ***** //

// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// function addExcitement (theWordArray) {
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {
//         buildMeUp += theWordArray[i] + " ";
//         console.log(buildMeUp) 
//         }
//         //    Print buildMeUp to the console  
//     }

// addExcitement(sentence)

// ***** BEGIN SOME WORDS ARE MORE EXCITING THAN OTHERS *****//

// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// function addExcitement (theWordArray) {
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {
//         if ((i + 1) % 3 === 0) {
//             buildMeUp += ` ${theWordArray[i]}!`
//         } else {
//             buildMeUp += ` ${theWordArray[i]}`
//         }
//         //    Print buildMeUp to the console  
//         console.log(buildMeUp) 
//     }
// }

// addExcitement(sentence)

// ***** BEGIN FUNCTION ARGUMENTS ***** //

// The learning objective of this exercise is to practice defining and using function arguments.

// Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray, punctuation) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        if ((i + 1) % 3 === 0) {
            buildMeUp += ` ${theWordArray[i]} ${punctuation}`
        } else {
            buildMeUp += ` ${theWordArray[i]}`
        }
        //    Print buildMeUp to the console  
        console.log(buildMeUp) 
    }
}

// I want to use a question mark
addExcitement(sentence, "?")


