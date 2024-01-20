interface RedditComment {
	author: string,
	author_cakeday?: boolean, // 403618/85973810 (0.47%)
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	body: string,
	can_gild: boolean,
	controversiality: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin"|"special",
	edited: boolean|number,
	gilded: number,
	id: string,
	is_submitter: boolean,
	link_id: string,
	parent_id: string,
	permalink: string,
	retrieved_on: number,
	score: number,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_type: "public"|"restricted"|"user",
}