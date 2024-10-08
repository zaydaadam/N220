/*Create a variable to track the list of todo items
Create the addItem function that:
*Gets the input from "item"
Adds it to the list of todo items
Updates the "list" ul tag to show all the items currently in the list
- Each item should be shown added as a li tag in the string ("<li>" + item + "</li>" or `<li>${item}</li>`)*/
var todoItems = [];
function addItem() {
  var item = document.getElementById("item").value;

  if (item) {
    todoItems.push(item);

    var list = document.getElementById("list");
    list.innerHTML = "";

    todoItems.forEach(function (todoItem) {
      var li = document.createElement("li");
      li.textContent = todoItem;
      list.appendChild(li);
    });

    document.getElementById("item").value = "";
  }
}
/*Create the summarizeList function that outputs the following to the summary p tag - these lines should be split with br tags ("<br />")
*/
function summarizeList() {
  var summary = document.getElementById("summary");

  if (todoItems.length > 0) {
    var totalItems = todoItems.length;
    var firstItem = todoItems[0];
    var lastItem = todoItems[todoItems.length - 1];

    summary.innerHTML =
      "Total Items: " + totalItems + "<br />" +
      "First Item: " + firstItem + "<br />" +
      "Last Item: " + lastItem;
  } 
  
  else {
    summary.innerHTML = "No items in the list.";
  }
}
