interface RedditPost {
	approved?: boolean, // 314/38333 (0.82%)
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 57/38333 (0.15%)
	author_flair_background_color: null|"",
	author_flair_css_class: null,
	author_flair_richtext?: [], // 34821/38333 (90.84%)
	author_flair_text: null,
	author_flair_text_color: null|"dark",
	author_flair_type?: "text", // 34821/38333 (90.84%)
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
	ignore_reports?: boolean, // 314/38333 (0.82%)
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
	media: null|{
		oembed: {
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "http://youtube.com",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			type: "video",
			url: string,
			version: "1.0",
			width: number,
		},
		type: "youtube.com",
	},
	media_embed: {
		content?: string, // 1/38333 (0.00%)
		height?: number, // 1/38333 (0.00%)
		media_domain_url?: string, // 1/38333 (0.00%)
		scrolling?: boolean, // 1/38333 (0.00%)
		width?: number, // 1/38333 (0.00%)
	},
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	over_18: boolean,
	parent_whitelist_status: "all_ads"|"promo_adult_nsfw"|null,
	permalink: string,
	post_hint?: "link", // 9/38333 (0.02%)
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
	}, // 9/38333 (0.02%)
	removed?: boolean, // 314/38333 (0.82%)
	retrieved_on?: number, // 6326/38333 (16.50%)
	rte_mode: "markdown",
	score: number,
	secure_media: null|{
		oembed: {
			height: number,
			html: string,
			provider_name: "YouTube",
			provider_url: "http://youtube.com",
			thumbnail_height: number,
			thumbnail_url: string,
			thumbnail_width: number,
			type: "video",
			url: string,
			version: "1.0",
			width: number,
		},
		type: "youtube.com",
	},
	secure_media_embed: {
		content?: string, // 1/38333 (0.00%)
		height?: number, // 1/38333 (0.00%)
		media_domain_url?: string, // 1/38333 (0.00%)
		scrolling?: boolean, // 1/38333 (0.00%)
		width?: number, // 1/38333 (0.00%)
	},
	selftext: ""|"[deleted]",
	send_replies: boolean,
	spam?: boolean, // 314/38333 (0.82%)
	spoiler: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "archived"|"public"|"restricted",
	suggested_sort: null|"confidence"|"new",
	thumbnail: string,
	thumbnail_height: null|number,
	thumbnail_width: null|number,
	title: string,
	url: string,
	whitelist_status: "all_ads"|"promo_adult_nsfw"|null,
}