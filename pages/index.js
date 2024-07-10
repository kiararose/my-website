import React, { useEffect, useState, useRef } from "react";

import Matrix from "../components/matrix_raining_code"
import NavMenu from "../components/nav_menu"
import SectionTitle from "../components/section_title"
import Footer from "../components/footer"
import IntroductionHeader from "../components/introduction_header";
import MasonryGallery from "../components/masonry";
import List from "../components/list";
import { ThemeContext } from '../components/theme_context';
import { useContext } from 'react'

import * as contentful from "contentful"

var client = contentful.createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export default function Home({ skills, works, contact }) {

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
				{/* {theme === 'dark' &&
					<Matrix />
				} */}

				<IntroductionHeader 
					intro={true}
					role="Frontend web developer,"
					location="from the Philippines"
					details={true}
					description="Elevating businesses through expertise in creating responsive and user-friendly websites, embracing challenges, and delivering impeccable results. "
					// description="Over the course of almost 3 years in the IT industry, I have gained experience in frontend web development, utilized cloud platforms like Salesforce, and conducted app testing. I am now dedicated to frontend web development and am eager to enhance and learn new technologies as I continue on this journey."
					// show_image={true}
					// cta="Explore"
					skills_scroll={scrollToSkills}
				/>
				
				{/* <div className="skills-container" ref={skillsRef}>
					<SectionTitle title="skills."/>
					<List 
						list={skills} 
						content="skills"
					/>
				</div> */}
			
				<div className="works-container" ref={worksRef}>
					<SectionTitle title="works."/>
					<div className="cards-hover-container">
						<MasonryGallery 
							gallery={works}
							col_class_name="card-hover col masonry-photo"
						/>
					</div>
				</div>
				
				<div className="contact-container" ref={contactRef}>
					<SectionTitle title="contact."/>
					<List list={contact}/>
				</div>

				<Footer description="design & code by Kiara 🌷" />
			</div>
		</div>
	)
}

export async function getServerSideProps() {

	const works = await client.getEntries({
		content_type: 'projects'
	})

	const skills = await client.getEntries({
		content_type: 'skills'
	})

	const contact = await client.getEntries({
		content_type: 'contact'
	})

	return {
		props: {
			works: works.items,
			skills: skills.items,
			contact: contact.items
		}
	}
}
