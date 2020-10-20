const d = document,
  n = navigator;

export default function getGeolocation(id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

  const success = (position) => {
    // console.log("success", position);
    const coords = position.coords;
    $id.innerHTML = `
            <ul>
                    <li>Latitud: <b>${coords.latitude}</b></li>
                    <li>Longitud: <b>${coords.longitude}</b></li>
                    <li>Precisión: <b>${coords.accuracy}</b> metros</li>
            </ul> 
            <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},l.8z" target="_blank" rel="noopener"> ver en goole maps</a>`;
  };
  const error = (err) => {
    $id.innerHTML = `Error ${err.code}: ${err.message}`;
    // console.log(`Error ${err.code}: ${err.message}`);
  };
  n.geolocation.getCurrentPosition(success, error, options);
}
