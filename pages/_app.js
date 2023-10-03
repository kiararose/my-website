if (typeof window !== "undefined") {
    require("jquery");
    require("bootstrap/dist/js/bootstrap.min.js");
}

import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/app.scss'
import { ThemeProvider } from '../components/theme_context';

function MyApp({ Component, pageProps }) {
  	return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
