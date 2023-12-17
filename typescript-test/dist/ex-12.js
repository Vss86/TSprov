function getPrice(price) {
  if (typeof price === 'number') {
    return price;
  } else if (typeof price === 'object' && 'price' in price) {
    return price.price;
  } else {
    return undefined;
  }
}

// Testa funktionen
console.log(getPrice(100)); // Ska skriva ut 100
console.log(getPrice({ price: 100 })); // Ska skriva ut 100
