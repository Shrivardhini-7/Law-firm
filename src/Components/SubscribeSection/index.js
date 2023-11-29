import "./SubscribeSection.css"

let SubscribeSection = () => {
    return(<>
    <div className="section-8">
        <div className="subscribe-section">
            <h2 className="subscribe-section-heading">Subscribe Our Newsletter</h2>
            <form>
                <input className="input-name" type="text" placeholder=" Name:"></input>
                <input className="input-email" type="text" placeholder=" Enter your email"></input>
                <button className="send-btn" type="submit">SEND</button>
            </form>
        </div>
    </div>
    </>)
}

export default SubscribeSection;