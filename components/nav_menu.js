import useMediaQuery from "../components/use_media_query"

export default function NavMenu(props) {
    const home_scroll = props.home_scroll
    const about_scroll = props.about_scroll
    const websites_scroll = props.websites_scroll
    const contact_scroll = props.contact_scroll
    const is_mobile = useMediaQuery(768)
    
    return (
        <header className="fixed-top header-container">
            <nav className="navbar navbar-expand-lg navbar-light bg-black">
                <div className="header-main-container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#!" onClick={home_scroll} data-bs-toggle={`${is_mobile ? 'collapse' : ''}`} data-bs-target={`${is_mobile ? '.navbar-collapse' : ''}`}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!" onClick={about_scroll} data-bs-toggle={`${is_mobile ? 'collapse' : ''}`} data-bs-target={`${is_mobile ? '.navbar-collapse' : ''}`}>About Me</a>
                            </li>
                            <li className="nav-item header-icon">
                                <img src="/images/" alt="" />
                             </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!" onClick={websites_scroll}data-bs-toggle={`${is_mobile ? 'collapse' : ''}`} data-bs-target={`${is_mobile ? '.navbar-collapse' : ''}`}>Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!" onClick={contact_scroll}data-bs-toggle={`${is_mobile ? 'collapse' : ''}`} data-bs-target={`${is_mobile ? '.navbar-collapse' : ''}`}>Contact</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}