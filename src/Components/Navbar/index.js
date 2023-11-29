import "./Navbar.css"

let Navbar = () => {
    return (<div className="navbar">
        <div className="logo-image">
            <img src= "Vector.png" alt="Vector Img"></img>
            <img src= "Igstudio.png" alt="Igstudio Img"></img>
        </div>
        <div className= "contents">
            <div>Home</div>
            <div>Attorneys</div>
            <div>Practice Areas</div>
            <div>About Us</div>
        </div>
        <div className="button">Contact Now</div>

    </div>);
}

export default Navbar;