import { useInViewport } from 'react-in-viewport';
import { useRef } from 'react';

export default function List(props) {
	const list = props.list

    const listRef = useRef(null)
    const threshold = props.threshold || 0.05

	let options = {
		root: null,
		rootMargin: "300px",
		threshold: threshold
	};

	const {inViewport, enterCount}  = useInViewport(listRef, options, { disconnectOnLeave: true }, props);

    return (
        <ul className={`${inViewport ? 'loaded' : ''} list`} ref={listRef}>
            {list.map((item) => {
                if(item.link) {
                    return(
                        <li className="list__item" key={item.id}>
                            <a href={item.type == 'link' ? item.link : (item.type == 'email' ? `mailto:${item.link}` : '')}>
                                {item.list}
                            </a>
                        </li>
                    )
                } else {
                    return(
                        <li className="list__item" key={item.id}>
                            {item.list}
                        </li>
                    )
                }
            })}
        </ul>
    )
} 