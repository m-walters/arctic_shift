interface RedditComment {
	all_awardings: {
		award_sub_type: "GLOBAL"|"APPRECIATION"|"COMMUNITY"|"MODERATOR"|"PREMIUM",
		award_type: "global"|"community"|"moderator",
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: number,
		days_of_premium: number,
		description: string,
		end_date: null|number,
		giver_coin_reward: null|number,
		icon_format: null|"PNG"|"APNG"|"JPG",
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		is_new: boolean,
		name: string,
		penny_donate: null|number,
		penny_price: null|number,
		resized_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		start_date: null|number,
		subreddit_coin_reward: number,
		subreddit_id: null|string,
	}[],
	associated_award: null|{
		award_sub_type: "GLOBAL"|"COMMUNITY"|"APPRECIATION",
		award_type: "global"|"community",
		coin_price: number,
		coin_reward: number,
		days_of_drip_extension: number,
		days_of_premium: number,
		description: string,
		end_date: null,
		giver_coin_reward: null,
		icon_format: null,
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		is_new: boolean,
		name: string,
		penny_donate: null,
		penny_price: null,
		resized_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		start_date: null|number,
		sticky_duration_seconds: null,
		subreddit_coin_reward: number,
		subreddit_id: null|"t5_228jbi",
	},
	author: string,
	author_cakeday?: boolean, // 538010/153498208 (0.35%)
	author_created_utc: number|null,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 9683712/28041201 (34.53%)
		e: "text"|"emoji",
		t?: string, // 18357489/28041201 (65.47%)
		u?: string, // 9683712/28041201 (34.53%)
	}[], // 138449123/153498208 (90.20%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext", // 138449123/153498208 (90.20%)
	author_fullname: string|null,
	author_patreon_flair?: boolean, // 138449123/153498208 (90.20%)
	author_premium?: boolean, // 138449123/153498208 (90.20%)
	awarders: [],
	body: string,
	can_gild: boolean,
	can_mod_post: boolean,
	collapsed: boolean,
	collapsed_because_crowd_control: null,
	collapsed_reason: null|"comment score below threshold"|"potentially toxic",
	controversiality: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	edited: boolean|number,
	gilded: number,
	gildings: {
		gid_1?: number, // 134348/153498208 (0.09%)
		gid_2?: number, // 41372/153498208 (0.03%)
		gid_3?: number, // 4294/153498208 (0.00%)
	},
	id: string,
	is_submitter: boolean,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e: "AnimatedImage",
			ext?: string, // 1313/5620 (23.36%)
			id: string,
			m: "image/gif",
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 1313/5620 (23.36%)
			s: {
				gif: string,
				mp4?: string, // 1313/5620 (23.36%)
				x: number,
				y: number,
			},
			status: "valid",
			t: "emoji"|"giphy"|"sticker",
		},
	}, // 4928/153498208 (0.00%)
	no_follow: boolean,
	parent_id: string,
	permalink: string,
	quarantined: boolean,
	removal_reason: null|"legal",
	retrieved_on: number,
	score: number,
	send_replies: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"restricted"|"user"|"archived",
	total_awards_received: number,
	treatment_tags: [],
}