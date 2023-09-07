import { useEffect, useState, useRef } from "react";
import { useInViewport } from 'react-in-viewport';

import Matrix from "../components/matrix_raining_code"
import NavMenu from "../components/nav_menu"
import WelcomeHeader from "../components/welcome_header"
import SectionTitle from "../components/section_title"
import CardWithDescription from "../components/card_with_description"
import ContactList from "../components/contact_list"
import Footer from "../components/footer"

export default function Home() {

    const [isWelcome, setIsWelcome] = useState(false)
	const homeRef = useRef(null)
	const aboutRef = useRef(null)
	const websitesRef = useRef(null)
	const contactRef = useRef(null)

	const scrollToHome = () => {
		homeRef.current.scrollIntoView()
	}

    const scrollToAbout = () => {
		aboutRef.current.scrollIntoView()
	}

	const scrollToWebsites = () => {
		websitesRef.current.scrollIntoView()
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
				about_scroll={scrollToAbout}
				websites_scroll={scrollToWebsites}
				contact_scroll={scrollToContact}
			/>

			<div className="">
				{isWelcome &&
					<Matrix />
				}
				
				<div ref={homeRef}>
					<WelcomeHeader />
				</div>
				
				<div className="about-container" ref={aboutRef}>
					<SectionTitle title="<About Me />"/>
					<CardWithDescription 
						class_name="card-container"
						image="/images/bondee-avatar.jpg"
						image_alt=""
						description="As a Front-End Developer with a keyboard as my paintbrush and code as my canvas, I transform imagination into reality, crafting digital experiences that leave users spellbound 🔮"
					/>
				</div>

				<div className="websites-container" ref={websitesRef}>
					<SectionTitle title="<Works />"/>

					<div className="cards-container">
						<CardWithDescription 
							class_name="card-container"
							image="/images/fm-fylo-dark-theme-landing-page.png"
							image_alt=""
							description="Blog Website"
						/>

						<CardWithDescription 
							class_name="card-container"
							image="/images/fm-faq-accordion-card.png"
							image_alt=""
							description="eCommerce Website"
						/>

						<CardWithDescription 
							class_name="card-container"
							image="/images/fm-single-price-grid-component.png"
							image_alt=""
							description="eCommerce Website"
						/>

						<CardWithDescription 
							class_name="card-container"
							image="/images/fm-article-preview-component.png"
							image_alt=""
							description="Blog Website"
						/>

						<CardWithDescription 
							class_name="card-container"
							image="/images/fm-signup-form.png"
							image_alt=""
							description="eCommerce Website"
						/>	

						<CardWithDescription 
							class_name="card-container"
							image="/images/fm-fylo-dark-theme-landing-page.png"
							image_alt=""
							description="Blog Website"
						/>
					</div>
				</div>

				<div className="contact-container" ref={contactRef}>
					<SectionTitle title="<Contact />"/>

					<ContactList
						mobile="📞 09275066600"
						email="📧 kiararxsemarcelo@gmail.com"
						linked_in="🌐 linked.com"
					/>
				</div>

				<Footer description="design & code by Kiara 🌷" />
			</div>
		</div>
	)
}
