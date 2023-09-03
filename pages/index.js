import { useEffect, useState } from "react";

import Matrix from "../components/matrix_raining_code"
import NavMenu from "../components/nav_menu"
import WelcomeHeader from "../components/welcome_header"

export default function Home() {

    const [isWelcome, setIsWelcome] = useState(false)

    useEffect(() => {
	const welcomeTimer = setTimeout(() => setIsWelcome(true), 10000);

	return () => {
		clearTimeout(welcomeTimer);
		};
	}, []);
  
	return (
		<div className="container-fluid">
			<NavMenu />

			<div className="container-fluid main-container">
				{isWelcome &&
					<Matrix />
				}
				
				<WelcomeHeader />
			</div>
		</div>
		
	)

}
