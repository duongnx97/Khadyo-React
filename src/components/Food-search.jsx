
export default function FoodSearch({ keyWord}) {

    const onInputChange = (value) => {
        keyWord(value)
    }

    return (
        <div className="single-widget search-widget  wow fadeInUp ">
            <div className="header-search">
                <form action="#">
                    <input type="text" placeholder="Search..." onChange={ (event) => onInputChange( event.target.value )} />
                    <button type="submit" disabled><i className="fa fa-search"></i></button>
                </form>
            </div>
        </div>
    )
}