const counter = document.getElementById("counter");
counter.innerText = "0";

const incr = document.getElementById("increment");
incr.addEventListener("click", () => {
  const newCount = parseInt(counter.innerText) + 1;
  if (newCount > 10) {
    alert("Error: can't go past 10");
  } else {
    counter.innerText = newCount;
  }
});

document.getElementById("decrement").addEventListener("click", () => {
  const newCount = parseInt(counter.innerText) - 1;
  if (newCount < 0) {
    alert("Error: can't go past 0");
  } else {
    counter.innerText = newCount;
  }
})