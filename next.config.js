/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		works: [
			{
				id: 1,
				description: 'Fylo Dark Theme Landing Page',
				image: '/images/fm-fylo-dark-theme-landing-page-git-master-kiararose-vercel-app.png',
				image_mobile: '/images/fm-fylo-dark-theme-landing-page-git-master-kiararose-vercel-app-mobile.png',
				image_alt: 'Fylo Dark Theme Landing Page',
				tags: 'html, css, javascript',
				year: '2021',
				link: 'https://fm-fylo-dark-theme-landing-page-en2oc02vn-kiararose.vercel.app/',
				col_class_name: 'card-hover col masonry-photo'
			},
			{
				id: 2,
				description: 'Article Preview Component',
				image: '/images/fm-article-preview-component-git-main-kiararose-vercel-app.png',
				image_mobile: '/images/fm-article-preview-component-git-main-kiararose-vercel-app-mobile.png',
				image_alt: 'Article Preview Component',
				tags: 'html, css, javascript',
				year: '2021',
				link: 'https://fm-article-preview-component-git-main-kiararose.vercel.app/',
				col_class_name: 'card-hover col masonry-photo'
			},
			{
				id: 3,
				description: 'Faq Accordion Card',
				image: 'images/fm-faq-accordion-card-git-master-kiararose-vercel-app.png',
				image_mobile: '/images/fm-faq-accordion-card-git-master-kiararose-vercel-app-mobile.png',
				image_alt: 'Faq Accordion Card',
				tags: 'html, css, javascript',
				year: '2021',
				link: 'https://fm-faq-accordion-card-git-master-kiararose.vercel.app/',
				col_class_name: 'card-hover col masonry-photo'
			},
			{
				id: 4,
				description: 'Signup Form',
				image: 'images/fm-signup-form-git-master-kiararose-vercel-app.png',
				image_mobile: '/images/fm-signup-form-git-master-kiararose-vercel-app-mobile.png',
				image_alt: 'Signup Form',
				tags: 'html, css, javascript',
				year: '2021',
				link: 'https://fm-signup-form-git-master-kiararose.vercel.app/',
				col_class_name: 'card-hover col masonry-photo'
			},
			{
				id: 5,
				description: 'Single Price Grid Component',
				image: 'images/fm-single-price-grid-component-kiararose-vercel-app.png',
				image_mobile: '/images/fm-single-price-grid-component-kiararose-vercel-app-mobile.png',
				image_alt: 'Single Price Grid Component',
				tags: 'html, css, javascript',
				year: '2021',
				link: 'https://fm-single-price-grid-component-kiararose.vercel.app/',
				col_class_name: 'card-hover col masonry-photo'
			},
			{
				id: 6,
				description: 'Fylo Dark Theme Landing Page',
				image: '/images/fm-fylo-dark-theme-landing-page-git-master-kiararose-vercel-app.png',
				image_mobile: '/images/fm-fylo-dark-theme-landing-page-git-master-kiararose-vercel-app-mobile.png',
				image_alt: 'Fylo Dark Theme Landing Page',
				tags: 'html, css, javascript',
				year: '2021',
				link: 'https://fm-fylo-dark-theme-landing-page-en2oc02vn-kiararose.vercel.app/',
				col_class_name: 'card-hover col masonry-photo'
			}
		],
		skills: [
			{id: 1, list: 'html'},
			{id: 2, list: 'css/scss'},
			{id: 3, list: 'javascript'},
			{id: 4, list: 'reactjs'},
			{id: 5, list: 'nextjs'},
			{id: 7, list: 'bootstrap'},
			{id: 8, list: 'playwright'},
			{id: 9, list: 'ui/ux'},
			{id: 10, list: 'responsive-web-design'},
			{id: 11, list: 'salesforce'},
		],
		contact: [
			{
				id: 1,
				name: 'email',
				list: '📧 kiararxsemarcelo@gmail.com',
				link: 'kiararxsemarcelo@gmail.com',
				type: 'email',
				target: false,
			},
			{
				id: 2,
				name: 'number',
				list: '📞 +639275066600',
				type: 'number',
				target: false,
			},
			{
				id: 3,
				name: 'linkedin',
				list: 'Linkedin',
				link: 'https://www.linkedin.com/in/kiara-rose-m-476362171/',
				type: 'link',
				target: true,
			},
			{
				id: 4,
				name: 'github',
				list: 'Github',
				link: 'https://github.com/kiararose',
				type: 'link',
				target: true
			}
		]
  	},
}

module.exports = nextConfig
