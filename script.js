// 1) Recupero gli elementi
const box = document.getElementById("box");
const button = document.getElementById("button");
// 2) Griglia di partenza
let rows = 10;
let cols = 10;
const totalCells = rows * cols;

// FUNZIONI:

// Funzione per creare le celle
const createCell = (num) => {
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.innerText = num;
  return cell;
};

// Funzione per creare la griglia
const createGrid = () => {
  for (let i = 1; i <= totalCells; i++) {
    const cell = createCell(i);
    box.appendChild(cell);
  }
};

button.addEventListener("click", () => {
  createGrid();
});
