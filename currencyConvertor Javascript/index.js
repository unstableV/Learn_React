const api_url = " https://api.exchangerate.host/convert?from=CAD&to=EUR";

async function getapi(url,firstCurrency) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    document.getElementById("secondCurrency").textContent = (parseFloat(data.info.rate) * firstCurrency).toFixed(3);
    console.log(data.info.rate);
}

function calculate() {
    var fistcurrency=document.getElementById("firstCurrency").value;
    getapi(api_url, fistcurrency);
}

