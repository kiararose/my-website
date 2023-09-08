export default function CardWithImageDescription(props) {
	const image = props.image
    const description = props.description
    const image_alt = props.image_alt
    const class_name = props.class_name

    return (
        <div className={class_name}>
            <picture >
                <source srcset={image} />
                <img src={image} alt={image_alt} className="img-fluid"/>
            </picture>
            <p>{description}</p>
        </div>
    )
}