import "./WhyUsSection.css"

let card = (percent,bgcolor) => {
    return(<>
    <div className="card" style={{backgroundColor: bgcolor === "darkgray" ? "#1D1D1D" : "#2E2E2E"}}>
        <div>
            <img src="gift.png" alt="giftimage"></img>
        </div>
        <h2 className="success-rate">{percent}% Success Rate</h2>
        <p className= "success-rate-desc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p>
        <button className="readmore-btn">Read more</button>
    </div>
    </>)
}

let WhyUs = () =>{ 
  return (<>
  <div className="section-3">
    <h3 className="section-3-heading">Why Choose Us?</h3>
    <div className="cards-section">
        {card(98, "darkgray")}
        {card(100, "lightgray")}
        {card(100, "darkgray")}
    </div>
  </div>
 </>)
}

export default WhyUs;