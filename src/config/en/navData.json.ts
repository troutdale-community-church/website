/**
 * * This file is used to define the navigation links for the site.
 * Notes:
 * 1 level of dropdown is supported
 * Mega menus look best with 3-5 columns, but supports anything > 2 columns
 * If using icons, the icon should be saved in the src/icons folder. If filename is "tabler/icon.svg" then input "tabler/icon"
 * Recommend getting icons from https://tabler.io/icons
 */

// types
import { getAllMinistries } from "@js/ministryUtils";

import { type navItem } from "../types/configDataTypes";

const ministries = await getAllMinistries();

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
	{
		text: "About",
		dropdown: [
			{
				text: "What We Believe",
				link: "/beliefs",
			},
			{
				text: "Leadership and Staff",
				link: "/leadership-staff",
			},
		]
	},
	{
		text: "Ministries",
		dropdown: ministries.map((ministry) => ({ text: ministry.data.title, link: `/ministries/${ministry.id}` })),
	},
	{
		text: "Sermons",
		link: "/sermons",
	},
	// {
	// 	text: "Events",
	// 	link: "/overview",
	// },
	{
		text: "Counseling",
		link: "/counseling",
	},
	{
		text: "Give",
		link: "/give",
	},
	{
		text: "Contact",
		link: "/contact",
	},

	// mega menu
	// {
	// 	text: "Pages",
	// 	megaMenuColumns: [
	// 		{
	// 			title: "Landing Pages",
	// 			items: [
	// 				{
	// 					text: "Landing 1",
	// 					link: "/",
	// 					icon: "tabler/star",
	// 				},
	// 				{
	// 					text: "Landing 2",
	// 					link: "/examples/landing2",
	// 					icon: "tabler/diamonds",
	// 				},
	// 				{
	// 					text: "Landing 3",
	// 					link: "/examples/landing3",
	// 					icon: "tabler/circle",
	// 				},
	// 			],
	// 		},
	// 		{
	// 			title: "Blog",
	// 			items: [
	// 				{
	// 					text: "Blog Post 1",
	// 					link: "/blog/tsconfig-paths-setup",
	// 					icon: "tabler/edit-circle",
	// 				},
	// 				{
	// 					text: "Blog Post 2",
	// 					link: "/examples/blog-post-2",
	// 					icon: "tabler/edit-circle",
	// 				},
	// 				{
	// 					text: "Blog Index",
	// 					link: "/blog",
	// 					icon: "tabler/pencil",
	// 				},
	// 				{
	// 					text: "Categories",
	// 					link: "/categories",
	// 					icon: "tabler/category",
	// 				},
	// 			],
	// 		},
	// 		{
	// 			title: "Elements and Forms",
	// 			items: [
	// 				{
	// 					text: "MDX Pages",
	// 					link: "/elements",
	// 					icon: "tabler/wand",
	// 				},
	// 				{
	// 					text: "Contact",
	// 					link: "/contact",
	// 					icon: "tabler/address-book",
	// 				},
	// 				{
	// 					text: "Login",
	// 					link: "/login",
	// 					icon: "tabler/login",
	// 				},
	// 				{
	// 					text: "Signup",
	// 					link: "/signup",
	// 					icon: "tabler/user",
	// 				},
	// 				{
	// 					text: "Password Reset",
	// 					link: "/password-reset",
	// 					icon: "tabler/password",
	// 				},
	// 			],
	// 		},
	// 		{
	// 			title: "Other Pages",
	// 			items: [
	// 				{
	// 					text: "About",
	// 					link: "/about",
	// 					icon: "tabler/user",
	// 				},
	// 				{
	// 					text: "Privacy Policy",
	// 					link: "/privacy-policy",
	// 					icon: "tabler/lock-square",
	// 				},
	// 				{
	// 					text: "Terms of Use",
	// 					link: "/terms",
	// 					icon: "tabler/script",
	// 				},
	// 				{
	// 					text: "Page not found",
	// 					link: "/not-a-link",
	// 					icon: "tabler/error-404",
	// 				},
	// 				{
	// 					text: "RSS Feed",
	// 					link: "/rss.xml",
	// 					newTab: true,
	// 					icon: "tabler/rss",
	// 				},
	// 			],
	// 		},
	// 	],
	// },

	// {
	// 	text: "Blog",
	// 	link: "/blog",
	// },
];

export default navConfig;
