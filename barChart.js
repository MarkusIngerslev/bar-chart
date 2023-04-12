"use strict";
console.log("JavaScript is live!");

window.addEventListener("load", start);

function start() {
  // Sætter interval igang
  console.log(data);

  drawBarChart(); // Tegn diagrammet første gang ved start.
  interval();
}

function interval() {
  setInterval(quePeople, 1000);
}

function quePeople() {
  // fjern den første værdi og tilføj en tilfældig værdi mellem 1-32
  data.shift();
  data.push(Math.floor(Math.random() * 32) + 1);

  drawBarChart();
}

const diagram = document.getElementById("diagram");
diagram.width = 900; // justerer bredden på canvasen
diagram.height = 400;
const diagramContext = diagram.getContext("2d");
const data = [
  12, 23, 8, 15, 20, 30, 25, 18, 28, 22, 12, 16, 28, 20, 14, 19, 25, 10, 28, 18,
  15, 22, 26, 30, 12, 23, 8, 15, 20, 30, 25, 18, 28, 22, 12, 16, 28, 20, 14, 19,
];

function drawBarChart() {
  // beregn bredden på hver søjle baseret på antallet af elementer i date array
  const barWidth = diagram.width / data.length;

  //find den højeste værdi i arrayet
  const maxVal = Math.max(...data);

  //opdater størrelsen af søjlediagrammet baseret på den højste værdi.
  diagram.height = (maxVal + 10) * 10;

  // Variabler til størrelse af søjlerne og margin/padding
  const barHight = diagram.height - 30;
  const margin = 1;
  const padding = 5;

  // loop igennem arrayet og tegn hver søjle
  for (let i = 0; i < data.length; i++) {
    const x = i * barWidth + margin + padding;
    const y = diagram.height - data[i] * (barHight / 32) - margin - padding;

    // Tilføj farver og stil til søjlerne
    diagramContext.fillStyle = "#ff0000";
    diagramContext.fillRect(
      x,
      y,
      barWidth - padding * 2,
      data[i] * (barHight / 32)
    );
  }
}
