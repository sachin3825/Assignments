function Counter(start, delay) {
  let countValue = start;

  function count() {
    console.log(countValue);
    countValue++;
    setTimeout(count, delay);
  }
}

Counter(1, 1000);
