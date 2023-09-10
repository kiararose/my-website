import { useInViewport } from 'react-in-viewport';
import { useRef } from 'react';

export default function LazyLoad(props) {

	const containerRef = useRef(null)

	let options = {
		root: null,
		rootMargin: "0px",
		threshold: 1.0
	};

	const {inViewport, enterCount}  = useInViewport(containerRef, options, { disconnectOnLeave: true }, props);

    return (
        <section className={`${inViewport || enterCount > 0 ? 'loaded' : ''} section`} ref={containerRef}>
            {props.children}
        </section>
    )
}