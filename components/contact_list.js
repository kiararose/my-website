export default function ContactList(props) {
	const email = props.email
    const mobile = props.mobile
    const linked_in = props.linked_in

    return (
        <ul className="contact-list">
            <li>
                <a>
                    {email}
                </a>
            </li>
            <li>
                <span>
                    {mobile}
                </span>
            </li>
            <li>
                <a>
                    {linked_in}
                </a>
            </li>
        </ul>
    )
}