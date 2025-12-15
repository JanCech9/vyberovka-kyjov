// Custom black SVG marker
const blackIcon = L.divIcon({
  className: "custom-marker",
  html: `
    <svg width="24" height="36" viewBox="0 0 24 36" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24C24 5.4 18.6 0 12 0z"
            fill="#000"/>
      <circle cx="12" cy="12" r="5" fill="#fff"/>
    </svg>
  `,
  iconSize: [24, 36],
  iconAnchor: [12, 36],
  popupAnchor: [0, -36]
});


// Load places from external JSON
fetch("places.json")
.then(response => {
if (!response.ok) throw new Error("Cannot load places.json");
return response.json();
})
.then(places => {
places.forEach(place => {
const popupHtml = `
  <div class="popup">
    <div class="popup-title">${place.name}</div>

    <div class="popup-row">
      <span class="popup-label">📍 Adresa</span>
      <span class="popup-text">${place.address}</span>
    </div>

    <div class="popup-row">
      <span class="popup-label">🕒 Otevírací doba</span>
      <span class="popup-text">
        ${place.hours.forEach ? place.hours.join("<br>") : place.hours}
      </span>
    </div>

    <div class="popup-links">
      ${place.website ? `<a href="${place.website}" target="_blank">Web</a>` : ""}
      <a href="https://mapy.cz/zakladni?source=coor&id=${place.lng}%2C${place.lat}" target="_blank">
        Mapy.cz
      </a>
    </div>
  </div>
`;


L.marker([place.lat, place.lng], { icon: blackIcon })
.addTo(map)
.bindPopup(popupHtml);
});
})
.catch(err => {
console.error(err);
alert("Nepodařilo se načíst místa (places.json)");
});

// Init map
const map = L.map("map").setView([49.01, 17.13], 14);

// OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

