function evenUnder50() {
  let result = [];
  for (let i = 2; i <= 50; i += 2) {
    result.push(i);
  }
  return result;
}

console.log(evenUnder50());
