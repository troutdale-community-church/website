import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Troutdale Community Church",
	// Your website's title and description (meta fields)
	title: "Troutdale Community Church",
	description:
		"We love Jesus, honor the Word of God, and love one another.",

	// used on contact page and footer
	contact: {
		address1: "921 Buxton Rd",
		address2: "Troutdale, OR 97060",
		phone: "(503) 666-5617",
		email: "info@troutdalechurch.org",
	},

	// Your information for blog post purposes
	author: {
		name: "Troutdale Community Church",
		email: "info@troutdalechurch.org",
		twitter: "troutdalechurch",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/_astro/cherrywood-church.BLe4yKkz_1d1nT3.webp",
		alt: "Church Picture",
	},
};

export default siteData;
