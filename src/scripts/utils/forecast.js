function getForecast(){

  fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/6e2c02f548604e02d65da8602f3c0c6e/51.128951699999995,16.9871287`,)
    .then(res => res.json())
    .then(data => console.log(data));
}

export {getForecast}