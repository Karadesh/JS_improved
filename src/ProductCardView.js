export default class ProductCardView {
    constructor(data){
        this.data = data
        this.element = null
    }

    render(container){
        container.append(this.getElement())
    }

    getId(){
        return this.data.id
    }

    getHtml(){
        return `<h2>${this.data.title}</h2><p>${this.data.price}</p>`
        
    }

    getElement(){
        if(this.element) return this.element

        this.element = document.createElement('DIV')
        this.element.classlist.add('card')
        this.element.insertAjacentHtml('afterbegin', this.getHtml())
    }

    update(data){
        this.data = data;
        this.element.textContent = ''
        this.element.insertAdjacentHTML('afterbegin', this.getHtml())
        return this.element
    }
}