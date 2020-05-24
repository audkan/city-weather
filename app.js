fetch('https://api.openweathermap.org/data/2.5/onecall?lat=37.7531&lon=-122.4954&
exclude=current,minutely,daily&appid=b8de6b317b0fe4c54fe3f5ba6e6f3db5')
  .then(response => {
    return response.json();
  })
  .then(users => {
    console.log(users);
  });

const layers = [
  '32-55', '55-60', '60-65', '65-70', '70-75', '75-100'
];
const colors = [
  '#4892C7', '#0568d6', '#a1c85c', '#FFBD3A', '#FF860A', '#E00300',
];

$(document).ready( function() {
  var now = new Date();
  console.log(now);
  var option = '';
  for (var i = 0; i <= 24; i++) {
    now.setHours( now.getHours() + 1);
    console.log(now);
    var hha = now.toLocaleString('en-US', { hour: 'numeric', hour12: true });
    console.log(hha);
    options += '<option value="'+hha+'" />';
  }
  document.getElementById('ticks').innerHTML = options;
}
