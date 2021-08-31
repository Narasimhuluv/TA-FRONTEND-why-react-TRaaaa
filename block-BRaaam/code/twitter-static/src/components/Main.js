function Main(props){
    return(
        <div className="flex_48 main">
            <Header />
            <Article imgfile="../images/stevejobs.jpeg"/>
            <Article imgfile="../images/me.jpeg"/>
            <Article imgfile="../images/dog.jpg"/>
            <Article imgfile="../images/me.jpeg"/>
            <Article imgfile="../images/stevejobs.jpeg"/>
        </div>
    )
}

// Header component
function Header(){
    return(
        <div className="header">
            <div className="home_stars flex justify_between items_center">
                <h3>Home</h3>
                <h4><i class="fas fa-bahai"></i></h4>
            </div>
            <div className="input_fields flex">
                <img className="dog" src="../images/dog.jpg" alt="img" />
                <div className="input_area">
                    <input type="text" placeholder="What's happening ?" />
                    <div className="icons_sec flex items_center justify_between">
                        <div className="icons">
                            <i class="fas fa-image"></i>
                            <i class="far fa-file-pdf"></i>
                            <i class="far fa-chart-bar"></i>
                            <i class="far fa-smile-wink"></i>
                            <i class="far fa-calendar-check"></i>
                        </div>

                        <a className="tweet_send" href="">Tweet</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Article Component
function Article(props){
    return(
        <div className="article flex items_start">
            <img className="dog profile_article" src={props.imgfile} alt="profile pic" />
            <div className="details">
                <h4>Sriram Krishnan</h4>
                <span></span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias tempora culpa eius fugit.</p>
                <div className="sharing_icons flex justify_between">
                    <i class="far fa-comment"></i>
                    <i class="far fa-share-square"></i>
                    <i class="far fa-heart"></i>
                    <i class="far fa-caret-square-up"></i>
                </div>

            </div>
        </div>
    )
}


export default Main;