import "./ClientReviews.css"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

let card = (image, name, bgcolor) => {
    return(<>
    <div className="review-card" style={{backgroundColor: bgcolor === "darkgray" ? "#1D1D1D" : "#2E2E2E"}}>
        <div>
            <img src={image} alt={name}></img>
        </div>
        <h2 className="name">{name}</h2>
        <h1 className="position">Ceo of Hunt</h1>
        <p className= "review">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p>
    </div>
    </>)
}

let ClientReviews = () => {
    return(<>
    <div className="section-5">
        <div className="carousel">
            <div className="carousel-head">
                <div className="carousel-heading">What says our happy Clients</div>
                <div className= "nav-buttons">
                    <button className="nav-left">
                        <img className="nav" src="leftnav.png" alt="leftnav"></img>
                    </button>
                    <button className="nav-right">
                    <img className="nav" src="rightnav.png" alt="rightnav"></img>
                    </button>
                </div>
            </div>
            <Swiper
               modules={[Virtual, Navigation, Pagination]}
               slidesPerView={3}
               spaceBetween={30}
               navigation={{ nextEl: ".nav-right" , prevEl: ".nav-left" }}
               virtual
               parallax="true"
            >
            <div className="review-cards-section">
            <SwiperSlide key="1">
            {card("person1.png", "Jane Cooper", "darkgray")}
            </SwiperSlide>
            <SwiperSlide key="2">
            {card("person2.png", "Davon Lane", "lightgray")}
            </SwiperSlide>
            <SwiperSlide key="3">
            {card("person3.png", "Robert Fox", "darkgray")}
            </SwiperSlide>
            <SwiperSlide key="4">
            {card("person1.png", "Jane Cooper", "darkgray")}
            </SwiperSlide>
            <SwiperSlide key="5">
            {card("person2.png", "Davon Lane", "lightgray")}
            </SwiperSlide>
            <SwiperSlide key="6">
            {card("person3.png", "Robert Fox", "darkgray")}
            </SwiperSlide>
            </div>
            </Swiper>
        </div>
    </div>
    </>)
}

export default ClientReviews;