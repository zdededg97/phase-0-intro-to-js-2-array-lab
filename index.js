const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
  }
  function destructivelyPrependCat(name) {
    cats.unshift(name);
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
 function removeLastCat() {return cats,slice(0,-1); }        
 function removeLastCat() {
    // create a new array that contains all but the last element of the cats array
    const newCats = cats.slice(0, cats.length - 1);
    // return the new array
    return newCats;
  }
  function removeFirstCat() {
    // Return an empty array if the cats array is empty
    if (cats.length === 0) {
      return [];
    }
  
    // Create a new array without the first element
    const newCats = cats.slice(1);
  
    // Return the new array
    return newCats;
  }
   