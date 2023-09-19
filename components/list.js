import { useInViewport } from 'react-in-viewport';
import { useRef } from 'react';
import _ from 'lodash'

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

    const ordered_list = _.sortBy(list, 'fields.id')
    
    return (
        <ul className={`${inViewport ? 'loaded' : ''} list`} ref={listRef}>
            {ordered_list.map((item) => {
                if(item.fields.type == "link" || item.fields.type == "email") {
                    return(
                        <li className="list__item" key={item.id}>
                            <a href={item.fields.type == 'link' ? item.fields.link : (item.fields.type == 'email' ? `mailto:${item.fields.link}` : '')} target={item.fields.outsideLink ? '_blank' : ''} rel={item.fields.outsideLink ? 'noopener noreferrer' : ''}>
                            {item.fields.title}
                            </a>
                        </li>
                    )
                } else {
                    return(
                        <li className="list__item" key={item.sys?.id}>
                            {item.fields?.title}
                        </li>
                    )
                }
            })}
        </ul>
    )
} 