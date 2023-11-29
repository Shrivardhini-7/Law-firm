import "./Introduction.css"
import Navbar from"../Navbar"

let Introduction = () => {
    return (<>
    <div className = "section-1">
        <div className = "navbar-section">{Navbar()}</div>
        <div className = "description">
            <div className = "text">
                <h3>You don't have to</h3>
                <h2>Fight them Alone.</h2>
                <p className = "intro-para">Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
                <div className="email">
                  
                  <input className="email-input" type="text" placeholder="           Enter your email address">
                  
                  </input>
                  <img className="mail-icon" src="Icons/mail.png" alt="mail"></img>
                  <button className="lets-talk-button">Let's Talk</button>
                </div>
            </div>
            <div className = "main-img">
                <img src= "manimg.png" alt = "mainimage"></img>
            </div>
        </div>
    </div>
    <div className="section-2">
        <div className ="content">
        <h5>Let's Introduce Ourself</h5>
        <div className="vertical-division"></div>
        <div className="intro-desc">
         <h4 >Criminal Lawyer</h4>
         <p className="desc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exercitation.</p>
        </div>
            
        
        </div>
        
    </div>
    </>);
}

export default Introduction;