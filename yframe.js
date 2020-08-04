/*  Magic Mirror 2
 * Module: Yframe
 * by Razvan Cristea 
 * https://github.com/hangorazvan
 */

Module.register("yframe", {

	defaults: {
		mode: "",								// iframe (choose source below), video or audio
		url: "",

// global settings
		width: "1024px",						// for iframe just px not %
		height: "576px",						// for iframe just px not %
		cssClass: "video",						// custom className
		loop: true,								// loop video
		autoplay: true,							// autoplay video
		contols: false,							// if autoplay and loop is false you need controls
		muted: true,							// muted video

// HTML5 Video or Audio mode
		type: "video/mp4",						// video/mp4, video/webm, video/ogg or audio/mpeg, audio/ogg, audio/wav
		poster: "",								// custom poster image

// iframe mode
		source: "",								// Web (choose media below), Youtube, Vimeo, Soundcloud, Bandcap, Audiomack

// Web source
		media: "",								// "site" if url is website link or "media" if url is multimedia link
		scrolling: "no",
		allowfullscreen: "yes",
		allow: "autoplay; fullscreen; encrypted-media; picture-in-picture",
		frameborder: "0",						// style width color
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
		size: "large",								// "large" only if minimal is false
		background_color: "ffffff",					// "RRGGBB" custom colors
		link_color: "333333",						// "RRGGBB" custom colors
		tracklist: true,
		artwork: "small",							// small or big
		transparent: true,
		minimal: false,								// true only if size is false

// Audiomack source - make sure that muted is not true
		background: 1,								// 1 = art background, 0 = no background
		color: false,								// "RRGGBB" custom colors or false
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

// HTML5 Video or Audio mode
			iframe.src = this.config.url

// iframe mode
		} else if (this.config.mode == "iframe") {

// Web iframe
			if (this.config.source == "Web") {
				if (this.config.media == "media") {
// media
					iframe.src = this.config.url	+ "?autoplay=" + this.config.autoplay
													+ "&mute=" + this.config.muted
													+ "&controls=" + this.config.controls
													+ "&loop=" + this.config.loop
// website
				} else if (this.config.media == "site") {
					iframe.src = this.config.url
				}

// Youtube iframe
			} else if (this.config.source == "Youtube") {
				iframe.src = this.config.url	+ "?autoplay=" + this.config.autoplay
												+ "&mute=" + this.config.muted
												+ "&controls=" + this.config.controls
												+ "&loop=" + this.config.loop
												+ "&rel=" + this.config.related;
// Vimeo iframe
			} else if (this.config.source == "Vimeo") {
				iframe.src = this.config.url	+ "?byline=" + this.config.author
												+ "&autoplay=" + this.config.autoplay
												+ "&controls=" + this.config.controls
												+ "&muted=" + this.config.muted
												+ "&portrait=" + this.config.portrait
												+ "&title=" + this.config.title
												+ "&loop=" + this.config.loop;
// Soundcloud iframe
			} else if (this.config.source == "Soundcloud") {
				iframe.src = this.config.url	+ "&color=" + this.config.color
												+ "&auto_play=" + this.config.autoplay
												+ "&hide_related=" + this.config.hide_related
												+ "&show_comments=" + this.config.show_coments
												+ "&show_user=" + this.config.show_user
												+ "&show_reposts=" + this.config.show_reposts
												+ "&show_teaser=" + this.config.show_teaser
												+ "&visual=" + this.config.visual;
// Bandcamp iframe
			} else if (this.config.source == "Bandcamp") {
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
			} else if (this.config.source == "Audiomack") {
				iframe.src = this.config.url	+ "?background=" + this.config.background
												+ "&color=" + this.config.color;
			}
		}

		return iframe;
	}
});