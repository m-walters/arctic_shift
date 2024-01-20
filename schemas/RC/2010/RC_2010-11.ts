interface RedditComment {
	archived: boolean,
	author: string,
	author_flair_css_class: null|string,
	author_flair_text: null|string,
	body: string,
	controversiality: number,
	created_utc: string,
	distinguished: null|"moderator"|"admin",
	downs: number,
	edited: boolean|number,
	gilded: number,
	id: string,
	link_id: string,
	name: string,
	parent_id: string,
	removal_reason?: null, // 123/5689002 (0.00%)
	retrieved_on: number,
	score: number,
	score_hidden: boolean,
	subreddit: string,
	subreddit_id: string,
	ups: number,
}