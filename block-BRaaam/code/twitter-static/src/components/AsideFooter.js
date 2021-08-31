function AsideFooter(){
    return(
        <div className="footer flex_30">
            <Search />
            <h2 className="whats">What's happening</h2>
            <Happening />
            <Happening />
        </div>
    )
}

function Search(){
    return(
        <div className="search">
            <input type="text" placeholder="Search Twitter" />
        </div>
    )
}

function Happening(){
    return(
        <div className="covid_article flex justify_between items_center">
            <div>
                <p>Covid-19 Live</p>
                <h3>Covid-19 India</h3>
            </div>
            <img className="dog covid" src="../images/covid.jpg" alt="" />
        </div>
    )
}

export default AsideFooter;