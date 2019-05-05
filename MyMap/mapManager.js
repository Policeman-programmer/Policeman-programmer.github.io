var map = function drawMap() {
    mymap = L.map('mapid').setView([46.957431, 32.032948], 12);
    const zoom = 18;
    src = "https://unpkg.com/leaflet@1.3.4/dist/leaflet.js";
    integrity = "sha512-nMMmRyTVoLYqjP9hrbed9S+FzjZHW5gY1TWCHA5ckwXZBadntCNs8kEqAWdrb9O7rxbCaA4lKTIWjDXZxflOcA==";
    crossorigin = "" >
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: zoom,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiZXZoZW5paXRyb2tobml1ayIsImEiOiJjam9sd3N0ZnUwdjhlM29wY2VpcWtlZ3IyIn0.ht0QTSrYIo6NIY9_KhGxqQ'
        }).addTo(mymap);
};




