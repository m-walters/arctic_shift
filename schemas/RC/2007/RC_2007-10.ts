interface RedditComment {
	author: string,
	author_flair_css_class: null|"physics"|"compsci"|"bio"|"eng"|"NHLLeafs"|"NUERN"|"NHLPredators"|"med"|"NFLBrowns"|"NHLBlackhawks"|"SOCportland-timbers"|"med reward1"|"SOCarsenal",
	author_flair_text: null|string,
	body: string,
	controversiality: number,
	created_utc: number,
	distinguished: null,
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
	ups: number,
}