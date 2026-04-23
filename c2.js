// store ages in an array
const ages = [18, 19, 18, 19]

// get total age (function)
function getTotalAge(Array) {
    let totalAge = 0;
    for (let i = 0; i < Array.length; i++) {
        total=total + Array[i]; //add each age
    }
    return total;//send back the results
}

// get average age (function)
function getAverageAge(Array) {
    let totalAge = getTotalAge(Array); //reuse first function
    let averageAge = totalAge / Array.length; //divide by number of ages

    return averageAge; //send back the results
}

// use the functions and print the results
let totalAge = getTotalAge(ages);
let averageAge = getAverageAge(ages);

// display results
console.log("Total age:", totalAge);
console.log("Average age:", averageAge);
