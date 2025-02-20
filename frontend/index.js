// index.js

function changeDoorState() {
    let door = document.querySelector('#header-logo');
    if (door.src.includes('freeRoomsLogo.png')) {
        door.setAttribute('src', 'assets/freeroomsDoorClosed.png');
    } else {
        door.setAttribute('src', 'assets/freeRoomsLogo.png');
    }
}
