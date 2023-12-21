let cityName = document.getElementsByClassName("form-control").value;
let apiKey = "6df09f4e5388655c2c93d175c9946e72";
let apiUrl = `https://goweather.herokuapp.com/weather/${cityName}`;
let btns = document.getElementById("button-addon2");

btns.addEventListener("click", foo);
async function foo() {
  try {
    let response = await fetch(apiUrl);
    let data = await response.json();
    console.log(data);
    console.log(`Temperature: ${data.forecast[0].temperature}`);
    let displayOutput = document.createElement("p");
    displayOutput.innerHTML = `Temperature: ${data.forecast[0].temperature}<br>Wind: ${data.forecast[0].wind}
    <br>Climate: ${data.description}`;
    let appendEle = document.querySelector("h5");
    appendEle.appendChild(displayOutput);
  } catch (err) {
    console.log(err);
    let displayOutput = document.createElement("p");
    appendEle.innerHTML = "plese enter valid city name....";
    let appendEle = document.querySelector("h5");
    appendEle.appendChild(displayOutput);
  }
}
