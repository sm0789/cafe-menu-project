// Sample menu data
const menuItems = [
  {
    name: "Espresso",
    description:
      "A bold, concentrated shot of coffee, perfect for a quick pick-me-up.",
  },
  {
    name: "Latte",
    description:
      "Creamy steamed milk poured over rich espresso, topped with a delicate foam.",
  },
  {
    name: "Americano",
    description: "Espresso diluted with hot water for a milder coffee flavor.",
  },
  {
    name: "Cappuccino",
    description:
      "A classic trio of espresso, steamed milk, and a frothy foam crown.",
  },
  {
    name: "Macchiato",
    description:
      "An espresso topped with a small dollop of frothy steamed milk.",
  },
  {
    name: "Mocha",
    description:
      "A latte mixed with chocolate syrup or cocoa powder, often topped with whipped cream.",
  },
  {
    name: "Flat White",
    description:
      "Similar to a latte but with a higher ratio of coffee to milk, creating a velvety texture.",
  },
  {
    name: "Cortado",
    description:
      "Equal parts espresso and warm milk, offering a strong yet smooth flavor.",
  },
  {
    name: "Iced Coffee",
    description: "Brewed coffee served over ice, refreshing and simple.",
  },
  {
    name: "Cold Brew",
    description:
      "Coffee steeped in cold water for hours, resulting in a smooth, low-acidity flavor.",
  },
  {
    name: "Iced Latte",
    description: "Chilled espresso mixed with milk and served over ice.",
  },
  {
    name: "Frappuccino/Blended Coffee",
    description:
      "A sweet, frozen coffee treat, blended to perfection and topped with whipped cream.",
  },
  {
    name: "Chai Latte",
    description:
      "A spiced tea blended with steamed milk, offering a warm and aromatic flavor.",
  },
  {
    name: "Matcha Latte",
    description:
      "A vibrant green tea powder mixed with steamed milk for an earthy and creamy drink.",
  },
  {
    name: "London Fog",
    description:
      "Earl Grey tea with steamed milk and a touch of vanilla syrup.",
  },
  {
    name: "Herbal Tea",
    description: "Caffeine-free infusions made from herbs, flowers, or fruits.",
  },
  {
    name: "Hot Chocolate",
    description:
      "Steamed milk mixed with chocolate syrup or powder, topped with whipped cream or marshmallows.",
  },
  {
    name: "Pumpkin Spice Latte",
    description:
      "A latte flavored with pumpkin, cinnamon, and nutmeg, perfect for autumn.",
  },
  {
    name: "Peppermint Mocha",
    description:
      "A holiday favorite with chocolate, espresso, and a touch of peppermint.",
  },
  {
    name: "Eggnong Latte",
    description:
      "A festive blend of espresso, steamed milk, and eggnog, available during the holidays.",
  },
  {
    name: "Croissant",
    description: "A buttery, flaky pastry baked to golden perfection.",
  },
  {
    name: "Blueberry Muffin",
    description: "A moist and fluffy muffin bursting with sweet blueberries.",
  },
  {
    name: "Cinnamon Roll",
    description:
      "Swirls of cinnamon and sugar, topped with a creamy icing drizzle.",
  },
  {
    name: "Scone",
    description:
      "A crumbly, tender treat available in classic or fruit-filled varieties.",
  },
  {
    name: "Banana Bread",
    description: "Sweet, moist, and packed with ripe banana flavor.",
  },
  {
    name: "Apple Turnover",
    description:
      "Flaky pastry filled with spiced apples and a hint of sweetness.",
  },
  {
    name: "Breakfast Burrito",
    description:
      "Scrambled eggs, cheese, and your choice of bacon or veggies, wrapped in a warm tortilla.",
  },
  {
    name: "Egg and Cheese Croissant",
    description:
      "Fluffy eggs and melted cheese inside a warm, buttery croissant.",
  },
  {
    name: "Greek Yogurt Parfait",
    description: "Layers of creamy yogurt, granola, and fresh berries.",
  },
  {
    name: "Avocado Toast",
    description:
      "Smashed avocado on toasted artisan bread, topped with olive oil and a sprinkle of chili flakes.",
  },
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
