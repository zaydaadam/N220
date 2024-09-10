// Dating
var ticketCost = 14.00;
var numTickets = 3; // Larry + 2 friends
var totalCost = ticketCost * numTickets;

document.getElementById("ticketNum").textContent = "Tickets: " + numTickets; 

document.getElementById("ticketCost").textContent = "Cost: $" + ticketCost.toFixed(2); 

document.getElementById("ttCost").textContent = "Total: $" + totalCost.toFixed(2); 


// Shopping
var bankBalance = 235.87;
var shirt = 35;
var pants = 75;
var shoes = 60;
var outfitCost = shirt + pants + shoes;
var remainingBalance = bankBalance - outfitCost;
document.getElementById("bank").textContent = "Remaining Balance: $" + remainingBalance.toFixed(2);

//if a jacket can be added
var jacketCost = 70;
var canAddJacket = remainingBalance >= jacketCost;
document.getElementById("addJacket").textContent = "Can I afford a jacket? " + canAddJacket;

// Pizza
var pizzas = 4;
var slicesPerPizza = 8;
var totalSlices = pizzas * slicesPerPizza;
var slicesPerStudent = 2.5;
var studentsFed = Math.floor(totalSlices / slicesPerStudent);
var leftoverSlices = totalSlices % slicesPerStudent;
document.getElementById("profPizza").textContent = "Students fed: " + studentsFed + ", Leftover slices: " + leftoverSlices.toFixed(2);

// Monty's Mega Bar
var adultBuffetPrice = 12.00;
var childBuffetPrice = 6.00;
var drinkPrice = 1.50;
var totalMealCost = (2 * adultBuffetPrice) + (1 * childBuffetPrice) + (3 * drinkPrice);
document.getElementById("Monty").textContent = "Total meal cost: $" + totalMealCost.toFixed(2);

// Tips
var week1Tips = 202.45;
var week2Tips = 134.97;
var week3Tips = 256.63;
var week4Tips = 178.22;
var totalTips = week1Tips + week2Tips + week3Tips + week4Tips;
var averageTips = totalTips / 4;
document.getElementById("tips").textContent = "Average weekly tips: $" + averageTips.toFixed(2);
