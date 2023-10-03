export default function RotatingLink(props) {
	const link = props.link || "#!"
	const is_deployed = props.is_deployed || false
	const title = props.title || ''

    return (
        <a href={is_deployed || title === "My Portfolio" ? link : "#!"} className={`${!is_deployed || title === "My Portfolio" ? 'disabled' : ''} link`} target="_blank" rel="noopener noreferrer">
			<svg viewBox='0 0 200 200' width='200' height='200' xmlns='http://www.w3.org/2000/svg' className="link__svg" aria-labelledby="link2-title link2-desc">
				
				<path id="link-circle-alt" className="link__path" d="M 35, 100 a 65,65 0 1,1 130,0 a 65,65 0 1,1 -130,0" stroke="none" fill="none" />

				{is_deployed === true && title !== "My Portfolio" ?
					<path className="link__arrow" d="M 75 100 L 125 100 L 110 85 M 125 100 L 110 115"  fill="none" />
				:
					<g className="link__face">
						<path d='M 95 102 Q 100 107 105 102' fill="none" />
						<ellipse className='' cx='90' cy='100' rx='2' ry='2' stroke="none" />
						<ellipse className='' cx='110' cy='100' rx='2' ry='2' stroke="none" />
						<ellipse className='' cx='100' cy='100' rx='35' ry='35' fill="none" />
					</g>
				}

				<text className="link__text">
					<textPath href="#link-circle-alt" stroke="none">
						{
							title !== "My Portfolio" ?
								( is_deployed ? 
								'click and view this link' 
								: 
								'coming soon ♡ coming soon'
								)
							:
							'You are already here haha'
						}
					</textPath>
				</text>
			</svg>
		</a>
    )
}