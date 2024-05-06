interface RedditComment_2024 {
	_meta: {
		is_edited?: boolean,
		note?: "no_2nd_retrieval"|"initially_unavailable",
		removal_type?: "deleted"|"removed"|"removed by reddit",
		retrieved_2nd_on?: number,
		was_deleted_later?: boolean,
		was_initially_deleted?: boolean,
	},
	all_awardings: [],
	approved?: boolean,
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean,
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string,
		e: "text"|"emoji",
		t?: string,
		u?: string,
	}[],
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext",
	author_fullname?: string,
	author_is_blocked: boolean,
	author_patreon_flair?: boolean,
	author_premium?: boolean,
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	body: string,
	can_gild: boolean,
	can_mod_post: boolean,
	collapsed: boolean,
	collapsed_because_crowd_control: null,
	collapsed_reason: null|"comment score below threshold"|"potentially toxic",
	collapsed_reason_code: null|"DELETED"|"LOW_SCORE"|"POTENTIALLY_TOXIC",
	comment_type: null,
	controversiality: number,
	created: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	downs: number,
	editable?: boolean,
	edited: boolean|number,
	expression_asset_data?: {
		[key: string]: {
			avatar: {
				e: "Image",
				m: "image/png",
				s: {
					u: string,
					x: number,
					y: number,
				},
			},
			expression: {
				e: " Image",
				l: "FRONT"|"BACK",
				m: "image/png",
				n: "bravo"|"heart"|"fire"|"starstruck"|"take_my_energy"|"clown"|"holo_card"|"laugh"|"winner"|"cry"|"dizziness"|"webman"|"nani",
				s: {
					u: string,
					x: number,
					y: number,
				},
			}[],
			perspective: "CROPPED"|"FULL_BODY",
			position: "CENTER"|"LEFT",
			size: "SIZE_1_X_1"|"SIZE_1_X_2",
		},
	},
	gilded: number,
	gildings: {
	},
	id: string,
	ignore_reports?: boolean,
	is_submitter: boolean,
	likes: null,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage",
			ext?: string,
			id?: string,
			m?: "image/jpeg"|"image/gif"|"image/png",
			p?: {
				u: string,
				x: number,
				y: number,
			}[],
			s?: {
				gif?: string,
				mp4?: string,
				u?: string,
				x: number,
				y: number,
			},
			status: "valid"|"unprocessed"|"invalid",
			t?: "giphy"|"emoji"|"sticker",
		},
	},
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_reports: null,
	parent_id: string,
	permalink: string,
	removal_reason: null|"legal",
	removed?: boolean,
	replies: "",
	report_reasons: null,
	retrieved_on: number,
	rte_mode?: "markdown"|"richtext",
	saved: boolean,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	spam?: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"restricted"|"user"|"private"|"archived",
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	unrepliable_reason: null|"NEAR_BLOCKER",
	ups: number,
	user_reports: [],
}
