import { Link } from "react-router-dom";

export default function BlogpostSingle({ blogImg, blogDay, blogMonth, blogTag, blogAuthor, blogComment, blogTitle, blogContent }) {
    return (
        <div className="blog-single-post wow fadeInUp">
            {
                blogImg === ""
                    ? <div className="blog-upper-content">
                        <div className="meta-date">
                            <span className="bold">{blogDay}</span>
                            <span>{blogMonth}</span>
                        </div>
                    </div>
                    : <div className="blog-thumbnail">
                        <Link to="blog-single.html"><img src={"/images/blog/" + blogImg} alt="thumbnail" /></Link>
                        <div className="meta-date">
                            <span className="bold">{blogDay}</span>
                            <span>{blogMonth}</span>
                        </div>
                    </div>
            }
            <div className="blog-content-part">
                <div className="blog-content-top">
                    <div className="blog-date margin-right-20">
                        <Link to="#"><i className="fas fa-tag"></i>{blogTag}</Link>
                    </div>
                    <div className="blog-tag margin-right-20">
                        <Link to="#"> <i className="fas fa-user-circle"></i>{blogAuthor}</Link>
                    </div>
                    <div className="blog-author">
                        <Link to="#"><i className="fas fa-comments"></i> {blogComment}+ Comment</Link>
                    </div>
                </div>
                <div className="blog-title">
                    <h4><Link to="blog-single.html">{blogTitle}</Link></h4>
                </div>
                <div className="blog-content">
                    <p>{blogContent}</p>
                </div>
                <div className="blog-excerpt-link">
                    <Link to="#" className="btn">read more</Link>
                </div>
            </div>
        </div>
    )
}