let colorButton = document.getElementById("color-button");
let colorWheel = document.getElementById("color-wheel");
let currentColor = document.getElementById("current-color");

const getRgbColor = () => {
  return Math.floor(Math.random() * 256); // Returns an RGB value from (0 - 256)
};

const colorChange = (event) => {
  let randomColor =
    "rgb(" + getRgbColor() + "," + getRgbColor() + "," + getRgbColor() + ")";
  event.target.style.backgroundColor = randomColor;
  currentColor.innerHTML = `Your current color is: ${randomColor}`;
};

/* Color Button */

colorButton.style.backgroundColor = "black";
colorButton.style.color = "white";
colorButton.style.width = "300px";
colorButton.style.height = "100px";
colorButton.style.borderRadius = "15px";
colorButton.style.marginBottom = "25px";

colorButton.addEventListener("click", colorChange);

/* Color Wheel */

colorWheel.style.backgroundColor = "black";
colorWheel.style.color = "white";
colorWheel.style.width = "300px";
colorWheel.style.height = "100px";
colorWheel.style.borderRadius = "15px";
colorWheel.style.marginBottom = "25px";

colorWheel.addEventListener("wheel", colorChange);
