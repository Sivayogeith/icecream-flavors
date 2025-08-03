const icecreamFlavors = [
  "belgian chocolate",
  "dark chocolate",
  "black current",
  "mango",
  "butterscotch",
  "coconut",
  "strawberry",
  "oreo",
  "vanilla",
  "pistachio",
];
const descriptions = ["the best"];
window.onload = () => {
  if (location.pathname.includes("rankings")) {
    const list = document.getElementById("list");
    console.log(list);

    icecreamFlavors.forEach((flavor, i) => {
      let flavorEl = document.createElement("li");
      switch (i) {
        case 0:
            flavorEl.classList.add("first")
            break;
        case 1:
            flavorEl.classList.add("second")
            break;
        case 2:
            flavorEl.classList.add("third")
            break;
      
        default:
            break;
      }
      flavorEl.innerHTML =
        flavorEl.innerHTML +
        flavor +
        (descriptions[i] ? " - " + descriptions[i] : "");
      list.appendChild(flavorEl);
    });
  }
};

const getRandom = () => {
  const random = Math.floor(Math.random() * icecreamFlavors.length);
  if (window.flavor == icecreamFlavors[random]) {
    getRandom();
  } else {
    window.flavor = icecreamFlavors[random];
    document.getElementById("flavor").innerText =
      "you got " + icecreamFlavors[random] + "!";
  }
};

window.addEventListener("mousemove", (event) => {
  document.body.style.setProperty("--x", event.pageX + "px");
  document.body.style.setProperty("--y", event.pageY + "px");
});
