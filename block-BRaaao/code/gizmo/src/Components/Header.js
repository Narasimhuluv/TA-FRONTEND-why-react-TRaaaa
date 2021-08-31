function Header(){
    return (
        <header className="header">
            <div className="container flex items_center justify_between">
            <img src="../images/birdlogo.png" alt="" />
            <nav>
                <ul className="flex flex_48">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}
export default Header;