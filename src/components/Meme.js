import Data from "../memesData";

const Meme = () => {
    function getMemeImage() {
        const memesArray = Data.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        console.log(url);
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
        </main>
    );
};

export default Meme;
