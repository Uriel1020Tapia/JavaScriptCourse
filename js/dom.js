// console.log('',document.getElementsByTagName("li"));
// console.log('',document.getElementsByClassName("card"));
// console.log('',document.getElementById("menu"));

// document.querySelectorAll(".card").forEach((el) => console.log(el))
// console.log(document.querySelector("#menu"))

// ===================================================
// ATTRIBUTES
// ===================================================

// console.log(document.documentElement.lang);
// console.log(document.documentElement.getAttribute("lang"))
// console.log(document.querySelector(".link-dom").href)
// console.log(document.querySelector(".link-dom").getAttribute("href"));

// document.documentElement.lang = "in"

// console.log(document.documentElement.lang);

// document.documentElement.setAttribute("lang","es-Mx");
// console.log(document.documentElement.lang);

// const $linkDOM = document.querySelector(".link-dom");

// $linkDOM.setAttribute("data-desc","urtaav")
// $linkDOM.setAttribute("target","_blank")
// $linkDOM.setAttribute("rel","noopener");
// console.log($linkDOM.hasAttribute("rel"));
// $linkDOM.removeAttribute("rel","noopener");
// console.log($linkDOM.hasAttribute("rel"));


// // Data-Attributes
// console.log($linkDOM.getAttribute("data-description"));
// console.log($linkDOM.dataset);
// console.log($linkDOM.dataset.description);
// $linkDOM.setAttribute("data-description","DOM-update")
// console.log($linkDOM.dataset.description);
// $linkDOM.dataset.description = "Model de Objeto del Documento";
// console.log($linkDOM.dataset.description);

// ===================================================
// ESTILOS
// ===================================================


// const $linkDOM = document.querySelector(".link-dom");

// console.log($linkDOM.style);
// $linkDOM.style.backgroundColor = "#b52b65";
// $linkDOM.style.color = "#3c2c3e";
// $linkDOM.style.fontWeight = "600";
// console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));

// $linkDOM.style.setProperty("text-decoration","none");
// $linkDOM.style.setProperty("display","block");
// $linkDOM.style.width ="50%";
// $linkDOM.style.textAlign ="center";
// $linkDOM.style.marginLeft ="auto";
// $linkDOM.style.marginRight ="auto";
// $linkDOM.style.padding ="1rem";
// $linkDOM.style.borderRadius ="4px";

// console.log($linkDOM.getAttribute("style"));


// ======================================
// Variables CSS - Custom properties
// ======================================


// const $html = document.documentElement, 
// $body = document.body;

// let primary_Color = getComputedStyle($html).getPropertyValue("--primary-color"),
// secondary_Color = getComputedStyle($html).getPropertyValue("--secondary-color");

// console.log(primary_Color,secondary_Color);


// $body.style.backgroundColor = primary_Color;
// $body.style.color = secondary_Color;


// $html.style.setProperty("--letter-color","#fff");
// $html.style.color = getComputedStyle($html).getPropertyValue("--letter-color")



// const $card = document.querySelector(".card");
// console.log($card);
// console.log($card.className);
// console.log($card.classList);
// console.log($card.classList.contains("rotate-45"))
// $card.classList.add("rotate-45")
// console.log($card.classList.contains("rotate-45"))
// $card.classList.remove("rotate-45");

// $card.classList.toggle("rotate-45")
// console.log($card.className);
// console.log($card.classList);
// $card.classList.replace("rotate-45","rotate-135");
// $card.classList.remove("opacity-80","sepia")
// $card.classList.toggle("opacity-80","sepia")


// const $whatIsDOM = document.getElementById("que-es");
// let descriptionDOM = `<p><b>DOM</b> es una abreviatura de Document Objet Model.<p>
// <span>Con todo, a través del DOM, queda disponible para los programadores de Javascript</span>
// <p>cualquier elemento de la página, para modificarlos, suprimirlos, crear nuevos elementos y colocarlos en la página, etc.</p>`;

// $whatIsDOM.innerHTML = descriptionDOM;
// $whatIsDOM.textContent = descriptionDOM;
// $whatIsDOM.innerHTML = descriptionDOM;
// $whatIsDOM.outerHTML = descriptionDOM;

// ======================================
// DOM traversing
// ======================================

// const $cards = document.querySelector(".cards");

// console.log($cards);
// console.log($cards.children);
// console.log($cards.children[2]);
// console.log($cards.parentElement);
// // console.log($cards.parentNode);
// console.log($cards.firstChild);
// console.log($cards.firstElementChild);
// console.log($cards.lastChild);
// console.log($cards.lastElementChild);
// console.log($cards.previousElementSibling);
// console.log($cards.nextElementSibling);
// console.log($cards.closest("body"));
// console.log($cards.children[2].closest("section"));


// ======================================
// Creando elementos y fragmentos
// ======================================

// const $figure = document.createElement("figure"),
// $img = document.createElement("img"),
// $figCaption = document.createElement("figcaption"),
// $figCaptionText = document.createTextNode("Animals"),
// $cards = document.querySelector(".cards"),
// $figure2 = document.createElement("figure");

// $img.setAttribute("src","https://placeimg.com/200/200/animals");
// $img.setAttribute("alt","animals");
// $figure.classList.add("card");

// $figCaption.appendChild($figCaptionText);
// $figure.appendChild($img);
// $figure.appendChild($figCaption);
// $cards.appendChild($figure)

// $figure2.innerHTML = `            
// <img src="https://placeimg.com/200/200/people" alt="People">
// <figcaption>People</figcaption>`;
// $figure2.classList.add("card");
// $cards.appendChild($figure2);


// const stations = ["Primavera","Verano","Otoño","Invierno"],
// $ul = document.createElement("ul");
// document.write("<h3>Estaciones del año</h3>");
// document.body.appendChild($ul);

// stations.forEach(el => {
//     const $li = document.createElement("li");
//     $li.textContent = el;
//     $ul.appendChild($li);
// });
// const continentes = ["Africa","America","Asia","Europa","Oceania"],
// $ul2 = document.createElement("ul");
// document.write("<h3>Continentes</h3>");
// document.body.appendChild($ul2);
// $ul2.innerHTML = "";

// continentes.forEach(el=> $ul2.innerHTML += `<li>${el}</li>`);

// const months = [
//     "Junary",
//     "Febrary",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "Agost",
//     "September",
//     "Octuber",
//     "November",
//     "December",
// ],
// $ul3 = document.createElement("ul"),
// $fragment = document.createDocumentFragment();

// months.forEach(el=>{
//     const $li = document.createElement("li");
//     $li.textContent = el;
//     $fragment.appendChild($li);
// });
// document.write("<h3>Meses del año</h3>");

// $ul3.appendChild($fragment);
// document.body.appendChild($ul3);


// ======================================
//  DOM: Templates HTML
// ======================================

// const $cards = document.querySelector(".cards"),
// $template = document.getElementById("template-card").content,
// $fragment = document.createDocumentFragment(),
// listContent = [
// {
//     "title":"NATURE",
//     "img":"https://placeimg.com/200/200/nature"
// },
// {
//     "title":"People",
//     "img":"https://placeimg.com/200/200/people"
// },{
//     "title":"Animals",
//     "img":"https://placeimg.com/200/200/animals"
// },{
//     "title":"tech",
//     "img":"https://placeimg.com/200/200/tech"
// },{
//     "title":"arch",
//     "img":"https://placeimg.com/200/200/arch"
// },{
//     "title":"nature",
//     "img":"https://placeimg.com/200/200/nature"
// }];

// listContent.forEach(el=>{
//     $template.querySelector("img").setAttribute("src",el.img);
//     $template.querySelector("img").setAttribute("alt",el.title);
//     $template.querySelector("figcaption").textContent = el.title;

//     let $clone = document.importNode($template,true);

//     $fragment.appendChild($clone);
// })

// $cards.appendChild($fragment);


// ======================================
//   DOM: Modificando Elementos (Old Style)
// ======================================


// const $cards = document.querySelector(".cards"),
// $newCard = document.createElement("figure"),
// $cloneCards = $cards.cloneNode(true);

// $newCard.innerHTML = `           
// <img src="https://placeimg.com/200/200/any" alt="Any">
// <figcaption>Any</figcaption>`;

// $newCard.classList.add("card");

// // $cards.replaceChild($newCard,$cards.children[2]);
// // $cards.removeChild($cards.lastElementChild);
// // $cards.insertBefore($newCard, $cards.firstElementChild);
// document.body.appendChild($cloneCards);

// ======================================
//  DOM: Modificando Elementos (Cool Style)
// ======================================

/* 
.insertAdjacent...
    .insertAdjacentElement(position,el)
    .insertAdjacentHTML(position,html)
    .insertAdjacentText(position,text)

posiciones:
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend  (hermano siguiente)
*/
// const $cards = document.querySelector(".cards"),
// $newCard = document.createElement("figure");

// let $contentCard = `           
// <img src="https://placeimg.com/200/200/any/grayscale" alt="Any">
// <figcaption></figcaption>`;

// $newCard.classList.add("card");

// $newCard.insertAdjacentHTML("beforeend",$contentCard);
// $newCard.querySelector("figcaption").insertAdjacentHTML("afterbegin","Any");

// $cards.insertAdjacentElement("beforebegin",$newCard);
// $cards.insertAdjacentElement("afterbegin",$newCard);
// $cards.insertAdjacentElement("afterend",$newCard);

// $cards.prepend($newCard);
// $cards.append($newCard);
// $cards.before($newCard);
// $cards.after($newCard);



// ======================================
//  DOM: Manejadores de eventos
// ======================================

// function showMessage(){
//     console.log(event);
// }

// const $eventSemantic = document.getElementById("event-semantic");
// const $eventMultiple = document.getElementById("event-multiple");

// $eventSemantic.onclick = showMessage;
// $eventSemantic.onclick = function(){

//     console.log("jajajaja");
//     console.log('event',event);
// }
// $eventMultiple.addEventListener('click',showMessage);

// $eventMultiple.addEventListener('click',(e)=>{
//     alert(e)
//     showMessage()
// })

// ======================================
//  DOM: EVENTOS CON PARÁMETROS  Y REMOVER EVENTOS
// ======================================

// function saludar(name = 'desconocid@'){
//     alert(`hola ${name}`);
// }

// $eventMultiple.addEventListener('click',()=> {
//     saludar("urtaav");
//     saludar()
// });


// // solo se pueden remover eventos multiples
// const $eventRemove = document.getElementById("event-remove");

// const removerDbClick = (e)=>{
//     alert("removiendo el evento",e.type)
//     console.log(e);
//     $eventRemove.removeEventListener('dblclick',removerDbClick)
//     $eventRemove.disabled = "true"
// }

// $eventRemove.addEventListener('dblclick',removerDbClick);

// ======================================
//  DOM: FLUJO DE EVENTOS(BURBUJA Y CAPTURA);
// ======================================

// function flujoEventos(e){
//     console.log(`Hola te saluda ${this}, el click lo origino ${e.target.className}`)
//     console.log(e);
//     e.stopPropagation();
// }
// const $divsEvents = document.querySelectorAll(".events-flujo div");
// const $linkEvents = document.querySelector(".events-flujo a");

// console.log($divsEvents)

// $divsEvents.forEach(div => {
//     div.addEventListener('click',flujoEventos);//fase de burbuja viene por default
//     // div.addEventListener('click',flujoEventos,false);//fase de burbuja
//     // div.addEventListener('click',flujoEventos,true);//fase de captura
//     // div.addEventListener('click',flujoEventos,{capture:false,once:true});//fase de captura


// })

// ======================================
//  DOM: PREVENCION DE EVENTOS
// ======================================
// $linkEvents.addEventListener('click',(e) => {
//     alert("hola soy yo ");
//     e.preventDefault();
// })

// ======================================
//  DOM: DELEGACIÓN DE EVENTOS
// ======================================
// document.addEventListener('click',(e) => {
//     console.log(`click en `,e.target);

//     if(e.target.matches(".event-flujo div")){
//         flujoEventos(e);
//     }
//     if(e.target.matches(".events-flujo a")){
//         alert("click en a")
//         e.preventDefault();
//     }
// })
// $divsEvents.forEach(div => {
//     div.addEventListener('click',flujoEventos);


// })

// ======================================
//  BOM: Propiedades y Eventos   BROWSER OBJECT MODEL
// ======================================
// window.addEventListener('resize',(e)=>{
//     console.clear();
//     console.log("************** evento resize ***********************")
//     console.log('innerWidth',window.innerWidth);
//     console.log('innerHeight',window.innerHeight);
//     console.log('outerWidth',window.outerWidth);
//     console.log('outerHeight',window.outerHeight);


//     console.log(e)
// })

// window.addEventListener('scroll', (e)=>{
//     console.clear();
//     console.log("************** evento scroll ***********************")
//     console.log(window.scrollX);
//     console.log(window.scrollY);
//     console.log(e)
// } )

// window.addEventListener('load',(e)=> { //se dispara hasta que se carge todo el html,los js,las imagenes
//     // console.clear();
//     console.log("************** evento load ***********************");
//     console.log(window.screenX);
//     console.log(window.screenY);
//     console.log(e)
// })

// document.addEventListener('DOMContentLoaded',(e) => { //se dispara antes de que se carge todo es recomendable para peticiones asyncronas
//     // console.clear();
//     console.log("************** evento DOMContentLoaded ***********************");
//     console.log(window.screenX);
//     console.log(window.screenY);
//     console.log(e)
// })

// ======================================
//  BOM: Métodos
// ======================================
// window.alert("Alerta")
// window.confirm("confirmacion")
// window.prompt("Prompt")

// const $btnOpen = document.getElementById("open-window")
// const $btnClose = document.getElementById("close-window")
// const $btnScreen = document.getElementById("screen-window")

// let windowOpen;

// $btnOpen.addEventListener('click',(e)=>{
//     windowOpen = window.open("https://es-la.facebook.com");
// })
// $btnClose.addEventListener('click',(e)=>{
//     windowOpen.close();
// })
// $btnScreen.addEventListener('click',(e)=>{
//     window.print()
// })



// ======================================
//  BOM: Objetos: URL, Historial y Navegador
// ======================================

// console.log("************ Objeto URL (location)")
// console.log(location)
// console.log(location.origin)
// console.log(location.protocol)
// console.log(location.port)
// console.log(location.host)
// console.log(location.hostname)
// console.log(location.href)
// console.log(location.hash)
// console.log(location.pathname)
// console.log(location.search)

// console.log("************ Objeto historial ******************************")

// console.log(history)
// console.log(history.length)
// history.forward(2)
// history.go(-3)
// history.back(3)

// console.log("************ Objeto Navegador (navigator) ******************************")
// console.log(navigator);
// console.log(navigator.conneection);
// console.log(navigator.geolocation);
// console.log(navigator.mediaDevices);
// console.log(navigator.mimeTypes);
// console.log(navigator.onLine);
// console.log(navigator.serviceWorker);
// console.log(navigator.storage);
// console.log(navigator.usb);
// console.log(navigator.userAgent);