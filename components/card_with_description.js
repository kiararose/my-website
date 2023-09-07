export default function CardWithDescription(props) {
	const image = props.image
    const description = props.description
    const image_alt = props.image_alt
    const class_name = props.class_name
    const use_link = props.use_link || false

    return (
        <div className={class_name}>
            {use_link ?
                <>
                    <img src={image} alt={image_alt} className="img-fluid"/>
                    <p>{description}</p>
                </>
                :
                <>
                <picture>
                    {/* <source media="(min-width:650px)" srcset="img_pink_flowers.jpg">
                    <source media="(min-width:465px)" srcset="img_white_flower.jpg"> */}
                    <img src={image} alt={image_alt} className="img-fluid"/>
                </picture>
                <p>{description}</p>
                </>
                
            }
        </div>
    )
}