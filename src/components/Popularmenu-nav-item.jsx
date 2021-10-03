
export default function PopularmenuNavItem({ itemImg, itemName, itemContent, active }) {
    return (
        <a className={"nav-item nav-link " + active} data-toggle="tab" href={itemContent}>
            <div className="single-menu-nav text-center">
                <div className="menu-img margin-bottom-10">
                    <img src={itemImg} alt="" />
                </div>
                <h6>{itemName}</h6>
                <span className="g-s-4"><img src="/images/shapes/10.png" alt="" /></span>
                <span className="g-s-5"><img src="/images/shapes/14.png" alt="" /></span>
            </div>
        </a>
    )
}