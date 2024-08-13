navigator.geolocation.getCurrentPosition(success, error, { enableHighAccuracy: true });

function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map)
        .bindPopup('You are here.')
        .openPopup();
}

function error(err) {
    console.warn(ERROR(${err.code}): ${err.message});

    // نمایش نقشه با یک مکان پیش‌فرض
    const latitude = 35.6892; // موقعیت ثابت برای تهران
    const longitude = 51.3890;

    const map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map)
        .bindPopup('Unable to retrieve your location. Showing default location.')
        .openPopup();
}