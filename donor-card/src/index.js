// loading these functions as the page loads
document.addEventListener("DOMContentLoaded", () => {
  fetchDonors();
  renderBar();
})

// fetching donor info from JSON file
function fetchDonors(){
  fetch("http://localhost:3000/donors")
  .then(response => response.json())
  .then(donorArray => {
    console.log(donorArray)
    donorArray.forEach(donorObj => {
      renderDonors(donorObj)
    })})
  }

// rendering donation bar on load
function renderBar(){
  let card = document.querySelector("#card-front");

  let donorMeter = document.createElement("div");
  donorMeter.classList.add("meter")
  donorMeter.innerHTML = "<span style='width: 85%'></span>";

  card.append(donorMeter)

  let cardContainer = document.querySelector("#container-front")
  cardContainer.appendChild(donorMeter)
}

function renderDonors(donorObj){
  let card = document.querySelector("#card-back");
  let donorList = document.createElement("ol");
  let donorName = document.createElement("li")
  donorName.innerText = `${donorObj.name}`
  card.append(donorName)
  let cardContainer = document.querySelector("#container-back")
  cardContainer.appendChild(donorList)
}

function flipCard() {
  var x = document.getElementById("card-front");
  var y = document.getElementById("card-back");
  y.style.display = "none";

  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    y.style.display = "block";
    x.style.display = "none";
  }
}



