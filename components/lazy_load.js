import { useInViewport } from 'react-in-viewport';
import { useRef } from 'react';

export default function LazyLoad(props) {

	const containerRef = useRef(null)
	const use_placeholder = props.use_placeholder || false
	const placeholder = props.custom_placeholder || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAQSURBVHgBAQUA+v8AAAAAAAAFAAFkeJU4AAAAAElFTkSuQmCC'

	let options = {
		root: null,
		rootMargin: "0px",
		threshold: .5
	};

	const {inViewport, enterCount}  = useInViewport(containerRef, options, { disconnectOnLeave: true }, props);

    return (
        <div className={`${inViewport || enterCount > 0 ? 'loaded' : ''} lazyload`} ref={containerRef}>

			{use_placeholder &&
				<img src={placeholder} width="100%" className='lazy-placeholder' alt='Placeholder'/>
			}
			
            {props.children}
        </div>
    )
}