import Link from 'next/link'

export default function List(props) {
	const list = props.list

    return (
        <ul className="list">
            {list.map((item) => {
                if(item.link) {
                    return(
                        <li className="list__item" key={item.id}>
                            <a href={item.type == 'link' ? item.link : (item.type == 'email' ? `mailto:${item.link}` : '')}>
                                {item.list}
                            </a>
                        </li>
                    )
                }
                return(
                    <li className="list__item" key={item.id}>
                        {item.list}
                    </li>
                )
            })}
        </ul>
    )
} 