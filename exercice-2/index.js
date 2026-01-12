let ingredients = document.getElementsByTagName("ol");
let items = document.createElement("li");
ingredients[0].insertBefore(items, ingredients[0].firstChild);
items.textContent = "Prechauffer le four";