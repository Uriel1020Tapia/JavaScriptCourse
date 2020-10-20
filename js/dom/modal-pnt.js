export  function showModal(btnModalPnt,modalPnt){
    const d = document,
    w = window,
    modal = d.getElementById(modalPnt);

    d.addEventListener('click',(e)=> {
    console.log("e==",e)
        if(e.target.matches(btnModalPnt) || e.target.matches(modalPnt)){//aplicar el listener a los elementos que esten dentro del boton
            console.log("click",modalPnt)
            d.querySelector(".modal-content").classList.add("_slideInTop");
           modal.classList.toggle("_showModal");

        }
    })
}
