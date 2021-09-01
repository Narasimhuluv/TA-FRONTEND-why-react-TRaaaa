import Articles from "./Articles";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

function App(props) {
    return (
        <div>
            <Header />
            <Hero />
            <Articles />
            <Footer />
        </div>
    )
}
export default App;
