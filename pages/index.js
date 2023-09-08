import React, { useEffect, useState, useRef } from "react";
import { useInViewport } from 'react-in-viewport';

import Matrix from "../components/matrix_raining_code"
import NavMenu from "../components/nav_menu"
import WelcomeHeader from "../components/welcome_header"
import SectionTitle from "../components/section_title"
import CardWithImageDescription from "../components/card_with_image_description"
import CardHover from "../components/card_hover"
import ContactList from "../components/contact_list"
import Footer from "../components/footer"
import IntroductionHeader from "../components/introduction_header";

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

	console.log(process.env.works)
  
	return (
		<div className="main-container">
			<NavMenu 
				home_scroll={scrollToHome}
				about_scroll={scrollToAbout}
				websites_scroll={scrollToWebsites}
				contact_scroll={scrollToContact}
			/>

			<div className="content-container">
				{/* {isWelcome &&
					<Matrix />
				} */}
				<IntroductionHeader 
					description="Kiara Marcelo — A front-end developer from the Philippines. With a keyboard as my paintbrush and code as my canvas, I transform imagination into reality, crafting digital experiences that leave users spellbound 🔮"
				/>

				<div className="works-container">
					<SectionTitle title="Works_"/>

					<div className="row cards-hover-container">
						{
							process.env.works.map((work) => {
								return (
									<CardHover 
										key={work.id}
										description={work.description}
										image={work.image}
										image_mobile={work.image_mobile}
										image_alt={work.image_alt}
										tags={work.tags}
										year={work.year}
										link={work.link}
										col_class_name={work.col_class_name}
									/>
								)
							})
						}
						{/* <CardHover 
							col_class_name="col-lg-6 card-hover"
							image="/images/fm-fylo-dark-theme-landing-page.png"
							image_mobile="/images/fm-fylo-dark-theme-landing-page-mobile.png"
							image_alt="Fylo Dark Theme Landing Page"
							description="Fylo Dark Theme Landing Page"
							tags="html, css, javascript"
							year="2021"
							link="https://fm-fylo-dark-theme-landing-page-en2oc02vn-kiararose.vercel.app/"
						/>

						<CardHover 
							col_class_name="col-lg-6 card-hover"
							image="/images/fm-faq-accordion-card.png"
							image_mobile="/images/fm-faq-accordion-card-mobile.png"
							image_alt="Faq Accordion Card"
							description="Faq Accordion Card"
							tags="html, css, javascript"
							year="2021"
						/> */}
					</div>
				</div>
				
				{/* <div ref={homeRef}>
					<WelcomeHeader />
				</div> */}
				
				{/* <div className="about-container" ref={aboutRef}>
					<SectionTitle title="About Me_"/>
					<CardWithImageDescription 
						class_name="card-container"
						image="/images/bondee-avatar.jpg"
						image_alt=""
						description="As a Front-End Developer with a keyboard as my paintbrush and code as my canvas, I transform imagination into reality, crafting digital experiences that leave users spellbound 🔮"
					/>
				</div>

				<div className="websites-container" ref={websitesRef}>
					<SectionTitle title="Works_"/>

					<div className="row cards-hover-container">
						<CardHover 
							col_class_name="col-lg-6  card-hover"
							image="/images/fm-fylo-dark-theme-landing-page.png"
							image_mobile="/images/fm-fylo-dark-theme-landing-page-mobile.png"
							image_alt="Fylo Dark Theme Landing Page"
							description="Fylo Dark Theme Landing Page"
							button_name="View"
						/>

						<CardHover 
							col_class_name="col-lg-6  card-hover"
							image="/images/fm-faq-accordion-card.png"
							image_mobile="/images/fm-faq-accordion-card-mobile.png"
							image_alt="Faq Accordion Card"
							description="Faq Accordion Card"
							button_name="View"
						/>

						<CardHover 
							col_class_name="col-lg-6  card-hover"
							image="/images/fm-single-price-grid-component.png"
							image_mobile="/images/fm-single-price-grid-component-mobile.png"
							image_alt="Single Price Grid Component"
							description="Single Price Grid Component"
							button_name="View"
						/>

						<CardHover 
							col_class_name="col-lg-6  card-hover"
							image="/images/fm-signup-form.png"
							image_mobile="/images/fm-signup-form-mobile.png"
							image_alt="Signup Form"
							description="Signup Form"
							button_name="View"
						/>	

						<CardHover 
							col_class_name="col-lg-6  card-hover"
							image="/images/fm-fylo-dark-theme-landing-page.png"
							image_mobile="/images/fm-fylo-dark-theme-landing-page-mobile.png"
							image_alt="Fylo Dark Theme Landing Page"
							description="Fylo Dark Theme Landing Page"
							button_name="View"
						/>

						<CardHover 
							col_class_name="col-lg-6  card-hover"
							image="/images/fm-article-preview-component.png"
							image_mobile="/images/fm-article-preview-component-mobile.png"
							image_alt="Article Preview Component"
							description="Article Preview Component"
							button_name="View"
						/>
					</div>
				</div>

				<div className="contact-container" ref={contactRef}>
					<SectionTitle title="Contact_"/>

					<ContactList
						mobile="📞 09275066600"
						email="📧 kiararxsemarcelo@gmail.com"
						linked_in="🌐 linked.com"
					/>
				</div> */}

				<Footer description="design & code by Kiara 🌷" />
			</div>
		</div>
	)
}
