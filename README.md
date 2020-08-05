# yframe

HTML5 Video, Audio, Youtube, Vimeo, Soundcloud, Bandcamp, Audiomack & Web iframe module for MagicMirror2

	{
		module: "yframe",
		position: "middle_center",
		config: {
			mode: "video",				// iframe or video
			url: "modules/yframe/landscape.mp4",

			// HTML5 Video mode example url: "path/folder/file.mp4"
			// local mp4, webm or ogg media

			// Youtube & Web iframe mode example url: "https://cristea13.ro"
			// "https://www.dailymotion.com/embed/video/x7urdc7"
			// "https://www.youtube.com/embed/eKFTSSKCzWA"
			// Could be any website without X-Frame-Options deny and sameorigin activated
			// or media stream from Youtube, Dailymotion, DTube, Metacafe, Ted, lbry.tv etc.

			// Vimeo iframe mode example url: "https://player.vimeo.com/video/54511177"
			// Soundcloud iframe mode example url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/653929878"
			// Badcamp iframe mode example url: "https://bandcamp.com/EmbeddedPlayer/album=3096747879"
			// Audiomack iframe mode example url: "https://audiomack.com/embed/playlist/razvanh/love-of-future"

			width: "1080",				// just in px not %
			aspect: "0.5625",			// height is set to be 9:16 ratio
			cssClass: "video",			// custom className
			loop: true,					// loop video
			autoplay: true,				// autoplay video
			contols: false,				// if autoplay and loop is false you need controls
			muted: true,				// muted video

		// HTML5 Video mode
			poster: "",					// custom poster image
			preload: "auto",

		// Youtube & Web iframe
			scrolling: "no",
			allowfullscreen: "yes",
			allow: "autoplay; fullscreen; encrypted-media; picture-in-picture",
			frameborder: "0",			// css style, width, color
			name: "media",
			related: 0,

		// Vimeo iframe
			author: 0,
			portrait: 0,
			title: 0,

		// Soundcloud iframe
			color: "%23ff5500",
			hide_related: true,
			show_comments: false,
			show_user: true,
			show_reposts: false,
			show_teaser: false,
			visual: false,

		// Bandcamp iframe
			size: "large",				// "large" only if minimal is false
			background_color: "ffffff",	// "RRGGBB" custom colors
			link_color: "333333",		// "RRGGBB" custom colors
			tracklist: true,
			artwork: "small",			// small or big
			transparent: true,
			minimal: false,				// true only if size is false

		// Audiomack iframe
			background: 1,				// 1 = art background, 0 = no background
			color: false,				// "RRGGBB" custom colors or false
		},
	}
