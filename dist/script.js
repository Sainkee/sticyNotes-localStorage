// import Toastify from "../node_modules/toastify-js/src/toastify-es";
// import "toastify-js/src/toastify.css";

let btn = document.querySelector(".btn");
let msg = document.querySelector("textarea");
let color = document.getElementById("color");
let noteDiv = document.querySelector(".notediv");

const colorBucket = [
  "#ADD8E6", // Light Blue
  "#87CEEB", // Sky Blue
  "#77DD77", // Pastel Green
  "#FFD700", // Gold
  "#FFA07A", // Light Salmon
  "#87CEFA", // Light Sky Blue
  "#20B2AA", // Light Sea Green
  "#FF69B4", // Hot Pink
  "#FFE4E1", // Misty Rose
  "#D8BFD8", // Thistle
  "#E0FFFF", // Light Cyan
  "#F0E68C", // Khaki
  "#FAFAD2", // Light Goldenrod Yellow
  "#FFEFD5", // Papaya Whip
  "#FFDAB9", // Peach Puff
  "#90EE90", // Light Green
  "#F5F5F5", // White Smoke
  "#B0E0E6", // Powder Blue
  "#FFFFE0", // Light Yellow
  "#FFF0F5", // Lavender Blush
];

noteDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("clbtn")) {
    e.target.parentElement.remove();
  }
});

btn.addEventListener("click", () => {
  if (msg.value.length > 0) {
    let div = document.createElement("div");
    div.innerHTML = `
    <button class ="clbtn">X</button>
    <p class = " "contenteditable="true">${msg.value}</p> `;
    div.style.background = `linear-gradient(to right, white,${randcolor(
      colorBucket
    )})`;

    div.classList.add("sticky-note");
    div.setAttribute("draggable", "true");
    noteDiv.appendChild(div);
    msg.value = "";
  } else {
    Toastify({
      text: "Add Notes First",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #FFD700, #FFA07A)",
        color: "#333333" /* Dark gray text color */,
      },
    }).showToast();
  }
});

function randcolor(colors) {
  let color = Math.floor(Math.random() * colors.length);
  return colors[color];
}
