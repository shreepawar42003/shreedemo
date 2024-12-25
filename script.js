let btn = document.querySelector("#mode");
let currmode = "light";
let body = document.querySelector("body");

btn.addEventListener("click", () => {
  if (currmode === light) {
    currmode = "dark";
    body.style.backgroundColor = " black";
  } 
  else {
    currmode = "light";
    body.style.backgroundColor = " white";
  }
  console.log(currmode);
});
