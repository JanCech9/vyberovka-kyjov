const PLACES = [
  { name: "Kaflik", lat: 49.018145, lng: 17.1339061 },
  { name: "Amazonka", lat: 49.00992, lng: 17.1269453 },
  { name: "Pražírna", lat: 49.0109994, lng: 17.1264969 }
];

// Init map
const map = L.map("map").setView([49.01, 17.13], 14);

// OSM tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

// Markers
PLACES.forEach(place => {
  L.marker([place.lat, place.lng])
    .addTo(map)
    .bindPopup(`<b>${place.name}</b>`);
});