let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
  cats.push(Ralph);
}

function destructivelyPrependCat(Bob) {
  cats.unshift(Bob);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  return [...cats, name];
}

function prependCat(name) {
  return [name, ...cats];
}

function removeLastCat() {
  return cats.slice(0, -1);
}

function removeFirstCat() {
  return cats.slice(1);
}
