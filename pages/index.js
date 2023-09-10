import React, { useEffect, useState, useRef } from "react";
import { useInViewport } from 'react-in-viewport';

import Matrix from "../components/matrix_raining_code"
import NavMenu from "../components/nav_menu"
import SectionTitle from "../components/section_title"
import Footer from "../components/footer"
import IntroductionHeader from "../components/introduction_header";
import MasonryGallery from "../components/masonry";
import List from "../components/list";

export default function Home() {

    const [isWelcome, setIsWelcome] = useState(false)
	const worksRef = useRef(null)
	const skillsRef = useRef(null)
	const contactRef = useRef(null)

	const scrollToHome = () => {
		scrollTo(0,0)
	}

	const scrollToWorks = () => {
		worksRef.current.scrollIntoView()
	}

	const scrollToSkills = () => {
		skillsRef.current.scrollIntoView()
	}

	const scrollToContact = () => {
		contactRef.current.scrollIntoView()
	}

    useEffect(() => {
	const welcomeTimer = setTimeout(() => setIsWelcome(true), 10000);

	return () => {
		clearTimeout(welcomeTimer);
		};
	}, []);
  
	return (
		<div className="main-container">
			<NavMenu 
				home_scroll={scrollToHome}
				works_scroll={scrollToWorks}
				skills_scroll={scrollToSkills}
				contact_scroll={scrollToContact}
			/>

			<div className="content-container">
				{/* {isWelcome &&
					<Matrix />
				} */}

				<IntroductionHeader 
					description="Kiara Marcelo — A front-end developer from the Philippines. With a keyboard as my paintbrush and code as my canvas, I transform imagination into reality, crafting digital experiences that leave users spellbound 🔮"
				/>
				
				<div className="skills-container" ref={skillsRef}>
					<SectionTitle title="Skills +"/>
					<List list={process.env.skills}/>
				</div>

				<div className="works-container" ref={worksRef}>
					<SectionTitle title="Works <>"/>
					<div className="cards-hover-container">
						<MasonryGallery />
					</div>
				</div>

				<div className="contact-container" ref={contactRef}>
					<SectionTitle title="Contact @"/>
					<List list={process.env.contact}/>
				</div>

				<Footer description="design & code by Kiara 🌷" />
			</div>
		</div>
	)
}
