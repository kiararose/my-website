export default function CardHover(props) {
	const image = props.image
    const image_mobile = props.image_mobile
    const description = props.description
    const image_alt = props.image_alt
    const col_class_name = props.col_class_name
    const button_name = props.button_name

    return (
        <div className={`card-hover ${col_class_name}`}>
            <picture className="card-hover-image">
                <source media="(max-width:500px)" srcset={image_mobile} />
                <img src={image} alt={image_alt} className="img-fluid"/>
            </picture>
            <div className="card-hover-info">
                <p className="card-hover-info__description">{description}</p>
                <button className="card-hover-info__button">{button_name}</button>
                <span className="card-hover-info__tags">HTML, CSS, Javascript</span>
            </div>
        </div>
    )
}