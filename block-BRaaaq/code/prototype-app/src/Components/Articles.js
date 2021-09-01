// import database from '../data';
import allArticles from '../data/data'
import PropTypes from 'prop-types';
function Articles(props){
    return(
        <section className="articles_sec">
            <div className="container">
                <h1 className="heading">Articles</h1>
                <div className="allarticles flex justify_between flex_wrap">  
                    {allArticles.map((element) => (
                        <Card key={element.id}  {...element} /> 
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
            <h2>{props.title.toUpperCase()}</h2>
        </article>
    )
}

Card.propTypes = {
    title : PropTypes.string,
    url : PropTypes.string,
}

export default Articles;