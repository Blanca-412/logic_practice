// E1. User profile
//Solution
// Prompt user for their data
let name = prompt("Enter your username:");
let userAge = prompt("Enter your age:");
let movies = [];
for (let i = 0; i < 3; i++) {
    let movieName = prompt("Enter one of your favorite movies:");
    movies.push(movieName);
}
console.log(`Name: ${name}`);
console.log(`Age: ${userAge}`);
for (let i = 0; i < movies.length; i++) {
    console.log(`The film ${movies[i]} is one of my favorites`);
}


//E2. Highest number
//Solution
let maxNumber = -Infinity;
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt("Enter a number:"));
    if (num > maxNumber) {
        maxNumber = num;
    }
}
console.log("The highest number is:", maxNumber);


//E3. Alarm
//Solution
let delay = parseInt(prompt("Enter the number of seconds until the alarm:"));
let alertMessage = prompt("Enter the alarm message:");
setTimeout(() => {
    console.log(alertMessage);
}, delay * 1000);
console.log(`Waiting ${delay} seconds...`);

//E4. Palindrome
//Solution
function checkPalindrome(text) {
    text = text.toLowerCase().replace(/[\W_]/g, '');
    let reversedText = text.split('').reverse().join('');
    return text === reversedText;
}
let inputText = prompt("Enter a word or sentence:");
if (checkPalindrome(inputText)) {
    console.log(`${inputText} is a palindrome.`);
} else {
    console.log(`${inputText} is not a palindrome.`);
}

//E5. Factorial
//Solution
function calcFactorial(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * calcFactorial(n - 1);
    }
}
let number = parseInt(prompt("Enter a number to calculate its factorial:"));
console.log(`The factorial of ${number} is:`, calcFactorial(number));

//E6. Flat array
//Solution
let nestedArray = [1, [2, 3, [4, 5, [6]]]];
function flatten(arr) {
    let result = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item));
        } else {
            result.push(item);
        }
    });
    return result;
}
console.log(flatten(nestedArray));


