interface RedditPost {
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 201/12556 (1.60%)
	author_flair_background_color: null|"",
	author_flair_css_class: null,
	author_flair_richtext?: [], // 11681/12556 (93.03%)
	author_flair_text: null,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text", // 11681/12556 (93.03%)
	brand_safe: boolean,
	can_gild: boolean,
	contest_mode: boolean,
	created_utc: number,
	distinguished: null,
	domain: string,
	edited: boolean,
	gilded: number,
	hidden: boolean,
	hide_score: boolean,
	id: string,
	is_crosspostable: boolean,
	is_reddit_media_domain: boolean,
	is_self: boolean,
	is_video: boolean,
	link_flair_css_class: null,
	link_flair_richtext: [],
	link_flair_text: null,
	link_flair_text_color: "dark",
	link_flair_type: "text",
	locked: boolean,
	media: null,
	media_embed: {
	},
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|null,
	permalink: string,
	post_hint?: "link", // 3/12556 (0.02%)
	preview?: {
		enabled: boolean,
		images: {
			id: string,
			resolutions: {
				height: number,
				url: string,
				width: number,
			}[],
			source: {
				height: number,
				url: string,
				width: number,
			},
			variants: {
			},
		}[],
	}, // 3/12556 (0.02%)
	retrieved_on?: number, // 316/12556 (2.52%)
	rte_mode: "markdown",
	score: number,
	secure_media: null,
	secure_media_embed: {
	},
	selftext: ""|"[deleted]",
	send_replies: boolean,
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "archived"|"public"|"restricted",
	suggested_sort: null|"new"|"confidence",
	thumbnail: string,
	thumbnail_height: null|number,
	thumbnail_width: null|number,
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|null,
}