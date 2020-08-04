# yframe

Youtube, Vimeo, Soundcloud & Web iframe module for MagicMirror2

    {
        module: "yframe",
        position: "lower_third",
        config: {
              mode: "Web", // Web, Youtube, Vimeo or Soundcloud

              w_url: "https://cristea13.ro",
              width: "1024px",    // in px not %
              height: "576px",    // in px not %
              cssClass: "video",
              scrolling: "no",
              allowfullscreen: "yes",
              frameborder: "0",   // style width color
              name: "iframe",

              // Youtube
              y_url: "https://www.youtube.com/embed/eKFTSSKCzWA",
              y_allow: "autoplay; encrypted-media; picture-in-picture",
              y_autoplay: 1,
              mute: 1,
              y_controls: 0,
              y_loop: 1,
              related: 0,

              // Vimeo
              v_url: "https://player.vimeo.com/video/419924697",
              v_allow: "autoplay; fullscreen",
              author: 0,
              v_autoplay: 1,
              v_controls: 0,
              muted: 1,
              portrait: 0,
              title: 0,
              v_loop: 1,

              // Soundcloud
              s_url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/653929878",
              color: "%23ff5500",
              s_allow: "autoplay",
              s_autoplay: true,
              hide_related: true,
              show_comments: false,
              show_user: true,
              show_reposts: false,
              show_teaser: false,
              visual: false
        },
    }