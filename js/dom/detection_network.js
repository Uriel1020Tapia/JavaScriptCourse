const d = document,
  w = window,
  n = navigator;

export default function detectionNetworkStatus() {
  const isOnline = () => {
    const $barOnline = d.createElement("div");

    if (n.onLine) {
      $barOnline.textContent = "Conexión reestablecida";
      $barOnline.classList.add("online");
      $barOnline.classList.remove("offline");
    } else {
      $barOnline.textContent = "Conexión perdida";
      $barOnline.classList.add("offline");
      $barOnline.classList.remove("online");
    }
    d.body.insertAdjacentElement("afterbegin", $barOnline);
    setTimeout(()=> d.body.removeChild($barOnline),2000);
  };
  w.addEventListener("online", (e) => isOnline());
  w.addEventListener("offline", (e) => isOnline());
}
