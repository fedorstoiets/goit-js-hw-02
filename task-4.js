function getShippingCost(country) {
  switch (country) {
    case "China":
      return `Доставка до ${country} коштуватиме 100 кредитів`;
    case "Chile":
      return `Доставка до ${country} коштуватиме 250 кредитів`;
    case "Australia":
      return `Доставка до ${country} коштуватиме 170 кредитів`;
    case "Jamaica":
      return `Доставка до ${country} коштуватиме 120 кредитів`;
    default:
      return "На жаль, доставка до вашої країни не здійснюється";
  }
}

console.log(getShippingCost("Australia")); // "Доставка до Australia коштуватиме 170 кредитів"
console.log(getShippingCost("Germany")); // "На жаль, доставка до вашої країни не здійснюється"
console.log(getShippingCost("China")); // "Доставка до China коштуватиме 100 кредитів"
console.log(getShippingCost("Chile")); // "Доставка до Chile коштуватиме 250 кредитів"
console.log(getShippingCost("Jamaica")); // "Доставка до Jamaica коштуватиме 120 кредитів"
console.log(getShippingCost("Sweden")); // "На жаль, доставка до вашої країни не здійснюється"
