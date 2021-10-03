export default function Commontitle({txtTop, txtBlue, txtRed}) {
    return (
        <div className="common-title-area text-center padding-bottom-50 wow fadeInUp">
            <h3>{txtTop}</h3>
            <h2>{txtBlue} <span>{txtRed}</span></h2>
        </div>
    )
}