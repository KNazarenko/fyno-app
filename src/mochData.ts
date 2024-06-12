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

const GetData = {
	intro: {
		duration: 7,
		exploration: 4,
		flight: "7h 20m from SFO",
	},
	aboutRegion: {
		title: "Iceland's Highlights",
		curatedName: "Sandra",
		url: "https://s3-alpha-sig.figma.com/img/6b35/0c7e/993dea27641da83edc50d8e980f7f2d7?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TNDvcz-KFBq~MvjMveehgHbZ-d8W0qtD16hGCteeijAUhSp6QJiwA1xN4OFLKDrmbg2EY0BDZUXDLH2Do~bLfCXLYm7Y5gUr-oeNrggF6Px8wBva2hfs66D5u3DaVa-0~DeasP-i037VmfRDE8~Aup8~WDbX~g0Nh0n3DTOMNN3y~QV8MsA9yraKeLOlXABdTo2lIH7T0aX5egTlggZOyw1BZH0mrQVo1CvhufTXHFWYDCimYlKIOYsovFoFa7EeSPhLksSFmohxcFt0urXBgnNA6iHq34YfEQQQTbi3uMNcDDdzqVYntVAF90AGUXUQepxvL~9z75ZRSc30rtpHtQ__",
	},
	itinerary: {
		from: "Reykjavík, KEF",
		to: "San Francisco, SFO",
		dates: "Jul 03 – Jul 11s",
		persons: "2",
	},
	tripDetails: [
		{
			option: "A",
			regionTitle: "Golden Circle Region",
			aboutRegion:
				"The Golden Circle in Iceland is a renowned tourist route that encompasses an array of stunning natural landmarks within a relatively short distance from Reykjavík. This scenic loop includes three primary attractions: Þingvellir National Park, where you can explore the rift valley created by the diverging North American and Eurasian tectonic plates and witness the site of Iceland's ancient parliament.",
			highlights: [
				{
					id: uuidv4(),
					url: highlight01,
					title: "Gullfoss Waterfall",
					duration: "1",
					place: "Waterfall",
				},
				{
					id: uuidv4(),
					url: highlight02,
					title: "Reykjadalur Valley",
					duration: "1",
					place: "Iconic hike, hot springs",
				},
				{
					id: uuidv4(),
					url: highlight03,
					title: "Geysir Thermal Field",
					duration: "1",
					place: "Geysers",
				},
			],
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
			stays: [
				{
					id: uuidv4(),
					url: stay01,
					title: "Frost and Fire Hotel",
					rating: "9.1/10",
					price: "180",
					place: "Boutique hotel",
				},
				{
					id: uuidv4(),
					url: stay02,
					title: "The Greenhouse Hotel",
					rating: "9.1/10",
					price: "230",
					place: "Luxury hotel",
				},
				{
					id: uuidv4(),
					url: stay03,
					title: "INNI",
					rating: "9.1/10",
					price: "130",
					place: "Apart hotel",
				},
			],
		},
		{
			option: "B",
			regionTitle: "South & Highlands",
			aboutRegion:
				"The South & Highlands of Iceland offer a breathtaking landscape of diverse natural wonders, from expansive glaciers and active volcanoes to serene waterfalls and black sand beaches. This region is also a haven for adventurers, featuring numerous hiking trails, hidden hot springs, and vast lava fields waiting to be explored. Visitors will be captivated by the blend of tranquility and raw, untamed beauty that defines this unique part of Iceland.",
			highlights: [
				{
					id: uuidv4(),
					url: highlight04,
					title: "Skógafoss Waterfall",
					duration: "1",
					place: "Iconic waterfall",
				},
				{
					id: uuidv4(),
					url: highlight05,
					title: "Katla Ice Cave",
					duration: "1",
					place: "Ice caves",
				},
				{
					id: uuidv4(),
					url: highlight03,
					title: "Fjaðrárgljúfur",
					duration: "1",
					place: "Geysers",
				},
			],
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
			stays: [
				{
					id: uuidv4(),
					url: stay04,
					title: "Magma Hotel",
					rating: "9.1/10",
					price: "250",
					place: "Boutique hotel",
				},
				{
					id: uuidv4(),
					url: stay05,
					title: "Hotel Vík í Mýrdal",
					rating: "9.1/10",
					price: "150",
					place: "Luxury hotel",
				},
				{
					id: uuidv4(),
					url: stay03,
					title: "Hótel Kría",
					rating: "9.1/10",
					price: "130",
					place: "Luxury hotel",
				},
			],
		},
	],
};

export default GetData;
