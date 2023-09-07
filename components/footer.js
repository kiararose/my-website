export default function Footer(props) {
	const description = props.description

    return (
        <footer>
            <h6>{description}</h6>
        </footer>
    )
}