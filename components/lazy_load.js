import { useInViewport } from 'react-in-viewport';
import { useRef } from 'react';

export default function LazyLoad(props) {

	const containerRef = useRef(null)

	let options = {
		root: null,
		rootMargin: "0px",
		threshold: .5
	};

	const {inViewport, enterCount}  = useInViewport(containerRef, options, { disconnectOnLeave: true }, props);

    return (
        <div className={`${inViewport || enterCount > 0 ? 'loaded' : ''} lazyload`} ref={containerRef}>
            {props.children}
        </div>
    )
}