# yframe

HTML5 Video, Youtube, Vimeo, Soundcloud (playlist tracks must have embeded-player code to be displayed publicly), Bandcamp, Audiomack, Dailymotion, DTube, Metacafe, Ted, lbry.tv & Web iframe module for MagicMirror2

	{
		module: "yframe",
		position: "middle_center",
		config: {
			url: "https://www.youtube.com/embed/eKFTSSKCzWA",

		// HTML5 Video mode example url: "path/folder/file.mp4"
		// http or local mp4, webm and ogg media

		// Youtube & Web iframe mode example url: "https://cristea13.ro"
		// "https://cristea13.ro/video/landscape_demo.mp4"
		// "https://www.dailymotion.com/embed/video/x7urdc7"
		// "https://www.youtube.com/embed/eKFTSSKCzWA"
		// Could be any website without X-Frame-Options deny and sameorigin activated
		// or media stream from Youtube, Dailymotion, DTube, Metacafe, Ted, lbry.tv etc.

		// Vimeo iframe mode example url: "https://player.vimeo.com/video/54511177"
		// Soundcloud iframe mode example url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/653929878"
		// Soundcloud playlist tracks must have embeded-player code active to be displayed publicly
		// Badcamp iframe mode example url: "https://bandcamp.com/EmbeddedPlayer/album=3096747879"
		// Audiomack iframe mode example url: "https://audiomack.com/embed/playlist/razvanh/love-of-future"

		media: true,				// false for websites that do not need player options
		width: "1080",				// use without px unit for video or media
		height: "607",				// ignored for video or media
		aspect: 9/16,				// height is set to be 9:16 ratio (h/w) for video or media
		cssClass: "video",			// custom className
		loop: 1,				// loop video
		autoplay: 1,				// for video mode autoplay you need controls: 0 and muted: 1
		controls: 0,				// for video mode without controls you need autoplay: 1
		muted: 1,				// for video mode not muted you need autoplay: 0 and controls: 1

	// HTML5 Video mode
		poster: "",				// custom poster image
		preload: "auto",

	// Youtube & Web iframe
		start: "04",				// seconds to start
		allow: "autoplay; fullscreen; encrypted-media; picture-in-picture",
		border: "0",				// css style, width, color
		style: "",
		overflow: "hidden",
		origin: "strict-origin",
		related: 0,

	// Vimeo iframe
		author: 0,
		portrait: 0,
		title: 0,

	// Soundcloud iframe
		theme_color: "%23ff5500",
		buying: true,
		sharing: true,
		download: true,
		art_work: true,
		playcount: true,
		start_track: 1,
		single: true,
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
