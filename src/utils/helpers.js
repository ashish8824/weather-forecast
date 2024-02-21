export const degreeToDirection = (d) => {
  let directions = [
    "Northerly",
    "North Easterly",
    "Easterly",
    "South Easterly",
    "Southerly",
    "South Westerly",
    "Westerly",
    "North Westerly",
  ];

  d += 22.5;

  if (d < 0) d = 360 - (Math.abs(d) % 360);
  else d = d % 360;

  let w = parseInt(d / 45);
  return `${directions[w]}`;
};

export const fahrenheitToCelsius = (fahrenheit) => {
  // Convert Fahrenheit to Celsius using the formula: (F - 32) * 5/9
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
};

export function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}
