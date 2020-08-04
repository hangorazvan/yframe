# yframe

HTML5 Video, Audio, Youtube, Vimeo, Soundcloud, Bandcamp, Audiomack & Web iframe module for MagicMirror2

	{
		module: "yframe",
		position: "middle_center",
		config: {
			mode: "iframe",						// iframe (choose source below), video or audio

	// HTML5 Video or Audio mode example
	//		url: "modules/yframe/landscape.mp4",			// local path/folder/video.mp4, audio.mp3 or embeded media

	// Web source iframe mode example (plus media choice)
	//		url: "https://cristea13.ro",				// media: "site"
			url: "https://www.dailymotion.com/embed/video/x7urdc7",	// media: "media"

	// Youtube source iframe mode example
	//		url: "https://www.youtube.com/embed/eKFTSSKCzWA",

	// Vimeo source iframe mode example
	//		url: "https://player.vimeo.com/video/54511177",

	// Soundcloud source iframe mode example
	//		url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/653929878",

	// Badcamp source iframe mode example
	//		url: "https://bandcamp.com/EmbeddedPlayer/album=3096747879",

	// Audiomack source iframe mode example
	//		url: "https://audiomack.com/embed/playlist/razvanh/love-of-future",

	// global settings
			width: "1024px",					// for iframe just px not %
			height: "576px",					// for iframe just px not %
			cssClass: "video",					// custom className
			loop: true,						// loop video
			autoplay: true,						// autoplay video
			contols: false,						// if autoplay and loop is false you need controls
			muted: true,						// muted video

	// HTML5 Video or Audio mode
			type: "video/mp4",					// video/mp4, video/webm, video/ogg or audio/mpeg, audio/ogg, audio/wav
			poster: "",						// custom poster image

	// iframe mode
			source: "Web",						// Web (choose media below), Youtube, Vimeo, Soundcloud, Bandcap, Audiomack

	// Web source
			media: "media",						// "site" if url is website link or "media" if url is multimedia link
			scrolling: "no",
			allowfullscreen: "yes",
			allow: "autoplay; fullscreen; encrypted-media; picture-in-picture",
			frameborder: "0",					// style width color
			name: "iframe",

	// Youtube source
			related: 0,

	// Vimeo source
			author: 0,
			portrait: 0,
			title: 0,

	// Soundcloud source - make sure that muted is not true
			color: "%23ff5500",
			hide_related: true,
			show_comments: false,
			show_user: true,
			show_reposts: false,
			show_teaser: false,
			visual: false,

	// Bandcamp source - make sure that muted is not true
			size: "large",						// "large" only if minimal is false
			background_color: "ffffff",				// "RRGGBB" custom colors
			link_color: "333333",					// "RRGGBB" custom colors
			tracklist: true,
			artwork: "small",					// small or big
			transparent: true,
			minimal: false,						// true only if size is false

	// Audiomack source - make sure that muted is not true
			background: 1,						// 1 = art background, 0 = no background
			color: false,						// "RRGGBB" custom colors or false
		},
	}
