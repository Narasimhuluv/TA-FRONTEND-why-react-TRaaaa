let input = document.querySelector('input');
let unorderList = document.querySelector('ul')

let allMovies = []

input.addEventListener('keyup', (event) => {
    if(event.keyCode === 13){
        allMovies.push({
            name : event.target.value,
            watched : false
        })
        createUI()
        event.target.value = '';
    }
    
})

function createUI(){
    allMovies.forEach((elem) => {
        let list = document.createElement('li');
        list.classList.add('list')

        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.checked = elem.watched
        checkbox.classList.add('checkbox')

        let movieName = document.createElement('h3')
        console.log(elem.name)
        movieName.innerText = elem.name;
        movieName.classList.add('movieName')

        // if(elem.watched == true){
        //     movieName.style.textDecoration = 'line-through'
        // }else{
        //     movieName.style.textDecoration = 'none'
        // }
        
        let cross = document.createElement('p');
        cross.innerText = 'Watch'


        cross.addEventListener('click', () => {
            if(cross.innerText === 'Watch'){
                cross.innerText = 'Watched'
                cross.style.color = 'green'
            }else{
                cross.innerText = 'Watch'
                cross.style.color = 'red'
            }
        })

        

        list.append(checkbox, movieName, cross)
        unorderList.append(list)
    })
    allMovies = [];
}
