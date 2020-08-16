/*  Magic Mirror 2
 * Module: Yframe
 * by Razvan Cristea 
 * https://github.com/hangorazvan
 */

Module.register("yframe", {

	defaults: {
		url: "...",

		// HTML5 Video mode example url: "path/folder/file.mp4"
		// http or local mp4, webm and ogg media

		// Youtube & Web iframe mode example url: "https://cristea13.ro"
		// "https://cristea13.ro/assets/video/landscape_demo.mp4"
		// "https://www.dailymotion.com/embed/video/x7urdc7"
		// "https://www.youtube.com/embed/eKFTSSKCzWA"
		// Could be any website without X-Frame-Options deny and sameorigin activated
		// or media stream from Youtube, Dailymotion, DTube, Metacafe, Ted, lbry.tv etc.

		// Vimeo iframe mode example url: "https://player.vimeo.com/video/54511177"
		// Soundcloud iframe mode example url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/653929878"
		// Soundcloud playlist tracks must have embeded-player code active to be displayed publicly
		// Badcamp iframe mode example url: "https://bandcamp.com/EmbeddedPlayer/album=3096747879"
		// Audiomack iframe mode example url: "https://audiomack.com/embed/playlist/razvanh/love-of-future"

		width: "1080",				// just in px not % for iframe
		aspect: 9/16,				// height is set to be 9:16 ratio (h/w)
		cssClass: "video",			// custom className
		loop: 1,					// loop video
		autoplay: 1,				// for video mode autoplay you need controls: 0 and muted: 1
		controls: 0,				// for video mode without controls you need autoplay: 1
		muted: 1,					// for video mode not muted you need autoplay: 0 and controls: 1

	// HTML5 Video mode
		poster: "",					// custom poster image
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

	start: function() {
		Log.info("Starting module: " + this.name);
	},

	getDom: function() {

		if (this.config.url.includes(".mp4")  ||
			this.config.url.includes(".webm") ||
			this.config.url.includes(".ogg")  ||
			this.config.url.includes(".mp3")  ||
			this.config.url.includes(".wav"))
		{

		// video mode
			var media = document.createElement("video");
			media.className = this.config.cssClass;
			media.style.width = this.config.width + "px";
			media.style.height = parseInt(this.config.width * this.config.aspect) + "px";
			media.style.border = this.config.frameborder;
			media.style.overflow = this.config.overflow;
			media.allow = this.config.allow;
			media.autoplay = this.config.autoplay;
			media.controls = this.config.controls;
			media.muted = this.config.muted;
			media.loop = this.config.loop;
			media.poster = this.config.poster;
			media.preload = this.config.preload;
			media.src = this.config.url;
			return media;

		} else

		// iframe mode
			var media = document.createElement("iframe");
			media.className = this.config.cssClass;
			media.style.width = this.config.width + "px";
			media.style.height = parseInt(this.config.width * this.config.aspect) + "px";
			media.style.border = this.config.frameborder;
			media.style.overflow = this.config.overflow;
			media.allow = this.config.allow;
			media.autoplay = this.config.autoplay;
			media.controls = this.config.controls;
			media.muted = this.config.muted;
			media.loop = this.config.loop;
			media.poster = this.config.poster;
			media.preload = this.config.preload;

	// Vimeo iframe
		if (this.config.url.includes("vimeo")) {
			media.src = this.config.url	+ "?byline=" + this.config.author
										+ "&autoplay=" + this.config.autoplay
										+ "&controls=" + this.config.controls
										+ "&muted=" + this.config.muted
										+ "&portrait=" + this.config.portrait
										+ "&title=" + this.config.title
										+ "&loop=" + this.config.loop;
	// Soundcloud iframe
		} else if (this.config.url.includes("soundcloud")) {
			media.src = this.config.url	+ "&color=" + this.config.color
										+ "&auto_play=" + this.config.autoplay
										+ "&buying=" + this.config.buying
										+ "&sharing=" + this.config.sharing
										+ "&download=" + this.config.download
										+ "&show_artwork=" + this.config.artwork
										+ "&show_playcount=" + this.config.playcount
										+ "&start_track=" + this.config.start_track
										+ "&single_active=" + this.config.single
										+ "&hide_related=" + this.config.hide_related
										+ "&show_comments=" + this.config.show_comments
										+ "&show_user=" + this.config.show_user
										+ "&show_reposts=" + this.config.show_reposts
										+ "&show_teaser=" + this.config.show_teaser
										+ "&visual=" + this.config.visual;
	// Bandcamp iframe
		} else if (this.config.url.includes("bandcamp")) {
			media.style.width  = "700px";					// max 700px for Bandcamp
			media.style.height = "470px";					// max 470px for Bandcamp
			media.src = this.config.url	+ "/size=" + this.config.size
										+ "/bgcol=" + this.config.background_color
										+ "/linkcol=" + this.config.link_color
										+ "/tracklist=" + this.config.tracklist
										+ "/artwork=" + this.config.artwork
										+ "/minimal=" + this.config.minimal
										+ "/transparent=" + this.config.transparent;
	// Audiomack iframe
		} else if (this.config.url.includes("audiomack")) {
			media.src = this.config.url	+ "?background=" + this.config.background
										+ "&color=" + this.config.color;
	// Youtube & Web iframe
		} else {
			media.src = this.config.url + "?autoplay=" + this.config.autoplay
										+ "&mute=" + this.config.muted
										+ "&controls=" + this.config.controls
										+ "&loop=" + this.config.loop
										+ "&start=" + this.config.start
										+ "&rel=" + this.config.related;
		} return media;
	}
});