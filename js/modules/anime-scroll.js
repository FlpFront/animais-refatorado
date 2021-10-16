export default function initScroll(){
    const sections = document.querySelectorAll('[data-js="scroll"]');
    sections[0].classList.add('active-scroll');
    const windowMiddle = window.innerHeight * 0.6
    if(sections.length){
        function activeScroll(event){
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top
                const isSectionSmall = sectionTop - windowMiddle < 0
                if(isSectionSmall){
                    section.classList.add('active-scroll');
                };
            });
        };
        window.addEventListener('scroll', activeScroll);
    }
}
