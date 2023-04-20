// const api_call = "http://api.openweathermap.org/data/2.5/weather?q=" +city+'&'+country+ "&mode=json&appid="+"b002f54113c837f289e9a25a062f0d80"+"&units=metric";

async function getapi(city,country) {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" +city+'&'+country+ "&mode=json&appid="+"b002f54113c837f289e9a25a062f0d80"+"&units=metric";

    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    temperature(data);
}

function temperature(data) {

    if((data.cod == "404")&&(data.message == "city not found")){
        document.getElementById("result").innerHTML = `<p> City not found</p>`;
      }

    else {
    document.getElementById("result").innerHTML = `<div id ="final">
    <p>City Name: ${data.name}</p>
    <p>Feels Like: ${data.main.feels_like}</p>
    <p>Temperature: ${data.main.temp}</p>
    <p>Humidity: ${data.main.humidity}</p>
    <p>Maximum Temperature: ${data.main.temp_max}</p>
    <p> Minimum Temperature: ${data.main.temp_min}</p>
    </div>`
    }
}

function calculate() {
  
    let city = document.getElementById("city").value;
    let country = document.getElementById("country").value;
    if(city&&country) {
    getapi(city,country);
    }
    else {
        document.getElementById("result").innerHTML = `<p>Please enter both city and country</p>`
    }

}