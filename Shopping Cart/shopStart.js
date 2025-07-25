var nums = [1, 2, 3, 4, 5];
var items = ["Heineken", "Carling Black Label", "Savannah Dry", "Castle Lager", "Ice tropez"];
var prices = [17.5, 19.5, 18.5, 17.5, 30.5];
var quantities = [0, 0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0, 0.0];
var totalOrderAmt = 0;

function add_selection(x) {
    console.log(x);
    quantities[x] = quantities[x] + 1;
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt += prices[x];

    display_all();
}

function remove_selection(x) {
    if (quantities[x] > 0) {
        quantities[x]-= 1;
        totals[x] = prices[x] * quantities[x];
        totalOrderAmt -= prices[x];
        display_all()
    }
}

function display_all() {
    var myTable = "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Remove</th>";

    for (i = 0; i < items.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i] + "</td><";
        myTable += "<td style='width: 100px; text-align: right;'>" + prices[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + totals[i] + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td><button onclick='remove_selection(" + i + ")'>Remove</button></td>";
    }

    myTable += "</table>";
    myTable += "<br/><br/><p>Total: " + totalOrderAmt.toFixed(2) + "</p>";


    document.getElementById("demo").innerHTML = myTable;


}

function checkout() {
    document.getElementById("total").innerHTML = "Total Amount is: R" + totalOrderAmt.toFixed(2) + ". Pay Up"
        myTable += "<br/><br/><p>Total: " + totalOrderAmt.toFixed(2) + "</p>";
}
window.onload = function() {
    display_all();
}