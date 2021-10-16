export default function initTab(){
    const animais = document.querySelectorAll('[data-js="tab-menu"] li')
    const tabContent = document.querySelectorAll('[data-js="tab-content"] section')
    tabContent[0].classList.add('show-anime')

    if(animais.length && tabContent.length){
        function activeTab(index){
            tabContent.forEach((section) => {
                section.classList.remove('show-anime')
            })
        
            tabContent[index].classList.add('show-anime')
        }
        
        animais.forEach((item, index) => {
            item.addEventListener('click', () => {
                activeTab(index)
            })
        })
    }
}
