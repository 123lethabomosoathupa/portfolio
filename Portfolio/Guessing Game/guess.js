// Generate a random secret number between 1 and 20
var secret = Math.floor(Math.random() * 20) + 1;

// Ask the user for their first guess and convert it to a number
var guess = parseInt(prompt("Please guess the secret number (1-20)"));

// Keep asking until the correct number is guessed
while (guess !== secret) {
    if (guess < secret) {
        alert("Wrong — too low");
    } else if (guess > secret) {
        alert("Wrong — too high");
    } else {
        // This else block is technically not needed since guess === secret breaks the loop
        alert("Wrong guess");
    }

    // Ask the user to try again
    guess = parseInt(prompt("Try Again! Guess the secret number (1-20)"));
}

// User guessed correctly
alert("Correct Guess!" + secret);
