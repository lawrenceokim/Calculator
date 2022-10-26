// 1st, select the properties to be used and assign a variable to them
let result = document.getElementById("result");
let date = document.querySelector(".date-time");
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
