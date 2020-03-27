// loading these functions as the page loads
document.addEventListener("DOMContentLoaded", () => {
  fetchPayments();
})

// fetching donor info from JSON file & building table on back of card
function fetchPayments(){
  fetch("http://localhost:3000/payments")
  .then(response => response.json())
  .then(paymentArray => {
    renderFigures(paymentArray);
    let tbl = document.getElementById("payments");
    let tblBody = document.createElement("tbody");
    console.log(paymentArray)
    paymentArray.forEach(payment => {
      let row = tbl.insertRow();
      let cell1 = row.insertCell();
      let text1= cell1.appendChild(document.createTextNode(payment.date));
      let cell2 = row.insertCell();
      let text2= cell2.appendChild(document.createTextNode("$" + payment.amount));
      // let cell3 = row.insertCell();
      // let text3= cell3.appendChild(document.createTextNode(payment.notes));
      tblBody.appendChild(row);
    });

    tbl.appendChild(tblBody);

      }
    )}

// rendering donation bar on load
function renderBar(total){
  let decpercent = total / 6750
  let percent = decpercent * 100
  console.log(percent)
  let card = document.querySelector("#card-front");

  let donorMeter = document.querySelector("#donormeter");
  donorMeter.classList.add("meter")
  donorMeter.innerHTML = `<span style='width: ${percent}%'></span>`;

  card.append(donorMeter)

  let cardContainer = document.querySelector("#container-front")
  cardContainer.appendChild(donorMeter)
}

// function to flip card on click
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

// adding misc. figures, totals and numbers to card
function renderFigures(paymentArray) {
  // adding total to back of card
  let total = paymentArray.reduce((total, obj) => obj.amount + total,0)
  let roundedtotal = Math.round(total)
  let moneytotal = Number(roundedtotal).toLocaleString('en');
  renderBar(total);
  console.log(total)
  let backtotals = document.querySelector("#backtotal");
  let backtotal = document.createElement("h4");
  backtotal.innerHTML = "$" + total + " repaid to date"
  backtotals.appendChild(backtotal)

  // adding figures to front of card near meter
  let decpercent = total / 6750
  let percent = decpercent * 100
  let donationpercent = document.querySelector(".donationpercent");
  let donationpercenttext = donationpercent.innerHTML = Math.round(`${percent}`) + "%"

  let numofdonors = document.querySelector(".numofdonors");
  let numofdonorstext = numofdonors.innerHTML = `${paymentArray.length}` + " Payments"

  var status = document.createElement('p');
  status.innerHTML = "In Repayment"
  status.classList.add("status")

  var totaldonations = document.createElement('p');
  totaldonations.innerHTML = `<b>$${moneytotal}</b>` + " Repaid"
  totaldonations.classList.add("totaldonations")

  var donorMeter = document.querySelector('#donormeter');
  donorMeter.after(status, totaldonations);
}



