const initialPriceInput = document.querySelector("#initial-price");

const quantityInput = document.querySelector("#qt");

const currentPriceInput = document.querySelector("#current-price");

const form = document.querySelector("form");

const body = document.querySelector("body");

const output = document.querySelector(".output");

function profitOrLoss(costPrice, sellingPrice) {
  if (sellingPrice >= costPrice) {
    // calculate Profit
    let profit = sellingPrice - costPrice;
    let profitPercentage = ((profit / costPrice) * 100).toFixed(2);

    if (profit == 0) {
      return "no pain no gain";
    }

    return [
      `Hey! You gained a profit of Rs. ${profit} and profit percentage is ${profitPercentage}`,
      true,
    ];
  } else {
    // calculate loss
    let loss = costPrice - sellingPrice;
    let lossPercentage = ((loss / costPrice) * 100).toFixed(2);

    return [
      `Hey! Sadly, you are in loss of Rs. ${loss} and loss percentage is ${lossPercentage}`,
      false,
    ];
  }
}

function flush(message, isProfit) {
  if (isProfit) {
    body.style.backgroundColor = "#1ec41e";
  } else {
    body.style.backgroundColor = "#ff5353";
  }

  output.setAttribute("class", "result");
  output.innerHTML = message;
}

function calculateProfitLoss(e) {
  e.preventDefault();

  let initialPrice = initialPriceInput.value;
  let quantity = quantityInput.value;
  let currentPrice = currentPriceInput.value;

  let costPrice = initialPrice * quantity;
  let sellingPrice = currentPrice * quantity;

  let [message, isProfit] = profitOrLoss(costPrice, sellingPrice);

  flush(message, isProfit);
}

form.addEventListener("submit", calculateProfitLoss);
