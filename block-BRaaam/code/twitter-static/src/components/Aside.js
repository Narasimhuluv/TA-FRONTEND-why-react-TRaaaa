function Aside(props) {
    return (
        <div className="flex_24 aside flex flex_column justify_between">
            <div>
                <h3 className="icon"><i class="fab fa-twitter"></i></h3>
                <h3 className="home"><i class="fas fa-home"></i> Home</h3>
                <h3><i class="fab fa-yelp"></i> Explore</h3>
                <h3><i class="fas fa-bell"></i> Notification</h3>
                <h3><i class="fas fa-envelope"></i> Message</h3>
                <h3><i class="far fa-bookmark"></i> BookMarks</h3>
                <h3><i class="far fa-list-alt"></i> Lists</h3>
                <h3><i class="fas fa-user"></i> Profile</h3>
                <h3><i class="far fa-list-alt"></i> Lists</h3>
                <a className="tweet" href="">Tweet</a>
            </div>

            <div className="flex items_center">
                <img className="dog" src="../images/dog.jpg" alt="img" />
                <div className="profile">
                    <h4>Narasimhuluv....</h4>
                    <p>@me !</p>
                </div>
            </div>
        </div>
    )
}

export default Aside
