// import database from '../data';
import allArticles from '../data/data'
function Articles(props){
    return(
        <section className="articles_sec">
            <div className="container">
                <h1 className="heading">Articles</h1>
                <div className="allarticles flex justify_between flex_wrap">  
                    {allArticles.map((element) => (
                        <Card {...element} /> 
                        // <Card  info={element} /> 
                        ))}
                </div>
            </div>
        </section>
    )
}

function Card(props){
    return (
        <article className="eachcard flex_30">
            {/* <img src="https://static.coindesk.com/wp-content/uploads/2020/05/btc-chart-may-12-1200x628.png" alt="" /> */}
            <img src={props.urlToImage} alt="" />
            <h2>{props.title}</h2>
        </article>
    )
}

export default Articles;