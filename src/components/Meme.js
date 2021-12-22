import {useState} from "react";
import Data from "../memesData";

const Meme = () => {
    const [memeImage, setMemeImage] = useState("");

    const getMemeImage = () => {
        const memesArray = Data.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setMemeImage (prevMeme => (prevMeme = memesArray[randomNumber].url));
 
    }

    

    return (
        <main>
            <div className="form">
                <div className="form-inputs">
                    <input
                        type="text"
                        placeholder="Top text"
                        className="form-input1"
                    />
                    <input
                        type="text"
                        placeholder="Bottom text"
                        className="form-input2"
                    />
                </div>
                <button className="form-button" onClick={getMemeImage}>
                    Get a new meme image 🖼
                </button>
            </div>
            <img className="meme-img" src={memeImage} alt="crazy face" />
        </main>
    );
};

export default Meme;
