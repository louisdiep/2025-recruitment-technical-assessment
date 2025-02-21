// index.js
import buildings from "./data.json" with { type: "json" };


document.addEventListener("DOMContentLoaded", () => {
    // add the buildings
    const buildingContainer = document.querySelector(".building-container");

    buildings.forEach(building => {
        addBuilding(buildingContainer, building.name, building.rooms_available, building.building_picture)
    });
})

// Building
// I'm trying to create the below building div:
/* <div class="building">
<div class="rooms-available"><span class="green-dot"></span>9 rooms available</div>
<div class="building-name">AGSM</div>
</div> */
function addBuilding(buildingContainer, name, rooms_available, building_picture) {
    const buildingDiv = document.createElement("div");
    buildingDiv.classList.add("building");
    buildingDiv.style.backgroundImage =  `url(${building_picture})`;

    // adding rooms available
    const roomsAvailableDiv = document.createElement("div");
    roomsAvailableDiv.classList.add("rooms-available");

    const greenDot = document.createElement("span");
    greenDot.classList.add("green-dot");
    roomsAvailableDiv.appendChild(greenDot);

    const roomsAvailableText = document.createTextNode(`${rooms_available} rooms available`);
    roomsAvailableDiv.appendChild(roomsAvailableText);

    buildingDiv.appendChild(roomsAvailableDiv);

    // adding building name
    const buildingNameDiv = document.createElement("div");
    buildingNameDiv.classList.add("building-name");
    buildingNameDiv.textContent = name;

    buildingDiv.appendChild(buildingNameDiv);


    buildingContainer.appendChild(buildingDiv);
}

function changeDoorState() {
    let door = document.querySelector("#header-logo");
    if (door.src.includes("freeRoomsLogo.png")) {
        door.setAttribute("src", "assets/freeroomsDoorClosed.png");
    } else {
        door.setAttribute("src", "assets/freeRoomsLogo.png");
    }
}