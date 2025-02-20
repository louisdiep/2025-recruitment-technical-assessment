// index.js

const buildings = [
    {
        "name": "AGSM",
        "rooms_available": 9,
        "building_file": "assets/agsm.webp"
    },
    {
        "name": "Ainsworth Building",
        "rooms_available": 16,
        "building_picture": "assets/ainsworth.webp"
    },
    {
        "name": "Anita B Lawrence Centre",
        "rooms_available": 44,
        "building_picture": "assets/anitab.webp"
    },
    {
        "name": "Biological Sciences",
        "rooms_available": 6,
        "building_picture": "assets/biologicalScience.webp"
    },
    {
        "name": "Biological Science (West)",
        "rooms_available": 8,
        "building_picture": "assets/biologicalScienceWest.webp"
    },
    {
        "name": "Blockhouse",
        "rooms_available": 42,
        "building_picture": "assets/blockhouse.webp"
    },
    {
        "name": "Business School",
        "rooms_available": 18,
        "building_picture": "assets/businessSchool.webp"
    },
    {
        "name": "Civil Engineering Building",
        "rooms_available": 8,
        "building_picture": "assets/civilBuilding.webp"
    },
    {
        "name": "Colombo Building",
        "rooms_available": 5,
        "building_picture": "assets/colombo.webp"
    },
    {
        "name": "Computer Science & Eng (K17)",
        "rooms_available": 7,
        "building_picture": "assets/cseBuilding.webp"
    }
];

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

    roomsAvailableDiv.textContent = `${rooms_available} rooms available`;

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
