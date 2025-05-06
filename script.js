const input = document.querySelector("input");

async function fetchData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=X7LHTYMGKU9GCE6UXLN2M7MZA`,
      { mode: "cors" }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

function displayInformation(data) {
  const temperatureText = document.querySelector("h1");
  const addressText = document.querySelector("h2");
  temperatureText.textContent = `${data.currentConditions.temp}°C`;
  addressText.textContent = data.resolvedAddress;
}

let data;
input.addEventListener("keydown", async function (e) {
  if (e.key === "Enter") {
    data = await fetchData(input.value);
    displayInformation(data);

    // Clear input
    input.value = "";
  }
});
