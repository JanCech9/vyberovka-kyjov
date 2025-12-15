// Data for coffee places
const PLACES = [
  {
    name: "Kaflík",
    lat: 49.018145,
    lng: 17.1339061,
    address: "Nětčická 2647/80A, Kyjov",
    hours: [
      "Po: 6:45–18:00",
      "Út: 6:45–18:00",
      "St: 6:45–18:00",
      "Čt: 6:45–18:00",
      "Pá: 6:45–18:00",
      "So: 9:00–16:00",
      "Ne: 9:00–16:00"
    ],
    website: "https://kaflik.cz"
  },
  {
    name: "Amazonka",
    lat: 49.00992,
    lng: 17.1269453,
    address: "Masarykovo nám. 63/43, Kyjov",
    hours: [
      "Po: 7:30–18:00",
      "Út: 7:30–18:00",
      "St: 7:30–18:00",
      "Čt: 7:30–18:00",
      "Pá: 7:30–19:00",
      "So: 9:00–19:00",
      "Ne: 9:00–18:00"
    ],    website: "https://kavarnaamazonka.cz/"
  },
  {
    name: "Pražírna",
    lat: 49.0109994,
    lng: 17.1264969,
    address: "tř. Komenského 1407/14, Kyjov",
    hours: [
      "Po: 10:00–19:00",
      "Út: 10:00–19:00",
      "St: 10:00–19:00",
      "Čt: 10:00–19:00",
      "Pá: 10:00–22:00",
      "So: 10:00–22:00",
      "Ne: 13:00–19:00"
    ],    website: "https://prazirnakyjov.cz/"
  }
];

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

// Init map (Kyjov)
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
