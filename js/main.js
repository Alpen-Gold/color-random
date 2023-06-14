let ranColor = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let btnColor = () => {
  let textColor = document.getElementById("textColor");

  let color = "#";

  for (let i = 1; i <= 6; i++) {
    color += ranColor[randomGenerate()];
  }

  textColor.innerHTML = color;
  textColor.style.color = color;

  document.body.style.backgroundColor = color;
};

let randomGenerate = () => {
  return Math.floor(Math.random() * ranColor.length);
};
