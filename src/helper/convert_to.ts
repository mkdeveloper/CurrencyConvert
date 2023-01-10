import exchangeRates from "./exchangeRates.js";

function convert(param: string): number {
  let rate = 0;
  switch (param) {
    case "USD":
      rate = exchangeRates.USD;
      break;
    case "PKR":
      rate = exchangeRates.PKR;
      break;
    case "GBP":
      rate = exchangeRates.GBP;
      break;
    case "AED":
      rate = exchangeRates.AED;
      break;
    case "EUR":
      rate = exchangeRates.EUR;
      break;
  }

  return rate;
}

export default convert;
