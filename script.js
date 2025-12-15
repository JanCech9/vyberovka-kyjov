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

// Init map
const map = L.map("map").setView([49.01, 17.13], 14);

// OpenStreetMap tiles (stable & free)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

// Add markers with popups
PLACES.forEach(place => {
  const popupHtml = `
    <div style="min-width:200px">
      <strong>${place.name}</strong><br>
      <small>${place.address}</small><br><br>
      <b>Otevírací doba</b><br>
      <span>${place.hours}</span><br><br>
      ${place.website ? `<a href="${place.website}" target="_blank">Web kavárny</a><br>` : ""}
      <a href="https://mapy.cz/zakladni?source=coor&id=${place.lng}%2C${place.lat}" target="_blank">Otevřít v Mapy.cz</a>
    </div>
  `;

  L.marker([place.lat, place.lng], { icon: blackIcon })
    .addTo(map)
    .bindPopup(popupHtml);
});
