export default function IntroductionHeader(props) {
	const intro = props.intro
	const show_image = props.show_image 

    return (
        <div className="intro-header">
			{show_image &&
				<div className="intro-header__image">
					<img className="img-fluid" src="/images/monkey-peeking.png" alt="" />
				</div>
			}
			
			<div className="intro-header__description">
				<h1>
					{intro}
				</h1>
			</div>
        </div>
    )
}