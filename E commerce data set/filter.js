function filter(data) {
  let count = 'powerSupplies';
  const updatedGenerateuse = data.map((item) => {
    for (let key in item) {
      item['category'] = count;
    }
    return item;
  });

  return updatedGenerateuse;
}

console.log(filter(data));
