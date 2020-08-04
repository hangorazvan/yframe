# yframe

HTML5 Video, Audio, Youtube, Vimeo, Soundcloud, Bandcamp, Audiomack & Web iframe module for MagicMirror2

	{
		module: "yframe",
		position: "lower_third",
		config: {
			mode: "iframe",				// iframe, video or audio

			width: "1024px",			// for iframe just px not %
			height: "576px",			// for iframe just px not %
			cssClass: "video",			// custom className
			loop: true,				// loop video
			autoplay: true,				// autoplay video
			contols: false,				// if autoplay and loop is false you need controls
			muted: true,				// muted video

			// HTML5 Video or Audio
			url: "modules/yframe/landscape.mp4",	// path/folder/video.mp4 or audio.mp3
			type: "video/mp4",			// video/mp4, video/webm, video/ogg or audio/mpeg, audio/ogg, audio/wav
			poster: "",				// custom poster image

			// iframe
			source: "Web",				// Web, Youtube, Vimeo, Soundcloud, Bandcap, Audiomack

			// Web
			w_url: "https://cristea13.ro",
			scrolling: "no",
			allowfullscreen: "yes",
			allow: "autoplay; fullscreen; encrypted-media; picture-in-picture",
			frameborder: "0",			// style width color
			name: "iframe",

			// Youtube
			y_url: "https://www.youtube.com/embed/eKFTSSKCzWA",
			related: 0,

			// Vimeo
			v_url: "https://player.vimeo.com/video/419924697",
			author: 0,
			portrait: 0,
			title: 0,

			// Soundcloud
			s_url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/653929878",
			color: "%23ff5500",
			hide_related: true,
			show_comments: false,
			show_user: true,
			show_reposts: false,
			show_teaser: false,
			visual: false,

			// Bandcamp
			b_url: "https://bandcamp.com/EmbeddedPlayer/album=3096747879",
			size: "large",				// "large" only if minimal is false
			background_color: "ffffff",		// "RRGGBB" custom colors
			link_color: "333333",			// "RRGGBB" custom colors
			tracklist: true,
			artwork: "small",			// small or big
			transparent: true,
			minimal: false,				// true only if size is false

			// Audiomack
			a_url: "https://audiomack.com/embed/playlist/razvanh/love-of-future",
			background: 1,				// 1 = art background, 0 = no background
			color: false,				// "RRGGBB" custom colors or false
		},
	}
