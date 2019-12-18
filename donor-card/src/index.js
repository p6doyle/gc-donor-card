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
    renderFigures(donorArray);
    let tbl = document.getElementById("donors");
    let tblBody = document.createElement("tbody");
    donorArray.forEach(donor => {
      let row = tbl.insertRow();
      let cell1 = row.insertCell();
      let text1= cell1.appendChild(document.createTextNode(donor.name));
      let cell2 = row.insertCell();
      let text2= cell2.appendChild(document.createTextNode(donor.amount));
      let cell3 = row.insertCell();
      let text3= cell3.appendChild(document.createTextNode(donor.type));
      tblBody.appendChild(row);
    });

    tbl.appendChild(tblBody);

      }
    )}


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

function renderFigures(donorArray) {
  let total = donorArray.reduce((total, obj) => obj.amount + total,0)
  console.log(total)
  let backtotals = document.querySelector("#backtotal");
  let backtotal = document.createElement("h2");
  backtotal.innerHTML = "$" + total
  backtotals.appendChild(backtotal)


}



