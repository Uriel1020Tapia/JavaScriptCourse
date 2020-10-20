const d = document;
export default function slider(){
    const $nextBtn = d.querySelector(".slider-btns.next"),
    $prevBtn = d.querySelector(".slider-btns.prev"),
    $slides = d.querySelectorAll(".slider-slide"),
    $btn_prev = d.getElementById("btn-prev"),
    $btn_next = d.getElementById("btn-next");

    let i =0;
    d.addEventListener("click",(e)=>{


        if(e.target === $btn_prev  ){
    
            // e.preventDefault();
            $slides[i].classList.remove("active");
            i--;
            if(i < 0){
                i = $slides.length -1;
            }

            $slides[i].classList.add("active");

        }
        if(e.target === $btn_next){
       
            // e.preventDefault();
            $slides[i].classList.remove("active");
            i++;
            if(i >= $slides.length){
                i = 0;
            }

            $slides[i].classList.add("active");

        }
    });
}