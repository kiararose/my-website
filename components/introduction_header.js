export default function IntroductionHeader(props) {
	const description = props.description

    return (
        <div className="intro-header">
			<div className="intro-header__image">
				<img className="img-fluid" src="/images/monkey-peeking.png" alt="" />
			</div>
			<div className="intro-header__description">
				<p>
					{description}
				</p>
			</div>
        </div>
    )
}