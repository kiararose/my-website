export default function List(props) {
	const list = props.list

    return (
        <ul className="list">
            {list.map((item) => {
                return(
                    <li className="list__item" key={item.id}>
                        {item.list}
                    </li>
                )
            })}
        </ul>
    )
} 