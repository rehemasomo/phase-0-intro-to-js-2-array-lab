// Write your solution here!
// Define the array cats
let cats = ["Milo", "Otis", "Garfield"];

// Define a function to destructively append a cat 
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Define a function to destructively prepend a cat 
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Define a to remove last cat
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Define a function to destructively remove the first cat 
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Define a function to append a cat to the cats array 
function appendCat(name) {
  return [...cats, name];
}

// Define a function to prepend a cat to the cats array without modifying the original array
function prependCat(name) {
  return [name, ...cats];
}

// Define a function to remove the last cat from the cats array without modifying the original array
function removeLastCat() {
  return cats.slice(0, -1);
}

// Define a function to remove the first cat from the cats array without modifying the original array
function removeFirstCat() {
  return cats.slice(1);
}

// Export all the functions
module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat
};
