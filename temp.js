const API_Key = `8b05ed3770ffed2e7f05225afb4cfe9f`;

const loadData = (city) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`
  )
    .then((res) => res.json())
    .then((data) => displayTemprature(data));
};

const displayTemprature = (data) => {
  setTheNewFunction("condition", data.weather[0].main);
  setTheNewFunction("temp", data.main.temp);
  console.log(data.weather[0].main);
};

const setTheNewFunction = (id, text) => {
  let getFuncId = document.getElementById(id);
  getFuncId.innerText = text;
};

document.getElementById("seacrh-btn").addEventListener("click", () => {
  let getInputvalue = document.getElementById("input-value").value;

  if (!isNaN(getInputvalue)) {
    // getInputvalue = "";
    alert("Please enter only alphabetic characters");
    return;
  }
  document.getElementById("city").innerText = getInputvalue;
  loadData(getInputvalue);
});
loadData("Dhaka");

// const myVar = prompt("Please Enter :");

// if (isNaN(myVar)) {
//   console.log("Input Valid ");
// } else {
//   console.log("not a valid");
//}
