/*  Magic Mirror 2
 * Module: Yframe
 * by Razvan Cristea 
 * https://github.com/hangorazvan
 */

Module.register("yframe", {

	defaults: {
		mode: "",					// iframe, video or audio

		width: "1024px",			// for iframe just px not %
		height: "576px",			// for iframe just px not %
		cssClass: "video",			// custom className
		loop: true,					// loop video
		autoplay: true,				// autoplay video
		contols: false,				// if autoplay and loop is false you need controls
		muted: true,				// muted video

		// HTML5 Video or Audio
		url: "",					// path/folder/video.mp4 or audio.mp3
		type: "video/mp4",			// video/mp4, video/webm, video/ogg or audio/mpeg, audio/ogg, audio/wav
		poster: "",					// custom poster image

		// iframe
		source: "",					// Web, Youtube, Vimeo, Soundcloud, Bandcap, Audiomack

		// Web
		w_url: "",
		scrolling: "no",
		allowfullscreen: "yes",
		allow: "autoplay; fullscreen; encrypted-media; picture-in-picture",
		frameborder: "0",			// style width color
		name: "iframe",

		// Youtube
		y_url: "",
		related: 0,

		// Vimeo
		v_url: "",
		author: 0,
		portrait: 0,
		title: 0,

		// Soundcloud
		s_url: "",
		color: "%23ff5500",
		hide_related: true,
		show_comments: false,
		show_user: true,
		show_reposts: false,
		show_teaser: false,
		visual: false,

		// Bandcamp
		b_url: "",
		size: "large",				// "large" only if minimal is false
		background_color: "ffffff", // "RRGGBB" custom colors
		link_color: "333333",		// "RRGGBB" custom colors
		tracklist: true,
		artwork: "small", 			// small or big
		transparent: true,
		minimal: false,				// true only if size is false

		// Audiomack
		a_url: "",
		background: 1,				// 1 = art background, 0 = no background
		color: false,				// "RRGGBB" custom colors or false
	},

	start: function() {
		Log.info("Starting module: " + this.name);
	},

	getDom: function() {
		var iframe =  document.createElement(this.config.mode);
		iframe.src = this.config.url;
		iframe.frameborder = 0;
		iframe.style.border = this.config.frameborder;
		iframe.allow = this.config.allow;
		iframe.name = this.config.name;
		iframe.className = this.config.cssClass;
		iframe.style.width = this.config.width;
		iframe.style.height = this.config.height;
		iframe.scrolling = this.config.scrolling;
		iframe.scrollbars = this.config.scrolling;
		iframe.allowfullscreen = this.config.allowfullscreen;
		iframe.type = this.config.type;
		iframe.autoplay = this.config.autoplay;
		iframe.controls = this.config.controls;
		iframe.muted = this.config.muted;
		iframe.loop = this.config.loop;
		iframe.poster = this.config.poster;
		iframe.preload = "auto";

		if (this.config.mode == "video" || this.config.mode == "audio") {
			iframe.src = this.config.url						// HTML5 Video or Audio

		} else if (this.config.mode == "iframe") {

			if (this.config.source == "Web") {
			iframe.src = this.config.w_url						// Web iframe

			} else if (this.config.source == "Youtube") {		// Youtube iframe
				iframe.src = this.config.y_url	+ "?autoplay=" + this.config.autoplay
												+ "&mute=" + this.config.muted
												+ "&controls=" + this.config.controls
												+ "&loop=" + this.config.loop
												+ "&rel=" + this.config.related;

			} else if (this.config.source == "Vimeo") {			// Vimeo iframe
				iframe.src = this.config.v_url	+ "?byline=" + this.config.author
												+ "&autoplay=" + this.config.autoplay
												+ "&controls=" + this.config.controls
												+ "&muted=" + this.config.muted
												+ "&portrait=" + this.config.portrait
												+ "&title=" + this.config.title
												+ "&loop=" + this.config.loop;

			} else if (this.config.source == "Soundcloud") {	// Soundcloud iframe
				iframe.src = this.config.s_url	+ "&color=" + this.config.color
												+ "&auto_play=" + this.config.autoplay
												+ "&hide_related=" + this.config.hide_related
												+ "&show_comments=" + this.config.show_coments
												+ "&show_user=" + this.config.show_user
												+ "&show_reposts=" + this.config.show_reposts
												+ "&show_teaser=" + this.config.show_teaser
												+ "&visual=" + this.config.visual;

			} else if (this.config.source == "Bandcamp") {		// Bandcamp iframe
				iframe.style.width = "700px";					// max 700px for Bandcamp
				iframe.style.height = "470px";					// max 470px for Bandcamp
				iframe.src = this.config.b_url	+ "/size=" + this.config.size
												+ "/bgcol=" + this.config.background_color
												+ "/linkcol=" + this.config.link_color
												+ "/tracklist=" + this.config.tracklist
												+ "/artwork=" + this.config.artwork
												+ "/minimal=" + this.config.minimal
												+ "/transparent=" + this.config.transparent;

			} else if (this.config.source == "Audiomack") {		// Audiomack iframe
				iframe.src = this.config.a_url	+ "?background=" + this.config.background
												+ "&color=" + this.config.color;
			}
		}

		return iframe;
	}
});