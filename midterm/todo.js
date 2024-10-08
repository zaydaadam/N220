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
