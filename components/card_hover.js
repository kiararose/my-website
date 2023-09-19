import RotatingLink from "./rotating_link"
import LazyLoad from "../components/lazy_load";

export default function CardHover(props) {
	const image = props.image || ''
    const image_mobile = props.image_mobile || ''
    const title = props.title || ''
    const image_alt = props.image_alt || ''
    const col_class_name = props.col_class_name || ''
    const tags = props.tags || ''
    const date = props.date || ''
    const link = props.link || '!#'

    return (
        <div className={`card-hover ${col_class_name}`}>
            <LazyLoad>
                <picture className="card-hover-image">
                    <source media="(max-width:500px)" srcSet={image_mobile} />
                    <img src={image} alt={image_alt} className="img-fluid"/>
                </picture>
                <div className="card-hover-info">
                    <p className="card-hover-info__title">{title}</p>
                    <RotatingLink link={link} />
                    <div className="card-hover-info__tags">
                        {tags.map((t, index) => {
                            return (
                                <span key={index}>{t}</span>
                            )
                        })}
                    </div>
                    <span className="card-hover-info__date">{date}</span>
                </div>
            </LazyLoad>
        </div>
    )
}