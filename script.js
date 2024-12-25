let modebtn = document.querySelector("#mode");
let currmode = "light";
let body = document.querySelector("body");

modebtn.addEventListener("click", () => {
  if (currmode === "light") {
    currmode = "drak";
    body.style.backgroundColor = "black";
  } else {
    currmode = "light";
    body.style.backgroundColor = "white";
  }
  console.log(currmode);
});
