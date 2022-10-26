// 1st, select the properties to be used and assign a variable to them
let result = document.getElementById("result");
let date = document.querySelector(".date-time");
const button = document.querySelector(".switch");
const inner = document.querySelector(".inner-calc");
const dope = document.querySelector(".special");
const dateTime = document.querySelector(".date-time");
const equal = document.querySelector(".equal");
// console.log(result);

time = new Date();
date.innerHTML = time.toDateString();

let calculate = (number) => {
  result.value += number;
};

let Result = () => {
  try {
    result.value = eval(result.value);
  } catch (err) {
    result.value.innerHTML = "Error!";
  }
};

let clr = () => {
  result.value = "";
};

let del = () => {
  result.value = result.value.slice(0, -1);
};

button.addEventListener("click", function () {
  button.style.transform = "translateX(180%)";
  button.style.backgroundColor = "red";
  inner.style.backgroundColor = "#fff";
  // dope.style.backgroundColor = "blue";
  dateTime.style.backgroundColor = "blue";
  equal.style.backgroundColor = "orange";
});
