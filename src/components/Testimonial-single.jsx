
export default function TestimonialSingle({img, name, position, more}) {
    return (
        <div className="single-testimonial">
            <div className="testi-top">
                <div className="tin-shapes">
                    <span className="tsin-1"><img src="/images/shapes/33.png" alt="" /></span>
                </div>
                <div className="testi-img">
                    <img src={img} alt="" />
                </div>
                <div className="testi-meta">
                    <h6>{name}</h6>
                    <p>{position}</p>
                    <div className="testi-rating">
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                    </div>
                </div>
            </div>
            <p>{more}</p>
        </div>
    )
}