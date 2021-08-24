var input = document.querySelector('input')
var unorderlist = document.querySelector('ul')
var allMovies = [];

input.addEventListener('keyup', (event) => {
    if(event.keyCode === 13 ){
        allMovies.push({
            name : event.target.value,
            watched : true
        })
        event.target.value = ''
        createUI()
    }
})

var elem = React.createElement;
function createUI(){
    event.preventDefault();
    // unorderlist.innerText = "";
   let ui =  allMovies.map((each) => {
        var list = elem('li', {
            className : "list"
        }, 
                        elem('input', {
                           className : "checkbox",
                           type : "checkbox",
                            "each.watched" : true,
                        }),
                        elem('h3', {}, each.name),
                        elem('p', {}, "X"),
            
                )
                return list
            });
    ReactDOM.render(ui, unorderlist)
}
