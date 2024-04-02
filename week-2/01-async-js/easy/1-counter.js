let count = 0;

function incrementCounter() {
  count++;
  console.log(count);
}

setInterval(incrementCounter, 1000);
