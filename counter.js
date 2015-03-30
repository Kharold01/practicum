var stock = "1 lemon, 2 cabbages, and 102 eggs";
var stock2 = "1 lemon, 2 cabbages, and 100 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
  else if (amount > 100) // more than 100 left
    amount = "zillions of";
  else if (amount == 0)
    amount = "no";
  return amount + " " + unit;
}
print(stock.replace(/(\d+) (\w+)/g, minusOne));
print(stock2.replace(/(\d+) (\w+)/g, minusOne));
