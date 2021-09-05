import colorNames from '../colors.json';
function App(){
    // console.log(colorNames)
    return(
        <div className="container">
            <div className="colors_loop">
                {colorNames.map((elem) => (
                        <Color />
                    ))}
                
            </div>
        </div>
    )
}


function Color(props){
    
    return(
        <div>
            <div className="box">
            </div>
        </div>
    )
}
export default App
