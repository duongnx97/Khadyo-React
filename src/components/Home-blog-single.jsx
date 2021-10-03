import { Link } from "react-router-dom";

export default function HomeBlogSingle({blogImg, day, month, tag, author, title}) {
    return (
        <div className="single-blog">
            <div className="blog-img">
                <Link to="#">
                    <img src={"/images/blog/" + blogImg} alt="" />
                </Link>
                <div className="b-badge">
                    <span className="date"><Link to="#">{day}</Link></span><br />
                    <span className="month"><Link to="#">{month}</Link></span>
                </div>
            </div>
            <div className="blog-meta d-flex justify-content-between">
                <span><Link to="#"><i className="fas fa-tags"></i>{tag}</Link></span>
                <span><Link to="#"><i className="fas fa-user-circle"></i>{author}</Link></span>
            </div>
            <h4><Link to="#">{title}</Link></h4>
        </div>
    )
}