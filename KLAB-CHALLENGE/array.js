const item = [
    { name: "Bike", price: 100 },
    { name: "TV", price: 200 },
    { name: "Album", price: 10 },
    { name: "Book", price: 5 },
    { name: "Phone", price: 500 },
    { name: "Computer", price: 1000 },
  ];
  
  let prices = [];
  
  item.forEach((Element) => {
    prices.push(Element.price);
  });
  prices.sort((a, b) => a - b);
  
  //   Object of cheapest product
  
  const cheapProduct = item.filter((e) => {
    return e.price === prices[0];
  });
  
  console.log(cheapProduct);
  //   Object of expensive product
  
  const expensiveProduct = item.filter((e) => {
    return e.price === prices[prices.length - 1];
  });
  console.log(expensiveProduct);
  const Remove10 = item.filter((e) => {
    return e.price !== 10;
  });
  
  function total(params) {
    let sum = 0;
    params.forEach((e) => {
      sum += e.price;
    });
    return sum;
  }
  
  //   3 Return the total of all prices of product
  
  let totalOfAllProduct = total(item);
  
  console.log(totalOfAllProduct);
  //   3 Return the total of all prices of product except price ten
  
  let totalOfPriceOfProductNotTen = total(Remove10);
  
  console.log(totalOfPriceOfProductNotTen);