import React, { useEffect, useState, useRef } from "react";


import Matrix from "../components/matrix_raining_code"
import NavMenu from "../components/nav_menu"
import SectionTitle from "../components/section_title"
import Footer from "../components/footer"
import IntroductionHeader from "../components/introduction_header";
import MasonryGallery from "../components/masonry";
import List from "../components/list";
import LazyLoad from "../components/lazy_load";

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
		window.scrollTo(0,0)
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

				<LazyLoad>
					<IntroductionHeader 
						description="Kiara Marcelo — A front-end developer from the Philippines. With a keyboard as my paintbrush and code as my canvas, I transform imagination into reality, crafting digital experiences that leave users spellbound 🔮"
					/>
				</LazyLoad>
				
				<div className="skills-container" ref={skillsRef}>
					<LazyLoad>
						<SectionTitle title="Skills +"/>
					</LazyLoad>
					<LazyLoad>
						<List list={process.env.skills}/>
					</LazyLoad>
				</div>
			
				<div className="works-container" ref={worksRef}>
					<LazyLoad>
						<SectionTitle title="Works <>"/>
					</LazyLoad>
					<div className="cards-hover-container">
						<MasonryGallery />
					</div>
				</div>
				
				<div className="contact-container" ref={contactRef}>
					<LazyLoad>
						<SectionTitle title="Contact @"/>
					</LazyLoad>
					<LazyLoad>
						<List list={process.env.contact}/>
					</LazyLoad>
				</div>

				<Footer description="design & code by Kiara 🌷" />
			</div>
		</div>
	)
}
