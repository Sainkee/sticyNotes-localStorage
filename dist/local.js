// import Toastify from "../node_modules/toastify-js/src/toastify-es";
// import "toastify-js/src/toastify.css";

let btn = document.querySelector(".btn");
let textMsg = document.querySelector("textarea");
let color = document.getElementById("color");
let noteDiv = document.querySelector(".notediv");

let data = JSON.parse(localStorage.getItem("notes")) || [];

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

if (data.length > 0) {
  window.onload = displayData();
}

noteDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("clbtn")) {
    let del = parseInt(e.target.id);

    data = data.filter((note) => {
      return note.id !== del;
    });

    localStorage.setItem("notes", JSON.stringify(data));
    displayData();
  }
});

noteDiv.addEventListener("input", (e) => {
  if (e.target.classList.contains("noteContent")) {
    const noteId = e.target.parentElement.querySelector(".clbtn").id;

    const noteIndex = data.findIndex((note) => note.id == noteId);

    data[noteIndex].msg = e.target.textContent;

    localStorage.setItem("notes", JSON.stringify(data));
  }
});

btn.addEventListener("click", () => {
  if (textMsg.value.length > 0) {
    let obj = { msg: textMsg.value, id: new Date().getTime() };
    data.push(obj);
    localStorage.setItem("notes", JSON.stringify(data));
    displayData();
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

function randcolor(colorBucket) {
  let color = Math.floor(Math.random() * colorBucket.length);
  return colorBucket[color];
}

function displayData() {
  noteDiv.innerHTML = "";
  data.forEach((note) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <button id ="${note.id}" class ="clbtn bg:red-500 hover:bg-red-600 rounded-l-sm inline-block text-white">X</button>
    <p   class = "noteContent outline-none py-1 md:py-[6%] "contenteditable="true">${note.msg}</p> `;
    div.style.background = `linear-gradient(to right, white,${randcolor(
      colorBucket
    )})`;

    div.classList.add("sticky-note", "hover:cursor-pointer");
    div.setAttribute("draggable", "true");
    noteDiv.insertBefore(div, noteDiv.firstChild);
    textMsg.value = "";
  });
}
function updateNote(e) {
  console.log(e.target.textContent);
}
