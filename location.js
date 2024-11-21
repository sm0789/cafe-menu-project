const locationSearch = document.getElementById("location-search");
locationSearch.addEventListener("keyup", (e) => {
  let currentValue = e.target.value.toLowerCase();
  let locations = document.querySelectorAll("h2.title"); //get all the locations since they are h2 elements and have a class called title
  locations.forEach((location) => {
    if (location.textContent.toLowerCase().includes(currentValue)) {
      //show location card
      location.parentNode.parentNode.style.display = "inline-block";
    } else {
      //otherwise hide location card
      location.parentNode.parentNode.style.display = "none";
    }
  });
});
