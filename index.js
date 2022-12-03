const gridcontainerEl = document.querySelector(".gridcontainer");
const secondcontainerEl = document.querySelector(".secondcontainer");
const arraysecondcontainerEl = Array.from(secondcontainerEl);
const eraseEl = document.querySelector(".erase");
const clearEl = document.querySelector(".clear");
const drawEl = document.querySelector(".draw");
const clickndragEl = document.querySelector(".clickndrag");

let hovermode = false;

let numberperside = 16;
// prompt("How many squares per side do you want?")

let color = "#b17a43";

let mode = false;

function changecolor(square) {
  square.style.backgroundColor = "black";
}

function createDiv() {
  secondcontainerEl.style.gridTemplateRows = `repeat(${numberperside}, 1fr)`;
  secondcontainerEl.style.gridTemplateColumns = `repeat(${numberperside}, 1fr)`;

  for (let index = 0; index < numberperside; index++) {
    for (let index = 0; index < numberperside; index++) {
      const squarediv = document.createElement("div");
      squarediv.classList.add("squarediv");
      secondcontainerEl.appendChild(squarediv);
      arraysecondcontainerEl[arraysecondcontainerEl.length] = squarediv;
      // click and drag code
      
      squarediv.addEventListener("mousedown", () => {
        mode = true;
      });
      squarediv.addEventListener("mouseover", () => {
        if (mode === true) {
          squarediv.style.backgroundColor = color;
        }
        if (hovermode === true) {
          squarediv.style.backgroundColor = color;
          mode = false
        }
      });
      squarediv.addEventListener("mouseup", () => {
        mode = false;
      });
    }
  }
}


createDiv();

// if (hovermode === true) {
//   for (let index = 0; index < arraysecondcontainerEl.length; index++) {
//     const element = arraysecondcontainerEl[index];
//     element.addEventListener("mouseover", () => {
//       element.style.backgroundColor = color;
//     });
//   }
// }

function clear() {
  secondcontainerEl.innerHTML = "";
}

clearEl.addEventListener("click", () => {
  clear();
  createDiv();
  console.log(hovermode);
});

drawEl.addEventListener("click", () => {
  color = "black";
});

eraseEl.addEventListener("click", () => {
  color = "#b17a43";
});

clickndragEl.addEventListener("click", () => {
  if (hovermode === true) {
    clickndragEl.innerText = "Mode: Click-Drag";
    hovermode = false;
  } else {
    clickndragEl.innerText = "Mode: Hover";
    hovermode = true;
  }
});
