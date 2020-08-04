# yframe

Youtube, Vimeo, Soundcloud & Web iframe module for MagicMirror2

    {
        module: "yframe",
        position: "lower_third",
        config: {
              mode: "Web", // Web, Youtube, Vimeo or Soundcloud

              wurl: "https://cristea13.ro",
              width: "1024px",    // in px not %
              height: "576px",    // in px not %
              cssClass: "video",
              scrolling: "no",
              allowfullscreen: "yes",
              frameborder: "0",   // style width color
              name: "iframe",

              // Youtube
              yurl: "https://www.youtube.com/embed/eKFTSSKCzWA",
              yallow: "autoplay; encrypted-media; picture-in-picture",
              play: 1,
              mute: 1,
              controls: 0,
              loop: 1,
              related: 0,

              // Vimeo
              vurl: "https://player.vimeo.com/video/419924697",
              vallow: "autoplay; fullscreen",
              author: 0,
              autoplay: 1,
              control: 0,
              muted: 1,
              portrait: 0,
              title: 0,
              loops: 1,

              // Soundcloud
              surl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/653929878",
              color: "%23ff5500",
              auto_play: true,
              hide_related: true,
              show_comments: false,
              show_user: true,
              show_reposts: false,
              show_teaser: false,
        },
    }