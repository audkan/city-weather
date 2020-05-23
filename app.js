const Forecast = () => {

  let [responseObj, setResponseObj] = useState({});

  function getForecast() {
    // ClimaCell API fetch
    fetch("https://climacell-microweather-v1.p.rapidapi.com/weather/forecast/hourly?fields=feels_like%252Cweather_code&unit_system=us&lat=37.7749&lon=122.4194", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "climacell-microweather-v1.p.rapidapi.com",
        "x-rapidapi-key": "fce13f8b57msh706d0bccf6d5292p1de690jsn62626372fabb"
      }
    })
    .then(response => response.json())
    .then(response => {
      setResponseObj(response)
    })
    .catch(err => {
      console.log(err);
    });
  }
}
