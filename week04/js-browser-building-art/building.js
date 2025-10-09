const building = document.getElementById("building");

const createWindow = () => {
  const wind = document.createElement("div");
  wind.style.width = "50px";
  wind.style.height = "50px";
  wind.style.margin = "25px";
  wind.className = "window";
  wind.style.display = "inline-block"
  building.appendChild(wind);
}

const removeWindow = () => {
  if (building.hasChildNodes) {
    building.removeChild(building.lastChild);
  }
}

const moveBuilding = (distance) => {
  building.style.left = building.offsetLeft + distance + "px";
}

for (let i = 0; i < 9; i++) {
  createWindow();
}

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      createWindow();
      break;
    case "ArrowDown":
      removeWindow();
      break;
    case "ArrowRight":
      moveBuilding(50);
      break;
    case "ArrowLeft":
      moveBuilding(-50);
      break;
    default:
      break;
  }
})

document.addEventListener("click", () =>{
  document.body.toggleAttribute("night");
})