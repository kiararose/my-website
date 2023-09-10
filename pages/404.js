import Link from "next/link";

export default function Custom404() {
    return (
       
        <div className="page-404 container-fluid p-0 d-flex align-items-center justify-content-center flex-column min-vh-100">
            <h1 className="display-1">404</h1>
            <h2>Page Not Found</h2>
            <p>We can't find the page you were looking for</p>
            <Link href="/">
                <a className="btn btn-primary mt-5">🌷 Back to Home</a>
            </Link>
        </div>
    )
}