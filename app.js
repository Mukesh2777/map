const socket = io();

navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    socket.emit('newUser', { latitude, longitude });
});

socket.on('userLocation', (location) => {
    updateMap(location);
});

function updateMap(location) {
    // Update the map with the user's location
    // Use a mapping library like Leaflet or Google Maps
    console.log('User location:', location);
}