export default function RotatingLink(props) {
	const link = props.link || "#!"

    return (
        <a href={link} className="link" target="_blank" rel="noopener noreferrer">
			<svg viewBox='0 0 200 200' width='200' height='200' xmlns='http://www.w3.org/2000/svg' className="link__svg" aria-labelledby="link2-title link2-desc">
				
				<path id="link-circle-alt" className="link__path" d="M 35, 100 a 65,65 0 1,1 130,0 a 65,65 0 1,1 -130,0" stroke="none" fill="none" />

				<path className="link__arrow" d="M 75 100 L 125 100 L 110 85 M 125 100 L 110 115"  fill="none" />

				<text className="link__text">
					<textPath href="#link-circle-alt" stroke="none">
						click and view this link
					</textPath>
				</text>
			</svg>
		</a>
    )
}