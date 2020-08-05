/*  Magic Mirror 2
 * Module: Yframe
 * by Razvan Cristea 
 * https://github.com/hangorazvan
 */

Module.register("yframe", {

	defaults: {
		mode: "iframe",				// iframe or video
		url: "",

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

	start: function() {
		Log.info("Starting module: " + this.name);
	},

	getDom: function() {
		var iframe =  document.createElement(this.config.mode);
		iframe.src = this.config.url;
		iframe.style.width = this.config.width + "px";
		iframe.style.height = parseInt(this.config.width * this.config.aspect) + "px";
		iframe.frameborder = 0;
		iframe.style.border = this.config.frameborder;
		iframe.allow = this.config.allow;
		iframe.allowfullscreen = this.config.allowfullscreen;
		iframe.name = this.config.name;
		iframe.className = this.config.cssClass;
		iframe.scrolling = this.config.scrolling;
		iframe.scrollbars = this.config.scrolling;
		iframe.autoplay = this.config.autoplay;
		iframe.controls = this.config.controls;
		iframe.muted = this.config.muted;
		iframe.loop = this.config.loop;
		iframe.poster = this.config.poster;
		iframe.preload = this.config.preload;

// video mode
		if (this.config.mode == "video") {
			iframe.src = this.config.url

// iframe mode
		} else if (this.config.mode == "iframe") {

	// Youtube & Web iframe
			iframe.src = this.config.url 	+ "?autoplay=" + this.config.autoplay
											+ "&mute=" + this.config.muted
											+ "&controls=" + this.config.controls
											+ "&loop=" + this.config.loop
											+ "&rel=" + this.config.related;
	// Vimeo iframe
		} else if (this.config.url.includes("vimeo")) {
			iframe.src = this.config.url	+ "?byline=" + this.config.author
											+ "&autoplay=" + this.config.autoplay
											+ "&controls=" + this.config.controls
											+ "&muted=" + this.config.muted
											+ "&portrait=" + this.config.portrait
											+ "&title=" + this.config.title
											+ "&loop=" + this.config.loop;
	// Soundcloud iframe
		} else if (this.config.url.includes("soundcloud")) {
			iframe.src = this.config.url	+ "&color=" + this.config.color
											+ "&auto_play=" + this.config.autoplay
											+ "&hide_related=" + this.config.hide_related
											+ "&show_comments=" + this.config.show_coments
											+ "&show_user=" + this.config.show_user
											+ "&show_reposts=" + this.config.show_reposts
											+ "&show_teaser=" + this.config.show_teaser
											+ "&visual=" + this.config.visual;
	// Bandcamp iframe
		} else if (this.config.url.includes("bandcamp")) {
			iframe.style.width = "700px";					// max 700px for Bandcamp
			iframe.style.height = "470px";					// max 470px for Bandcamp
			iframe.src = this.config.url	+ "/size=" + this.config.size
											+ "/bgcol=" + this.config.background_color
											+ "/linkcol=" + this.config.link_color
											+ "/tracklist=" + this.config.tracklist
											+ "/artwork=" + this.config.artwork
											+ "/minimal=" + this.config.minimal
											+ "/transparent=" + this.config.transparent;
	// Audiomack iframe
		} else if (this.config.url.includes("audiomack")) {
			iframe.src = this.config.url	+ "?background=" + this.config.background
											+ "&color=" + this.config.color;
		} return iframe;
	}
});