import RotatingLink from "./rotating_link"
import LazyLoad from "../components/lazy_load";

export default function CardHover(props) {
	const image = props.image || ''
    const image_mobile = props.image_mobile || ''
    const description = props.description || ''
    const image_alt = props.image_alt || ''
    const col_class_name = props.col_class_name || ''
    const tags = props.tags || ''
    const year = props.year || ''
    const link = props.link || '!#'

    return (
        <div className={`card-hover ${col_class_name}`}>
            <LazyLoad>
                <picture className="card-hover-image">
                    <source media="(max-width:500px)" srcset={image_mobile} />
                    <img src={image} alt={image_alt} className="img-fluid"/>
                </picture>
                <div className="card-hover-info">
                    <p className="card-hover-info__description">{description}</p>
                    <RotatingLink link={link} />
                    <span className="card-hover-info__tags">{tags}</span>
                    <span className="card-hover-info__year">{year}</span>
                </div>
            </LazyLoad>
        </div>
    )
}