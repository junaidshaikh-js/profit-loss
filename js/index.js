const initialPriceInput = document.querySelector("#initial-price");

const quantityInput = document.querySelector("#qt");

const currentPriceInput = document.querySelector("#current-price");

const form = document.querySelector("form");

function profitOrLoss(costPrice, sellingPrice) {
  if (sellingPrice >= costPrice) {
    // calculate Profit
    let profit = sellingPrice - costPrice;
    let profitPercentage = ((profit / costPrice) * 100).toFixed(2);

    if (profit == 0) {
      return "no pain no gain";
    }

    return `Hey! You gained a profit of Rs. ${profit} and profit percentage is ${profitPercentage}`;
  } else {
    // calculate loss
    let loss = costPrice - sellingPrice;
    let lossPercentage = ((loss / costPrice) * 100).toFixed(2);

    return `Hey! Sadly, you are in loss of Rs. ${loss} and loss percentage is ${lossPercentage}`;
  }
}

function flush(output) {
  let para = document.createElement("p");

  para.innerHTML = output;

  para.setAttribute("class", "result");

  form.after(para);

  setTimeout(() => {
    para.remove();
  }, 5000);
}

function calculateProfitLoss(e) {
  e.preventDefault();

  let initialPrice = initialPriceInput.value;
  let quantity = quantityInput.value;
  let currentPrice = currentPriceInput.value;

  let costPrice = initialPrice * quantity;
  let sellingPrice = currentPrice * quantity;

  let output = profitOrLoss(costPrice, sellingPrice);

  flush(output);
}

form.addEventListener("submit", calculateProfitLoss);
