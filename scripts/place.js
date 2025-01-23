function calculateWindChill(temp, windSpeed) {
    if (temp > 10 || windSpeed < 4.8) {
        return "N/A";
    }

    let windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
    return windChill.toFixed(1) + "°C";
}

let temperature = 10;
let windSpeed = 8;

let windChillValue = calculateWindChill(temperature, windSpeed);

document.querySelector("#windChill").textContent = windChillValue;
