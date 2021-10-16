export default function initModal(){
    const modal = document.querySelector('[data-modal="container"]')
    const botaoAbrir = document.querySelector('[data-modal="abrir"]')
    const botaoFechar = document.querySelector('[data-modal="fechar"]')

    if(modal && botaoFechar && botaoAbrir){
        function abrirModal(event){
            event.preventDefault()
            modal.classList.add('ativo')
        }
        
        function FecharModal(event){
            event.preventDefault()
            modal.classList.remove('ativo')
        }
        
        function clickFora(event){
            if(event.target === this)
                FecharModal(event);
        }
        
        botaoAbrir.addEventListener('click', abrirModal)
        botaoFechar.addEventListener('click', FecharModal)
        modal.addEventListener('click', clickFora)
    }
}