const form = document.querySelector("#fuel-form");

const emptyStrIsUndefined = (str) => str === "" ? undefined : str;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const distance = parseFloat(emptyStrIsUndefined(form.querySelector("#distance").value));
  const efficiency = parseFloat(emptyStrIsUndefined(form.querySelector("#efficiency").value));
  const price = parseFloat(emptyStrIsUndefined(form.querySelector("#price").value));

  if ([distance, efficiency, price].some((value) => isNaN(value) || value === undefined)) {
    alert("Invalid input data!");
  }

  const liters = distance / efficiency;
  const cost = liters * price;
  const result = document.querySelector("#result");
  result.textContent = `The cost of the trip will be ${cost.toFixed(2)} RON.`;
});