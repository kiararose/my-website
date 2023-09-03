if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap.min.js");
}

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/app.scss'

function MyApp({ Component, pageProps }) {
  	return <Component {...pageProps} />
}

export default MyApp
