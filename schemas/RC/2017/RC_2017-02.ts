interface RedditComment {
	author: string,
	author_cakeday?: boolean, // 146497/70609487 (0.21%)
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	body: string,
	controversiality: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin"|"special",
	edited: boolean|number,
	gilded: number,
	id: string,
	link_id: string,
	parent_id: string,
	retrieved_on: number,
	score: number,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
}