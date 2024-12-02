let map = L.map('map').setView([47.4979, 19.0402], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap hozzájárulók'
}).addTo(map);

let gravity = L.marker([47.50877, 19.02598]).addTo(map);
gravity.bindPopup("<b>Gravity Boulder Bar</b><br><a href='https://gravitybudapest.com/en/home_en/', target='_blank'></a>");

let gravity_campus = L.marker([47.48067, 19.049524]).addTo(map);
gravity_campus.bindPopup("<b>Gravity Campus</b><br><a href='https://gravitybudapest.com/en/home_en/', target='_blank'></a>");

let flow = L.marker([47.45933, 19.0508]).addTo(map);
flow.bindPopup("<b>Flow Boulder</b><br><a href='https://www.flowboulder.hu/', target='_blank'></a>");

let spider = L.marker([47.53576, 19.04174]).addTo(map);
spider.bindPopup("<b>Spider Club</b><br><a href='https://www.spiderclub.hu/', target='_blank'></a>");

let mag47 = L.marker([47.48216, 19.15685]).addTo(map);
spider.bindPopup("<b>Mag47</b><br><a href='https://www.mag47.hu/', target='_blank'></a>");

let bigwall = L.marker([47.56547, 19.0830]).addTo(map);
spider.bindPopup("<b>Spider Club</b><br><a href='https://www.bigwall.hu/', target='_blank'></a>");

let gi = L.marker([47.50246, 19.17479]).addTo(map);
spider.bindPopup("<b>Spider Club</b><br><a href='https://www.giboulder.hu/', target='_blank'></a>");

gravity.on('click', function () {
    window.location.href = "https://gravitybudapest.com/en/home_en/";
});

flow.on('click', function () {
    window.location.href = "https://www.flowboulder.hu/";
});

gravity_campus.on('click', function () {
    window.location.href = "https://gravitybudapest.com/en/home_en/";
});

spider.on('click', function () {
    window.location.href = "https://www.spiderclub.hu/";
});

mag47.on('click', function () {
    window.location.href = "https://www.mag47.hu/";
});

bigwall.on('click', function () {
    window.location.href = "https://www.bigwall.hu/";
});

gi.on('click', function () {
    window.location.href = "https://www.giboulder.hu/";
});