import { useState } from "react";
import Data from "../memesData";

const Meme = () => {
    // const [memeImage, setMemeImage] = useState("");
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });

    const [allMemeImages, setAllMemeImages] = useState(Data);

    const getMemeImage = () => {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: url,
        }));
    };

    const handleChange = (event) => {
        setMeme(prevMeme =>({
            ...prevMeme,
            [event.target.name]: event.target.value
        }));
    }

    return (
        <main>
            <div className="form">
                <div className="form-inputs">
                    <input
                        type="text"
                        placeholder="Top text"
                        className="form-input1"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                    <input
                        type="text"
                        placeholder="Bottom text"
                        className="form-input2"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </div>
                <button className="form-button" onClick={getMemeImage}>
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img
                    className="meme-img"
                    src={meme.randomImage}
                    alt="crazy face"
                />
                <h2 className="meme-text-top">{meme.topText}</h2>
                <h2 className="meme-text-bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
};

export default Meme;
