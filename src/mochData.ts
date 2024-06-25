import { v4 as uuidv4 } from "uuid";
import highlight01 from "./assets/images/highlights01.png";
import highlight02 from "./assets/images/highlights02.png";
import highlight03 from "./assets/images/highlights03.png";
import highlight04 from "./assets/images/highlights04.png";
import highlight05 from "./assets/images/highlights05.png";
import highlight06 from "./assets/images/highlights06.png";
import stay01 from "./assets/images/stays01.png";
import stay02 from "./assets/images/stays02.png";
import stay03 from "./assets/images/stays03.png";
import stay04 from "./assets/images/stays04.png";
import stay05 from "./assets/images/stays05.png";
import expert from "./assets/images/expert.jpeg";
import frame01 from "./assets/images/Frame 01.png";
import frame02 from "./assets/images/Frame 02.png";
import frame03 from "./assets/images/Frame 03.png";
import frame04 from "./assets/images/Frame 04.png";
import frame05 from "./assets/images/Frame 05.png";

const GetData = {
	photos: [
		{
			name: "frame01",
			url: frame01,
		},
		{
			name: "frame02",
			url: frame02,
		},
		{
			name: "frame03",
			url: frame03,
		},
		{
			name: "frame04",
			url: frame04,
		},
		{
			name: "frame05",
			url: frame05,
		},
	],
	intro: [
		{ title: "Trip duration", value: " days" },
		{ title: "Exploration", value: "4 regions" },
		{ title: "Flight", value: "7h 20m from SFO" },
	],
	aboutRegion: {
		title: "Iceland's Highlights",
		curatedName: "Sandra",
		url: expert,
		about: "Welcome to Iceland, a land of breathtaking landscapes and unspoiled natural beauty. From its majestic waterfalls and geothermal wonders to the vibrant culture and rich history, Iceland promises an unforgettable adventure for every traveler.",
	},
	itinerary: {
		title: "Iceland",
		from: "Reykjavík, KEF",
		to: "San Francisco, SFO",
		dates: "Jul 03 – Jul 11",
		persons: "2",
	},
	tripDetails: [
		{
			option: "A",
			regionTitle: "Golden Circle Region",
			aboutRegion:
				"The Golden Circle in Iceland is a renowned tourist route that encompasses an array of stunning natural landmarks within a relatively short distance from Reykjavík. This scenic loop includes three primary attractions: Þingvellir National Park, where you can explore the rift valley created by the diverging North American and Eurasian tectonic plates and witness the site of Iceland's ancient parliament.",
			highlights: {
				sectionTitle: "Region highlights",
				highlightCards: [
					{
						id: uuidv4(),
						url: highlight01,
						title: "Gullfoss Waterfall",
						duration: "1",
						place: "Waterfall",
						isPick: true,
					},
					{
						id: uuidv4(),
						url: highlight02,
						title: "Reykjadalur Valley",
						duration: "1",
						place: "Iconic hike, hot springs",
						isPick: true,
					},
					{
						id: uuidv4(),
						url: highlight03,
						title: "Geysir Thermal Field",
						duration: "1",
						place: "Geysers",
						isPick: false,
					},
					{
						id: uuidv4(),
						url: highlight01,
						title: "Gullfoss Waterfall",
						duration: "1",
						place: "Waterfall",
						isPick: false,
					},
					{
						id: uuidv4(),
						url: highlight04,
						title: "Skógafoss Waterfall",
						duration: "1",
						place: "Iconic waterfall",
						isPick: false,
					},
					{
						id: uuidv4(),
						url: highlight05,
						title: "Katla Ice Cave",
						duration: "1",
						place: "Ice caves",
						isPick: false,
					},
					{
						id: uuidv4(),
						url: highlight02,
						title: "Reykjadalur Valley",
						duration: "1",
						place: "Iconic hike, hot springs",
						isPick: false,
					},
					{
						id: uuidv4(),
						url: highlight01,
						title: "Gullfoss Waterfall",
						duration: "1",
						place: "Waterfall",
						isPick: false,
					},
					{
						id: uuidv4(),
						url: highlight02,
						title: "Reykjadalur Valley",
						duration: "1",
						place: "Iconic hike, hot springs",
						isPick: false,
					},
					{
						id: uuidv4(),
						url: highlight03,
						title: "Geysir Thermal Field",
						duration: "1",
						place: "Geysers",
						isPick: false,
					},
				],
			},
			plan: {
				sectionTitle: "2 days plan",
				days: [
					{
						day: "Day 1",
						commonDuration: "40m",
						cards: [
							{
								id: uuidv4(),
								url: highlight01,
								cardTitle: "Gullfoss Waterfall",
								pick: true,
								duration: "1h",
								place: "Iconic hike",
								traffic: "Light traffic",
							},
							{
								id: uuidv4(),
								url: highlight02,
								cardTitle: "Reykjadalur Valley",
								pick: true,
								duration: "1h",
								place: "Iconic hike",
								traffic: "Light traffic",
							},
						],
					},
					{
						day: "Day 2",
						commonDuration: "1h 40m",
						cards: [
							{
								id: uuidv4(),
								url: highlight03,
								cardTitle: "Geysir Thermal Field",
								pick: true,
								duration: "1h",
								place: "Iconic hike",
								traffic: "Light traffic",
							},
							{
								id: uuidv4(),
								url: highlight06,
								cardTitle: "Thingvellir",
								pick: false,
								duration: "1h",
								place: "Iconic hike",
								traffic: "Light traffic",
							},
						],
					},
				],
			},
			stays: {
				sectionTitle: "Where to stay",
				stayCards: [
					{
						id: uuidv4(),
						url: stay01,
						title: "Frost and Fire Hotel",
						rating: "9.1/10",
						price: "180",
						place: "Boutique hotel",
						isPick: true,
					},
					{
						id: uuidv4(),
						url: stay02,
						title: "The Greenhouse Hotel",
						rating: "9.1/10",
						price: "230",
						place: "Luxury hotel",
						isPick: true,
					},
					{
						id: uuidv4(),
						url: stay03,
						title: "INNI",
						rating: "9.1/10",
						price: "130",
						place: "Apart hotel",
						isPick: false,
					},
					{
						id: uuidv4(),
						url: stay04,
						title: "Magma Hotel",
						rating: "9.1/10",
						price: "250",
						place: "Boutique hotel",
						isPick: false,
					},
					{
						id: uuidv4(),
						url: stay05,
						title: "Hotel Vík í Mýrdal",
						rating: "9.1/10",
						price: "150",
						place: "Luxury hotel",
						isPick: false,
					},
					{
						id: uuidv4(),
						url: stay01,
						title: "Frost and Fire Hotel",
						rating: "9.1/10",
						price: "180",
						place: "Boutique hotel",
						isPick: false,
					},
					{
						id: uuidv4(),
						url: stay02,
						title: "The Greenhouse Hotel",
						rating: "9.1/10",
						price: "230",
						place: "Luxury hotel",
						isPick: false,
					},
				],
			},
		},
		{
			option: "B",
			regionTitle: "South & Highlands",
			aboutRegion:
				"The South & Highlands of Iceland offer a breathtaking landscape of diverse natural wonders, from expansive glaciers and active volcanoes to serene waterfalls and black sand beaches. This region is also a haven for adventurers, featuring numerous hiking trails, hidden hot springs, and vast lava fields waiting to be explored. Visitors will be captivated by the blend of tranquility and raw, untamed beauty that defines this unique part of Iceland.",
			highlights: {
				sectionTitle: "Region highlights",
				highlightCards: [
					{
						id: uuidv4(),
						url: highlight04,
						title: "Skógafoss Waterfall",
						duration: "1",
						place: "Iconic waterfall",
						isPick: true,
					},
					{
						id: uuidv4(),
						url: highlight05,
						title: "Katla Ice Cave",
						duration: "1",
						place: "Ice caves",
						isPick: true,
					},
					{
						id: uuidv4(),
						url: highlight03,
						title: "Fjaðrárgljúfur",
						duration: "1",
						place: "Geysers",
						isPick: false,
					},
					{
						id: uuidv4(),
						url: highlight02,
						title: "Reykjadalur Valley",
						duration: "1",
						place: "Iconic hike, hot springs",
						isPick: false,
					},
				],
			},
			plan: {
				sectionTitle: "2 days plan",
				days: [
					{
						day: "Day 1",
						commonDuration: "40m",
						cards: [
							{
								id: uuidv4(),
								url: highlight04,
								cardTitle: "Skógafoss Waterfall",
								pick: true,
								duration: "1h",
								place: "Iconic waterfall",
								traffic: "Light traffic",
							},
							{
								id: uuidv4(),
								url: highlight05,
								cardTitle: "Katla Ice Cave",
								pick: true,
								duration: "1h",
								place: "Ice caves",
								traffic: "Light traffic",
							},
						],
					},
					{
						day: "Day 2",
						commonDuration: "1h 40m",
						cards: [
							{
								id: uuidv4(),
								url: highlight03,
								cardTitle: "Geysir Thermal Field",
								pick: true,
								duration: "1h",
								place: "Iconic hike",
								traffic: "Light traffic",
							},
							{
								id: uuidv4(),
								url: highlight06,
								cardTitle: "Thingvellir",
								pick: false,
								duration: "1h",
								place: "Iconic hike",
								traffic: "Light traffic",
							},
						],
					},
				],
			},
			stays: {
				sectionTitle: "Where to stay",
				stayCards: [
					{
						id: uuidv4(),
						url: stay04,
						title: "Magma Hotel",
						rating: "9.1/10",
						price: "250",
						place: "Boutique hotel",
						isPick: true,
					},
					{
						id: uuidv4(),
						url: stay05,
						title: "Hotel Vík í Mýrdal",
						rating: "9.1/10",
						price: "150",
						place: "Luxury hotel",
						isPick: true,
					},
					{
						id: uuidv4(),
						url: stay03,
						title: "Hótel Kría",
						rating: "9.1/10",
						price: "130",
						place: "Luxury hotel",
						isPick: false,
					},
					{
						id: uuidv4(),
						url: stay01,
						title: "Frost and Fire Hotel",
						rating: "9.1/10",
						price: "180",
						place: "Boutique hotel",
						isPick: false,
					},
					{
						id: uuidv4(),
						url: stay02,
						title: "The Greenhouse Hotel",
						rating: "9.1/10",
						price: "230",
						place: "Luxury hotel",
						isPick: false,
					},
				],
			},
		},
	],
};

export default GetData;
