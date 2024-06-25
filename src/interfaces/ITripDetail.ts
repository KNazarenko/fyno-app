export interface ITripDetail {
	option: string;
	regionTitle: string;
	aboutRegion: string;
	highlights: ITripHighlights;
	plan: ITripPlan;
	stays: ITripStays;
}

export interface ITripHighlights {
	sectionTitle: string;
	highlightCards: Array<IHighlightCards>;
}

export interface IHighlightCards {
	id: string;
	url: string;
	title: string;
	duration: string;
	place: string;
	isPick: boolean;
}

export interface ITripStays {
	sectionTitle: string;
	stayCards: Array<IStayCards>;
}

export interface IStayCards {
	id: string;
	url: string;
	title: string;
	rating: string;
	price: string;
	place: string;
	isPick: boolean;
}

export interface ITripPlan {
	sectionTitle: string;
	days: ITripPlanDay[];
}

export interface ITripPlanDay {
	day: string;
	commonDuration: string;
	cards: ITripPlanDayCard[];
}

export interface ITripPlanDayCard {
	id: string;
	url: string;
	cardTitle: string;
	pick: boolean;
	duration: string;
	place: string;
	traffic: string;
}
