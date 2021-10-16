export default function initAccordion(){
    const accordion = document.querySelectorAll('[data-js="accordion"] dt');
    accordion[0].classList.toggle('active-accordion');
    accordion[0].nextElementSibling.classList.toggle('active-accordion');
    if(accordion.length){
        function activeAccordion(event){
            event.target.classList.toggle('active-accordion');
            event.target.nextElementSibling.classList.toggle('active-accordion');
        };
        
        accordion.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    };
}