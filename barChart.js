"use strict";
console.log("JavaScript is live!");

window.addEventListener("load", start);

function start() {
  // Sætter interval igang
  console.log(data);

  drawBarChart();
  interval();
}

function interval() {
  setInterval(quePeople, 1000);
}

function quePeople() {
  data.push(Math.floor(Math.random() * 32) + 1);

  data.shift();

  drawBarChart();
}

const diagram = document.getElementById("diagram");
diagram.width = 500; // justerer bredden på canvasen
diagram.height = 400;
const diagramCT = diagram.getContext("2d");
const data = [
  3, 4, 6, 14, 31, 23, 14, 17, 2, 19, 26, 32, 30, 6, 20, 28, 11, 22, 17, 19, 6,
  9, 10, 13, 12, 5, 8, 26, 28, 29, 14, 1, 2, 30, 11, 26, 12, 16, 22, 32,
];

function drawBarChart() {
  //find den højeste værdi i arrayet
  const maxVal = Math.max(...data);

  //opdater størrelsen af søjlediagrammet baseret på den højste værdi.
  diagram.height = (maxVal + 10) * 10;

  // Variabler til størrelse af søjlerne og margin/padding
  const barWidth = diagram.width / data.length;
  const barHight = diagram.height - 30;
  const margin = 10;
  const padding = 5;

  // loop igennem arrayet og tegn hver søjle
  for (let i = 0; i < data.length; i++) {
    const x = i * barWidth + margin + padding;
    const y = diagram.height - data[i] * (barHight / 32) - margin - padding;

    // Tilføj farver og stil til søjlerne
    diagramCT.fillStyle = "#ff0000";
    diagramCT.fillRect(x, y, barWidth - padding * 2, data[i] * (barHight / 32));
  }

  // Tilføj etiketter langs x- og y-aksen.
  diagramCT.fillStyle = "#000";
  diagramCT.fillText("0", margin, diagram.height - margin);
  diagramCT.fillText(maxVal.toString(), margin, margin + 10);
  diagramCT.fillText(
    "Personer i kør",
    diagram.width / 2,
    diagram.height - margin / 2
  );
}
