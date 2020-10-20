const d = document;
export default function responsiveTest(idForm){
    const $form = d.getElementById(idForm);
    let tester;

    d.addEventListener('submit',(e)=>{
        if(e.target === $form){
            e.preventDefault();
            tester = window.open(
                $form.direction.value,
                "tester",
                `innerWidth=${$form.width.value},innerHeight=${$form.clientHeight.value}`
            );
        }
    });
    d.addEventListener('click',(e)=>{
        if(e.target === $form.close)tester.close();
    });
}