const add = (value1, value2) => value1 + value2;

const fuelRequired = (mass) => {
  const fuel = Math.floor(mass / 3) - 2;

  if (fuel <= 0) return 0;

  return fuel + fuelRequired(fuel);
};

const fuelCounterUpper = () => {
  const inputs = Deno.readTextFileSync('./inputs.txt');
  const masses = inputs.split('\n');

  return masses.map(fuelRequired).reduce(add, 0);
};

console.log(fuelCounterUpper());
// console.log(fuelRequired(1969));