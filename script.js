const PLACES = [
{ name: "Centrum Kyjov", lat: 49.001, lng: 17.274 },
{ name: "Hlavní nádraží", lat: 49.003, lng: 17.272 }
];


// Init map
const map = L.map("map").setView([49.001, 17.274], 14);


L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
maxZoom: 19,
attribution: "&copy; OpenStreetMap"
}).addTo(map);


// Add markers
PLACES.forEach(place => {
L.marker([place.lat, place.lng])
.addTo(map)
.bindPopup(`<b>${place.name}</b>`);
});