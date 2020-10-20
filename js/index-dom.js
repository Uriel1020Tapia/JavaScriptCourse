import { hamburgerMenu } from "./dom/menu_hamburger.js";
import { digitalClock, alarm } from "./dom/clock.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import countDown from "./dom/count_down.js";
import scrollTopBtn from "./dom/btn_scroll.js";
import darkTheme from "./dom/theme_dark.js";
import responsiveMedia from "./dom/object_responsive.js";
import responsiveTest from "./dom/test_responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import detectionNetworkStatus from "./dom/detection_network.js";
import webCam from "./dom/detection_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilter from "./dom/filter-searchs.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carrousel.js";
import scrollSpy from "./dom/scrollspy.js";
import smartVideo from "./dom/video_intelligent.js";
import speechReader from "./dom/narrador.js";
import { showModal } from "./dom/modal-pnt.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#btn-play-clock", "#btn-stop-clock");
  alarm("./assets/Alarm-Fast.mp3", "#btn-play-alarma", "#btn-stop-alarma");
  countDown(
    "countDown",
    "Sep 10, 2020 00:00:01",
    "🎂Feliz Cumpleaños URTAAV!🎂"
  );
  scrollTopBtn(".scroll-top-btn");
  responsiveMedia("youtube","(min-width:1024px)",`<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=90">Ver video</a>`,`<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
  responsiveMedia("gmaps","(min-width:1024px)",`<a href="https://goo.gl/maps/ykfawJ2jcBHafxLYA">ver mapa</a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.3307860565535!2d-99.16869369203629!3d19.42702312622344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses-419!2smx!4v1598290209007!5m2!1ses-419!2smx" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`);

  responsiveTest("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  getGeolocation("geolocation");
  searchFilter(".card-filter",".card");
  draw("#winner-btn",".player");
  slider();
  scrollSpy();
  smartVideo();
  showModal("#btn-modal-pnt","_modal-pnt");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
d.addEventListener("Keypress", (e) => {});

darkTheme(".dark-theme-btn","dark-mode");
detectionNetworkStatus();
speechReader();