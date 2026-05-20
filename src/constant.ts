import CATALOGUE_IMAGE_1 from "@/assets/catalogue-1.jpg";
import CATALOGUE_IMAGE_2 from "@/assets/catalogue-2.jpg";
import CATALOGUE_IMAGE_3 from "@/assets/catalogue-3.jpg";
import CATALOGUE_IMAGE_4 from "@/assets/catalogue-4.jpg";
import CATALOGUE_IMAGE_5 from "@/assets/catalogue-5.jpg";
import CATALOGUE_IMAGE_6 from "@/assets/catalogue-6.jpg";
import CATALOGUE_IMAGE_7 from "@/assets/catalogue-7.jpg";
import CATALOGUE_IMAGE_8 from "@/assets/catalogue-8.jpg";

export const NAV_ITEMS = [
	{
		id: 1,
		name: "Products",
		link: "#product",
	},
	{
		id: 2,
		name: "Our Solution",
		link: "#solution",
	},
	{
		id: 3,
		name: "How It Works",
		link: "#process",
	},
];

export const PROBLEMS = [
	"In house production is expensive to setup",
	"Maintaining consistency batch to batch is difficult",
	"Bakery equipment requires investment",
	"Skilled bakery staff is hard to hire and retain",
	"Menus need constant variety and seasonal SKUs",
	"Demand for certain items fluctuates",
];

export const SOLUTIONS = [
	"Ready to serve products on your schedule",
	"Bulk ready production at predictable cost",
	"Standardised recipes across every batch",
	"white label options with your branding",
	"Flexible quantities, formats, and SKUs",
	"Reliable recurring supply",
];

export const CATALOGUE_ITEMS = [
	{
		id: 1,
		title: "Classic Fudgy Brownies",
		subtitle:
			"Made for café counters, dessert platters, gifting boxes and event service.",
		tags: ["Cafés", "Events", "Gifting"],
		image: CATALOGUE_IMAGE_1,
	},
	{
		id: 2,
		title: "Layered Tiramisu",
		subtitle:
			"Cocoa-dusted, ready-to-serve cups for restaurants, hotels and dessert menus.",
		tags: ["Restaurants", "Hotels"],
		image: CATALOGUE_IMAGE_2,
	},
	{
		id: 3,
		title: "Artisan Breads",
		subtitle:
			"Focaccia, sourdough and loaves baked fresh for daily café and restaurant supply.",
		tags: ["Cafés", "Restaurants"],
		image: CATALOGUE_IMAGE_3,
	},
	{
		id: 4,
		title: "Tea Cakes & Loaves",
		subtitle: "Glazed loaves built for slicing — clean margins on every plate.",
		tags: ["Cafés", "Hotels"],
		image: CATALOGUE_IMAGE_4,
	},
	{
		id: 5,
		title: "Cookies & Bars",
		subtitle:
			"Pantry-stable, transit-friendly bakes for offices, kiosks and pop-ups.",
		tags: ["Offices", "Cloud Kitchens"],
		image: CATALOGUE_IMAGE_5,
	},
	{
		id: 6,
		title: "Mini Dessert Jars",
		subtitle: "Layered jars for plated service, events and grab-and-go retail.",
		tags: ["Events", "Caterers"],
		image: CATALOGUE_IMAGE_6,
	},
	{
		id: 7,
		title: "Corporate Gifting Boxes",
		subtitle: "Curated hampers for clients, employees and seasonal campaigns.",
		tags: ["Corporate", "Festive"],
		image: CATALOGUE_IMAGE_7,
	},
	{
		id: 8,
		title: "White Label Products",
		subtitle: "Your brand. Our bakery. Custom recipes, sleeves and packaging.",
		tags: ["White Label"],
		image: CATALOGUE_IMAGE_8,
	},
];

import CAFES_IMAGE from "@/assets/partnership-1.jpg";
import CLOUD_KITCHEN_IMAGE from "@/assets/partnership-2.jpg";

export const PARTNERSHIP_TABS = [
	{
		id: "cafes",
		label: "For Cafés",
		image: CAFES_IMAGE,
		description:
			"Add premium desserts to your display counter without investing in a full bakery kitchen. Daily and recurring supply schedules built around your service hours.",
		benefits: [
			"Standardised recipes",
			"Volume-ready production",
			"Recurring delivery schedules",
			"Custom formats on request",
		],
	},

	{
		id: "restaurants-hotels",
		label: "For Restaurants & Hotels",
		image: CATALOGUE_IMAGE_2,
		description:
			"Plated desserts, breads and bulk trays for à la carte service, banquets and room service — at consistent food cost.",
		benefits: [
			"Standardised recipes",
			"Volume-ready production",
			"Recurring delivery schedules",
			"Custom formats on request",
		],
	},

	{
		id: "caterers",
		label: "For Caterers",
		image: CATALOGUE_IMAGE_6,
		description:
			"Scale your dessert offering for weddings, conferences and large events. Volume-ready production with predictable lead times.",
		benefits: [
			"Standardised recipes",
			"Volume-ready production",
			"Recurring delivery schedules",
			"Custom formats on request",
		],
	},

	{
		id: "corporate-gifting",
		label: "For Corporate Gifting",
		image: CATALOGUE_IMAGE_7,
		description:
			"Festive campaigns, client hampers and employee gifting — curated, branded and dispatched on schedule.",
		benefits: [
			"Standardised recipes",
			"Volume-ready production",
			"Recurring delivery schedules",
			"Custom formats on request",
		],
	},

	{
		id: "cloud-kitchens",
		label: "For Cloud Kitchens",
		image: CLOUD_KITCHEN_IMAGE,
		description:
			"Ghost-kitchen-friendly SKUs that travel well, hold shelf life and plate beautifully on every order.",
		benefits: [
			"Standardised recipes",
			"Volume-ready production",
			"Recurring delivery schedules",
			"Custom formats on request",
		],
	},
];

export const PROCESS_STEPS = [
	{
		id: "01",
		title: "Share your requirement",
		description: "Tell us your menu, volume and frequency.",
	},
	{
		id: "02",
		title: "Get a custom quote",
		description: "Pricing built around your formats and schedule.",
	},
	{
		id: "03",
		title: "Try a sample box",
		description: "Taste the range before you commit.",
	},
	{
		id: "04",
		title: "Finalise products",
		description: "Lock in SKUs, packaging and delivery cadence.",
	},
	{
		id: "05",
		title: "Start recurring supply",
		description: "Fresh batches, on your calendar.",
	},
];

export const WHY_CHOOSE_US = [
	{
		id: "01",
		title: "Consistent Quality",
		description:
			"Standardised recipes and production lines so every batch tastes the same.",
	},
	{
		id: "02",
		title: "Bulk-Ready Production",
		description:
			"Scaled kitchens built to deliver on volume — without compromise.",
	},
	{
		id: "03",
		title: "Better Margins",
		description:
			"Skip the kitchen overhead. Buy what you need, at wholesale pricing.",
	},
	{
		id: "04",
		title: "Flexible Formats",
		description:
			"Slabs, portions, jars, mini bites — packed the way your business serves.",
	},
	{
		id: "05",
		title: "White Label Support",
		description: "Custom branding, sleeves and packaging for your menu.",
	},
	{
		id: "06",
		title: "Reliable Delivery",
		description:
			"Recurring schedules with consistent lead times and freshness.",
	},
];
