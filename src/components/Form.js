const Form = () => {
    const handleChange = (event) => {};

    const handleSubmit = (event) => {
        alert("An essay was submitted: ");
        event.preventDefault();
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="textareas">
                <textarea className="textarea1" onChange={handleChange} />
                <textarea className="textarea2" onChange={handleChange} />
            </div>
            <input className="submit" type="submit" value="Get a new meme image 🖼" />
        </form>
    );
};

export default Form;
