// Sample menu data
const menuItems = [
  { name: "Espresso", description: "Description here" },
  { name: "Latte", description: "Description here" },
  { name: "Cappuccino", description: "Description here" },
  { name: "Croissant", description: "Description here" },
  {
    name: "Blueberry Muffin",
    description: "Description here",
  },
  { name: "Iced Coffee", description: "Description here" },
];

// Search function
function searchMenu() {
  const query = document.getElementById("menu-search").value.toLowerCase();
  const results = menuItems.filter(
    (item) =>
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
  );

  displayResults(results);
}

// Function to display results
function displayResults(results) {
  const resultsContainer = document.getElementById("menu-results");
  resultsContainer.innerHTML = ""; // Clear previous results

  if (results.length === 0) {
    resultsContainer.innerHTML = "<p>No items match your search.</p>";
    return;
  }

  results.forEach((item) => {
    const itemBox = document.createElement("div");
    itemBox.classList.add("menu-item");
    itemBox.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      `;
    resultsContainer.appendChild(itemBox);
  });
}
