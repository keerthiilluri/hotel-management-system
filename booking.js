// State → City mapping
const stateCityMap = {
    AP: ["Vijayawada", "Visakhapatnam", "Guntur", "Tirupati"],
    TS: ["Hyderabad", "Warangal", "Nizamabad"],
    TN: ["Chennai", "Coimbatore", "Madurai"],
    KA: ["Bangalore", "Mysore", "Mangalore"],
    MH: ["Mumbai", "Pune", "Nagpur"]
};

const stateSelect = document.getElementById("state");
const citySelect = document.getElementById("city");
const form = document.getElementById("bookingForm");
const message = document.getElementById("message");

// Dynamic city update
stateSelect.addEventListener("change", function () {
    const selectedState = this.value;

    citySelect.innerHTML = '<option value="">Select City</option>';

    if (selectedState && stateCityMap[selectedState]) {
        stateCityMap[selectedState].forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
});

// Form submit event
form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop page reload

    // Show success message
    message.textContent = "✅ Booking Successful!";
    message.style.color = "green";

    // Clear form
    form.reset();

    // Reset city dropdown
    citySelect.innerHTML = '<option value="">Select City</option>';
});