import LazyLoad from "../components/lazy_load";

export default function SectionTitle(props) {
	const title = props.title

    return (
        <LazyLoad>
            <div className="section-title">
                <h1 className="">{title}</h1>
            </div>
        </LazyLoad>
    )
}