const Header = () => {
    return (
        <div className="header">
            <div className="troll">
                <img
                    className="troll-ikon"
                    src="../images/troll-face.png"
                    alt="troll face"
                />
                <h3 className="troll-title">MemeGenerator</h3>
            </div>
            <p className="header-text">React Course Project</p>
        </div>
    );
};

export default Header;
