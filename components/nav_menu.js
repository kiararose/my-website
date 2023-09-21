import useMediaQuery from "../components/use_media_query"
import { ThemeContext } from '../components/theme_context';
import { useContext, useState } from 'react'

export default function NavMenu(props) {
    const home_scroll = props.home_scroll
    const works_scroll = props.works_scroll
    const skills_scroll = props.skills_scroll
    const contact_scroll = props.contact_scroll
    const is_mobile = useMediaQuery(768)

    const dark_theme_icon = <>🌜</>
    const light_theme_icon = <>🌞</>

    const { theme, toggleTheme } = useContext(ThemeContext)
    const [isChanged, setIsChanged] = useState(false)

    const handleThemeToggle = () => {
        toggleTheme()
        setIsChanged(true)
        // setIsChanged(!isChanged)
        // if (isChanged == true) {
        //     setIsChanged(false)
        // }

        setTimeout(() => {
            setIsChanged(false)
        }, 400)

    }


    
    return (
        <header className="fixed-top header-container">
            <nav className={`${theme === 'dark' ? 'bg-black' : 'bg-white'} navbar navbar-expand-lg navbar-light`}>
                <div className="header-main-container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <a className="navbar-brand" href="#!" onClick={home_scroll}>🌷K_</a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
                            <li className="nav-item">
                                <a className="nav-link" href="#!" onClick={skills_scroll} data-bs-toggle={`${is_mobile ? 'collapse' : ''}`} data-bs-target={`${is_mobile ? '.navbar-collapse' : ''}`}>Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#!" onClick={works_scroll} data-bs-toggle={`${is_mobile ? 'collapse' : ''}`} data-bs-target={`${is_mobile ? '.navbar-collapse' : ''}`}>Works</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!" onClick={contact_scroll} data-bs-toggle={`${is_mobile ? 'collapse' : ''}`} data-bs-target={`${is_mobile ? '.navbar-collapse' : ''}`}>Contact</a>
                            </li>
                            <li className={`${isChanged ? 'drop-entrance' : ''} nav-item`}>
                                <button 
                                    type="button" 
                                    className="nav-link animated" 
                                    data-bs-toggle="tooltip" 
                                    data-bs-placement="bottom" 
                                    // title={theme === 'light' ? 'Let it rain!' : 'Here comes the sun!'}
                                    title={theme === 'light' ? 'Good Night :)' : 'Good Morning :)'}
                                    onClick={handleThemeToggle}
                                >
                                    {
                                        theme == 'dark' ?
                                        light_theme_icon
                                        :
                                        dark_theme_icon
                                    }
                                </button>
                                {/* <a className="nav-link" href="#!" data-bs-toggle={`${is_mobile ? 'collapse' : ''}`} data-bs-target={`${is_mobile ? '.navbar-collapse' : ''}`}></a> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}