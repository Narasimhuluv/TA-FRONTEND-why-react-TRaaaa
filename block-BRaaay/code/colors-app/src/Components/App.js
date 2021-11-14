import allcolors from '../colors'
import array  from '../data'
function App(){
    console.log(allcolors)
    return(
        <div>
            {
                Object.keys(allcolors).map((key) => (
                    // console.log(key)
                    // console.log(allcolors[key])
                    <Color name={key} allColors={allcolors[key]} />
                ))
            }

            {
                array.map((each) => (
                    console.log(each)
                ))
            }
        </div>
    )  
}


function Color(props){  
    return(
        <div className="container">
            <p>{props.name}</p>
            <ul>
                {props.allColors.map((color,i) => (
                    <li>
                        <div className="color-box" style={{backgroundColor : color}}></div>
                        <div className="info">
                            <span>{i === 0 ? 50 : i * 100 }</span>
                            <span className="colorName">{color}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default App
