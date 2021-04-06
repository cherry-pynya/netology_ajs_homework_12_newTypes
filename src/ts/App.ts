import Cart from './Cart';
import Film from './Film';
const cart = new Cart();
console.log(cart);
const avengers = new Film(
  1,
  'mstiteli',
  300,
  'avengers',
  1812,
  'USA',
  ['action', 'syperhero'],
  'url',
  true,
  '04:20',
  'blablabla'
);
console.log(avengers);
cart.add(avengers);
console.log(cart);
const array = cart.items;
console.log(array);
