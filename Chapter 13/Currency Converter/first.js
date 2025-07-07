// Using free API key
const API_KEY = "fca_live_fxKqxIhQ3qlMOw8NE8HuEhowa65PTFBxVWpJvZne";
const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const mes = document.querySelector(".msg");

// Populate currency dropdowns
for (let select of dropdowns) {
    for (let currcode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currcode;
        newOption.value = currcode;

        // // Set default selection
        if (select.name === "from" && currcode === "USD") {
            newOption.selected = true;
        } else if (select.name === "to" && currcode === "INR") {
            newOption.selected = true;
        }
        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

// Fetch and update exchange rate
const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;

    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    console.log("From:", fromCurr.value, "To:", toCurr.value, "Amount:", amtVal);

    // Corrected template literal
    const URL = `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurr.value}&currencies=${toCurr.value}`;

    try {
        let response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();
        let rate = data.data[toCurr.value];

        let finalAmount = (amtVal * rate).toFixed(2);
        mes.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;

    } catch (error) {
        console.error("Error fetching exchange rate:", error);
        mes.innerText = "Failed to fetch exchange rate!";
    }
};

// Update flag when currency is changed
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];

    // Corrected template literal
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

    let img = element.parentElement.querySelector("img");
    if (img) {
        img.src = newSrc;
    }
};

// Button click event
btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

// Fetch exchange rate on page load
window.addEventListener("load", () => {
    updateExchangeRate();
});

// Expand dropdown when focused
document.querySelectorAll("select").forEach((select) => {
    select.addEventListener("focus", () => {
        select.size = 5;
    });
    select.addEventListener("blur", () => {
        select.size = 1;
    });
});
