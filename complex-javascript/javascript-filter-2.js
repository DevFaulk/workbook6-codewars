function roomMates(rooms, floor) {
    const occupants = [];
    const startRoom = (floor - 1) * 6;
    const endRoom = startRoom + 6;

    for (let i = startRoom; i < endRoom; i++) {
        if (rooms[i] !== "") {
            occupants.push(rooms[i]);
        }
    }

    return occupants;
}

// Example usage:
const rooms = [ "Jill", "Jackson", "Jan", "Eve", "", "John", "Jimmy", "Tom", "", "Duke" ];

const floor1Occupants = roomMates(rooms, 1);
console.log("Occupants on floor 1:", floor1Occupants); // Output: ["Jill", "Jackson", "Jan", "Eve", "John"]

const floor2Occupants = roomMates(rooms, 2);
console.log("Occupants on floor 2:", floor2Occupants); // Output: ["Jimmy", "Tom", "Duke"]