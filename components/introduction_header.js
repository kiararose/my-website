import LazyLoad from "../components/lazy_load";

export default function IntroductionHeader(props) {
	const intro = props.intro
	const role = props.role
	const location = props.location
	const details = props.details
	const description = props.description
	const show_image = props.show_image 
	const cta = props.cta
	const skills_scroll = props.skills_scroll

    return (
		<LazyLoad>
			<div className="intro-header">
				{show_image &&
					<div className="intro-header__image">
						<img className="img-fluid" src="/images/monkey-peeking.png" alt="" />
					</div>
				}

				{intro ?
					<div className="intro-header__intro">
						<h1>{role}</h1>
						<h1>{location}</h1>
					</div>
					:
					<></>
				}

				{details ?
					<div className="intro-header__details">
						{cta &&
							<div className="intro-details__cta">
								<a href="#!" onClick={skills_scroll}>
									{cta}
									<svg viewBox='0 0 200 200' width='200' height='200' xmlns='http://www.w3.org/2000/svg' className="link__svg" aria-labelledby="link2-title link2-desc">
										<path className="link__arrow" d="M 75 100 L 125 100 L 110 85 M 125 100 L 110 115"  fill="none" />
									</svg>
								</a>
							</div>
						}
						
						{description &&
							<div className="intro-details__description">		
								{description}
							</div>
						}
					</div>
					:
					<></>
				}
			</div>
		</LazyLoad>
    )
}