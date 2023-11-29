import "./Footer.css"

let Footer = () => {
    return(<>
    <div className="section-9">
        <div className="flex-one">
        <div className="logo-image">
            <img src= "Vector.png" alt="Vector Img"></img>
            <img src= "Igstudio.png" alt="Igstudio Img"></img>
        </div>
        <div className= "flex-one-contents">
            <div>Home</div>
            <div>Attorneys</div>
            <div>Practice Areas</div>
            <div>About Us</div>
        </div>
        <div className="icons">
            <img src="Icons/Instagram.png" alt="icon"></img>
            <img src="Icons/Facebook.png" alt="icon"></img>
            <img src="Icons/Twitter.png" alt="icon"></img>
            <img src="Icons/Pinterest.png" alt="icon"></img>
        </div>
        </div>
        <div className="flex-two">
            <div>© 2020 Acme. All right reserved.</div>
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
        </div>
    </div>
    </>)
}
export default Footer;