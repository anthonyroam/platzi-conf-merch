const sumTotal = (array) => {
  const reducer = (acumulator, currentValue) => acumulator + currentValue.price;
  const sum = array.reduce(reducer, 0);
  return sum;
};

export default sumTotal;
