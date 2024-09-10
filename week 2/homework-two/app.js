// Dating Section: Calculate Larry's total ticket cost
var tickets = 3;
var costPerTicket = 14;
var totalCost = tickets * costPerTicket;
document.getElementById("ticketNum").textContent = "Tickets: " + tickets;
document.getElementById("totalCost").textContent = totalCost.toFixed(2);

// Shopping Section: Calculate remaining balance and if a jacket can be purchased
var bankBalance = 235.87;
var shirt = 35;
var pants = 75;
var shoes = 60;
var totalPurchase = shirt + pants + shoes;
var remainingBalance = bankBalance - totalPurchase;
document.getElementById("bank").textContent = "Remaining Balance: $" + remainingBalance.toFixed(2);

var jacket = 70;
var canAddJacket = remainingBalance >= jacket;
document.getElementById("addJacket").textContent = "Can Add Jacket: " + canAddJacket;

// Pizza Section: Calculate how many students can be fed and leftover slices
var pizzas = 4;
var slicesPerPizza = 8;
var totalSlices = pizzas * slicesPerPizza;
var slicesPerStudent = 2.5;
var studentsFed = Math.floor(totalSlices / slicesPerStudent);
var leftoverSlices = totalSlices % slicesPerStudent;
document.getElementById("profPizza").textContent = "Students Fed: " + studentsFed + ", Leftover Slices: " + leftoverSlices.toFixed(1);

// Monty's Mega Bar Section: Calculate total meal cost
var adultBuffet = 12;
var childBuffet = 6;
var drink = 1.5;
var totalMealCost = 2 * adultBuffet + childBuffet + 3 * drink;
document.getElementById("Monty").textContent = "Total: $" + totalMealCost.toFixed(2);

// Average Tips Section: Calculate average tips over 4 weeks
var week1 = 202.45;
var week2 = 134.97;
var week3 = 256.63;
var week4 = 178.22;
var totalTips = week1 + week2 + week3 + week4;
var averageTips = totalTips / 4;
document.getElementById("tips").textContent = "Average Weekly Tips: $" + averageTips.toFixed(2);
