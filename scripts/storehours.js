// Checking if store is open or not
const storeHours = {
  0: [9, 17], // Sunday: 9 AM - 5 PM
  1: [7, 19], // Monday: 7 AM - 7 PM
  2: [7, 19], // Tuesday: 7 AM - 7 PM
  3: [7, 19], // Wednesday: 7 AM - 7 PM
  4: [7, 19], // Thursday: 7 AM - 7 PM
  5: [7, 19], // Friday: 7 AM - 7 PM
  6: [8, 20], // Saturday: 8 AM - 8 PM
};

// Get Current Time from the user device
const currentTime = new Date();
const currentDay = currentTime.getDay(); //0 at start for Sunday and 6 for Saturday 1-6 values
//console.log(currentTime);
//console.log(currentTime.getDay());
//console.log(currentTime.getHours());
const currentHour = currentTime.getHours(); //outputs 0-23 depending on the hour on the user's device

// Get Store Hours for Today
const [openHour, closeHour] = storeHours[currentDay];
const storeStatus = document.getElementById("store-status");

// Check if the Store is Open or Closed
if (currentHour >= openHour && currentHour < closeHour) {
  storeStatus.textContent = "STORE IS OPEN!";
  storeStatus.style.backgroundColor = "green";
} else {
  storeStatus.textContent = "STORE IS CLOSED.";
  storeStatus.style.backgroundColor = "red";
}
