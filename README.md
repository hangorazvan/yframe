# yframe

HTML5 Video, Youtube, Vimeo, Soundcloud, Bandcamp, Audiomack, Dailymotion, DTube, Metacafe, Ted, lbry.tv & Web iframe module for MagicMirror2

	{
		module: "yframe",
		position: "middle_center",
		config: {
			mode: "iframe",				// iframe or video
			url: "...",

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
			aspect: 9/16,				// height is set to be 9:16 ratio (h/w)
			cssClass: "video",			// custom className
			loop: 1,				// loop video
			autoplay: 1,				// autoplay video
			controls: 0,				// if autoplay and loop is false you need controls
			muted: 1,				// muted video

		// HTML5 Video mode
			poster: "",				// custom poster image
			preload: "auto",

		// Youtube & Web iframe
			start: "04",				// seconds to start
			allow: "autoplay; fullscreen; encrypted-media; picture-in-picture",
			frameborder: "0",			// css style, width, color
			overflow: "hidden",
			related: 0,

		// Vimeo iframe
			author: 0,
			portrait: 0,
			title: 0,

		// Soundcloud iframe
			theme_color: "%23ff5500",
			hide_related: true,
			show_comments: false,
			show_user: true,
			show_reposts: false,
			show_teaser: false,
			visual: false,

		// Bandcamp iframe
			size: "large",				// "large" only if minimal is false
			background_color: "ffffff",		// "RRGGBB" custom colors
			link_color: "333333",			// "RRGGBB" custom colors
			tracklist: true,
			artwork: "small",			// small or big
			transparent: true,
			minimal: false,				// true only if size is false

		// Audiomack iframe
			background: 1,				// 1 = art background, 0 = no background
			color: false,				// "RRGGBB" custom colors or false
		},
	}
