# yframe

Youtube iframe module for MagicMirror2

	{
		module: "yframe",
		position: "lower_third",
    config: {
          url: "https://www.youtube.com/embed/",
          width: "1080px",    // in px not %
          height: "607px",    // in px not %
          cssClass: "youtube",
          scrolling: "no",
          allow: "autoplay; encrypted-media; picture-in-picture",
          allowfullscreen: "yes",
          frameborder: "0",   // style width color
          name: "yframe",
          autoplay: 1,
          mute: 1,
          controls: 0,
          loop: 1,
          related: 0
    },
	}
