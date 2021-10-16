export default function initTooltip(){

}

const tooltips = document.querySelectorAll('[data-tooltip]')

tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver)
})

function onMouseOver(event){
    const tooltipBox = createTagBox(this)
    onMouseDirection.tooltipBox = tooltipBox
    this.addEventListener('mousemove', onMouseDirection)

    onMouseLeave.tooltipBox = tooltipBox
    this.addEventListener('mouseleave', onMouseLeave)


}

const onMouseLeave = {
    tooltipBox: '',
    handleEvent(){
        this.tooltipBox.remove()
    }
}

const onMouseDirection = {
    handleEvent(event){
        this.tooltipBox.style.top = event.pageY + 20 +'px';
        this.tooltipBox.style.left = event.pageX + 20 + 'px';
    }
}

function createTagBox(element){
    const tooltipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')
    tooltipBox.classList.add('tooltip')
    tooltipBox.innerText = text
    document.body.appendChild(tooltipBox)
    return tooltipBox
}