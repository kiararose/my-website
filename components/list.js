import { useInViewport } from 'react-in-viewport';
import { useRef } from 'react';
import _ from 'lodash'

import LazyLoad from "../components/lazy_load";

export default function List(props) {
	const list = props.list

    const listRef = useRef(null)
    const threshold = props.threshold || 0.05
    const content = props.content || 'contact'

	let options = {
		root: null,
		rootMargin: "300px",
		threshold: threshold
	}; 

	const {inViewport, enterCount}  = useInViewport(listRef, options, { disconnectOnLeave: true }, props);

    const ordered_list = _.sortBy(list, 'fields.id')
    
    return (
        <LazyLoad>
            <ul className={`${inViewport ? 'loaded' : ''} list`} ref={listRef}>
                {content === "skills" ?
                Array(2).fill(true).map(index => (
                    ordered_list.map((item) => {
                        return(
                            <li className="list__item" key={item.fields.id}>
                                <a href={item.fields.type == 'link' ? item.fields.link : (item.fields.type == 'email' ? `mailto:${item.fields.link}` : '')} target={item.fields.outsideLink ? '_blank' : ''} rel={item.fields.outsideLink ? 'noopener noreferrer' : ''}>
                                
                                {item.fields.image ? 
                                    <img src={`https:${item.fields.image.fields.file.url}`} alt={`${item.fields.title} logo`}className='img-fluid'/> 
                                    : 
                                    item.fields.title
                                }

                                </a>
                            </li>
                        )
                    })
                ))
                :
                <>
                {ordered_list.map((item) => {
                    if(item.fields.type == "link" || item.fields.type == "email") {
                        return(
                            <li className="list__item" key={item.fields.id}>
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
                </>
                }
                
            
                
                
            </ul>
        </LazyLoad>
    )
} 