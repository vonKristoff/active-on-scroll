export default class {
    constructor(selector) {
        this.els = document.querySelectorAll(selector)
        this.collection = []
        Array.from(this.els).forEach(convertToObjects.bind(this))
    }    
    toggleState(item) {
        if(item.visible && !item.el.classList.contains('is-active')) item.el.classList.add('is-active')
        if(!item.visible && item.el.classList.contains('is-active')) item.el.classList.remove('is-active')
    }
    update() {
        this.collection.forEach(item => {
            let bounds = item.el.getBoundingClientRect()
            item.visible = (bounds.bottom < (window.innerHeight + item.el.clientHeight) && bounds.top > (-item.el.clientHeight))
            this.toggleState(item)
        })
    }
}
function convertToObjects(el, index) {
    this.collection.push({ id: index, el, visible: false })
}