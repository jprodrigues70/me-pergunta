export const randomizeArray = (array, n, last = null, key = 3, pass = 0) => {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  if (n === 1 && last !== null && key) {
    if (array.length >= 2 && array[0].id === last) {
      if (
        (key === 1 && pass % 2 === 0) ||
        (key === 2 && pass % 2 > 0) ||
        key === 3
      ) {
        return array.slice(1, 2);
      }
    }
  }

  return array.slice(0, n);
};
