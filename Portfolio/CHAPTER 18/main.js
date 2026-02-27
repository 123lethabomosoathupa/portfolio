// Declare global variables to track available money and the number of lunches bought
var money = 30;
var lunches = 0;

// Display initial lunch budget on the webpage
document.getElementById("money").innerHTML = money;

// Add an event listener to the "Place Order" button to trigger the lunch buying process
document.getElementById("placeOrder").addEventListener("click", buyLunches);

/*
 Function to simulate buying sandwiches each day
 Repeats while there is enough money left
*/
function buyLunches() {
    // Reset variables and display area for a new order
    resetForm();

    var day = 0; // Track number of days passed

    // Keep buying sandwiches as long as there's enough money
    while (money > 0) {
        day++; // Increment day count

        // Get today's sandwich price (random value between 0 and 1, inclusive of 1)
        var priceToday = getSandwichPrice();

        // Get the number of sandwiches the user wants to buy
        var numberOfSandwiches = document.getElementById("numSandwiches").value;

        // Calculate the total cost for today's sandwiches
        var totalPrice = priceToday * numberOfSandwiches;

        // If enough money is available, proceed with the purchase
        if (money >= totalPrice) {
            money = money - totalPrice; // Deduct the cost from current money
            lunches++; // Increase the count of lunches bought

            // Display the successful purchase for the day
            document.getElementById("receipt").innerHTML += 
                "<p>On day " + day + ", sandwiches are: $" + priceToday + 
                ". You have $" + money.toFixed(2) + " left broke boy.</p>";

        } else {
            // If not enough money, show a warning message and stop the loop
            document.getElementById("receipt").innerHTML += 
                "<p>Today, sandwiches are: $" + priceToday + 
                ". You don't have enough money broke boy. Maybe one of the mandem will give you some of their sandwich.</p>";
            money = 0; // Set money to 0 to break the loop
        }
    }

    // Display the total number of lunches bought at the end of the loop
    document.getElementById("receipt").innerHTML += 
        "<p>You bought " + lunches + " lunches this week broke boy.</p>";
}

/*
 Function to get a random sandwich price between $0.00 and $1.00
*/
function getSandwichPrice() {
    var sandwichPrice = (Math.random() * (1 - 0) + 1).toFixed(2);
    return sandwichPrice;
}

/*
 Function to reset the game state so a new order can be started
*/
function resetForm() {
    money = 30; // Reset money to initial budget
    lunches = 0; // Reset lunch count
    document.getElementById("receipt").innerHTML = ""; // Clear receipt display
}
