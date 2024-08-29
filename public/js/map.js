// Ensure the DOM is fully loaded before accessing elements
document.addEventListener("DOMContentLoaded", function () {
    if (typeof listingData !== 'undefined') {
        const map = L.map('map').setView([listingData.coordinates.latitude, listingData.coordinates.longitude], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 10,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        const marker = L.marker([listingData.coordinates.latitude, listingData.coordinates.longitude]).addTo(map);
        marker.bindPopup(listingData.title).openPopup();

        // Add a filled circle around the marker with a thin plate effect
        const circle = L.circle([listingData.coordinates.latitude, listingData.coordinates.longitude], {
            color: 'red', // Border color
            fillColor: '#f03', // Fill color
            fillOpacity: 0.6, // Increase opacity to make the fill more prominent
            radius: 10000 // Adjust the radius to cover a larger area
        }).addTo(map);

    } else {
        console.error('Listing data is not available.');
    }
});
