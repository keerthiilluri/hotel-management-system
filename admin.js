function showSection(sectionId) {
    let sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.add("hidden");
    });

    document.getElementById(sectionId).classList.remove("hidden");
}

/* Add Room */
function addRoom() {
    let name = document.getElementById("roomName").value;
    let price = document.getElementById("roomPrice").value;

    if (name === "" || price === "") return;

    let li = document.createElement("li");
    li.innerText = name + " - ₹" + price;

    document.getElementById("roomList").appendChild(li);

    document.getElementById("roomName").value = "";
    document.getElementById("roomPrice").value = "";
}

/* Set Tariff */
function setTariff() {
    let type = document.getElementById("type").value;
    let price = document.getElementById("price").value;

    if (type === "" || price === "") return;

    let li = document.createElement("li");
    li.innerText = type + " : ₹" + price;

    document.getElementById("tariffList").appendChild(li);

    document.getElementById("type").value = "";
    document.getElementById("price").value = "";
}