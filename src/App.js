import Header from "./components/Header/Header";
import "./components/Header/Header.css";
import Meme from "./components/Meme/Meme";
import "./components/Meme/Meme.css"
import Footer from "./components/Footer/Footer";
import "./components/Footer/Footer.css";

function App() {
    return (
        <div className="container">
            <div className="left"></div>
            <div className="center">
                <Header />
                <Meme />
                <Footer />
            </div>
            <div className="right"></div>
        </div>
    );
}

export default App;
