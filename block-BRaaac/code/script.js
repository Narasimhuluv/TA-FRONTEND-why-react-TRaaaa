var input = document.querySelector('.movie')
var unorderlist = document.querySelector('ul')
var allMovies = [];

input.addEventListener('keyup', (event) => {
    if(event.keyCode === 13 ){
        allMovies.push({
            name : event.target.value,
            watched : false
        })
        event.target.value = ''
        createUI()
    }
})

function elem(type, attr={}, ...children){
    let element = document.createElement(type);

    children.forEach((child) => {
        for(let key in attr){
            if(key.startsWith("data-")){
                element.startsWith(key.attr[key])
            }else{
                element[key] = attr[key]
            }
        }

        if(typeof child === "object"){
            element.append(child)
        }
        if(typeof child === "string"){
            var node = document.createTextNode(child)
            element.append(node)
        }
    })
    return element
}

function createUI(){
    event.preventDefault()
    unorderlist.innerHTML = ""
    allMovies.forEach((each) => {
        var list = elem('li', {
            className : "list"
        }, 
                        elem('input', {
                           className : "checkbox"
                        }),
                        elem('h3', {}, each.name),
                        elem('p', {
                            className : "cross"
                        }, "X"))

        unorderlist.append(list)
        var cross = document.querySelector('.cross')   
        cross.addEventListener('click', () => {
            list.style.display = "none"
        })
    });

}