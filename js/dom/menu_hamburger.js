export  function hamburgerMenu(btnMenu,panel,link_menu){
    const d = document,
    w = window;

    d.addEventListener('click',(e)=> {
        if(e.target.matches(btnMenu) || e.target.matches(`${btnMenu} *`)){//aplicar el listener a los elementos que esten dentro del boton
            
            d.querySelector(panel).classList.toggle("panel-is-active");//add-remove-clases
            d.querySelector(btnMenu).classList.toggle("is-active");
            
            const  $scrollBtn = d.querySelector(".scroll-top-btn");//btn-scroll-top
            let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

            if(d.querySelector(panel).classList.contains("panel-is-active")){
                d.body.style.overflow = 'hidden'; 
                if (scrollTop > 600) {
                    $scrollBtn.classList.add("hidden");
                }
            }else{
                d.body.style.overflow = 'visible'; 
                if (scrollTop > 600) {
                    $scrollBtn.classList.remove("hidden");
                }
            }
        }

        if(e.target.matches(link_menu)){
            d.querySelector(panel).classList.remove("panel-is-active");//add-remove-clases
            d.querySelector(btnMenu).classList.remove("is-active");
            if(d.querySelector(panel).classList.contains("panel-is-active")){
                d.body.style.overflow = 'hidden'; 
            }else{
                d.body.style.overflow = 'visible'; 
            }
        }
    })
}
