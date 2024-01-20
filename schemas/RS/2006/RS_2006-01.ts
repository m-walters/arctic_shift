interface RedditPost {
	archived: boolean,
	author: string,
	author_flair_background_color: null|"",
	author_flair_css_class: null,
	author_flair_richtext?: [], // 7368/8048 (91.55%)
	author_flair_text: null,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text", // 7368/8048 (91.55%)
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
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw",
	permalink: string,
	post_hint?: "link", // 10/8048 (0.12%)
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
				nsfw?: {
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
				}, // 1/10 (10.00%)
				obfuscated?: {
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
				}, // 1/10 (10.00%)
			},
		}[],
	}, // 10/8048 (0.12%)
	retrieved_on?: number, // 4210/8048 (52.31%)
	rte_mode: "markdown",
	score: number,
	secure_media: null,
	secure_media_embed: {
	},
	selftext: ""|"[deleted]",
	send_replies: boolean,
	spoiler: boolean,
	stickied: boolean,
	subreddit: "reddit.com"|"nsfw",
	subreddit_id: "t5_6"|"t5_vf2",
	subreddit_name_prefixed: "r/reddit.com"|"r/nsfw",
	subreddit_type: "archived"|"public",
	suggested_sort: null,
	thumbnail: string,
	thumbnail_height: null|number,
	thumbnail_width: null|number,
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw",
}