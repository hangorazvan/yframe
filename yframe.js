/*  Magic Mirror 2
 * Module: Yframe
 * by Razvan Cristea 
 * https://github.com/hangorazvan
 */

Module.register("yframe", {

    defaults: {
              mode: "Web", // Web, Youtube, Vimeo or Soundcloud

              wurl: "https://cristea13.ro",
              width: "1024px",    // in px not %
              height: "600px",    // in px not %
              cssClass: "video",
              scrolling: "no",
              allowfullscreen: "yes",
              frameborder: "0",   // style width color
              name: "iframe",

              // Youtube
              yurl: "https://www.youtube.com/embed/eKFTSSKCzWA",
              allow: "autoplay; encrypted-media; picture-in-picture",
              play: 1,
              mute: 1,
              controls: 0,
              loop: 1,
              related: 0,

              // Vimeo
              vurl: "https://player.vimeo.com/video/419924697",
              allow: "autoplay; fullscreen",
              portrait: 0,
              autoplay: 1,
              control: 0,
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

    start: function() {
        Log.info("Starting module: " + this.name);
    },
  
    getDom: function() {
        var iframe = document.createElement("iframe");
        iframe.style.border = this.config.frameborder;  // style width color
        iframe.frameborder = this.config.frameborder;
        iframe.name = this.config.name;
        iframe.className = this.config.cssClass;
        iframe.style.width = this.config.width;         // in px not %
        iframe.style.height = this.config.height;       // in px not %
        iframe.scrolling = this.config.scrolling;
        iframe.allowfullscreen = this.config.allowfullscreen;

        if (this.config.mode == "Web") { iframe.src = this.config.wurl                   // web iframe

        } else if (this.config.mode == "Youtube") {
            iframe.allow = this.config.allow;
            iframe.src = this.config.yurl + "?autoplay=" + this.config.autoplay           // Youtube iframe
                                          + "&mute=" + this.config.mute
                                          + "&controls=" + this.config.controls
                                          + "&loop=" + this.config.loop
                                          + "&rel=" + this.config.related;

        } else if (this.config.mode == "Vimeo") {
            iframe.src = this.config.vurl + "?portrait=" + this.config.portrait           // Vimeo iframe
                                          + "&autoplay=" + this.config.play
                                          + "&controls=" + this.config.control
                                          + "&loop=" + this.config.loops;

        } else if (this.config.mode == "Soundcloud") {
            iframe.src = this.config.surl + "&color=" + this.config.color                 // Soundcloud iframe
                                          + "&auto_play=" + this.config.auto_play
                                          + "&hide_related=" + this.config.hide_related
                                          + "&show_comments=" + this.config.show_coments
                                          + "&show_user=" + this.config.show_user
                                          + "&show_reposts=" + this.config.show_reposts
                                          + "&show_teaser=" + this.config.show_teaser;
        }

        return iframe;
    }
});