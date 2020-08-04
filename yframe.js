/*  Magic Mirror 2
 * Module: Yframe
 * by Razvan Cristea 
 * https://github.com/hangorazvan
 */

Module.register("yframe", {

    defaults: {
              mode: "", // Web, Youtube, Vimeo or Soundcloud

              wurl: "",
              width: "1024px",    // in px not %
              height: "576px",    // in px not %
              cssClass: "video",
              scrolling: "no",
              allowfullscreen: "yes",
              frameborder: "0",   // style width color
              name: "",

              // Youtube
              yurl: "",
              yallow: "autoplay; encrypted-media; picture-in-picture",
              play: 1,
              mute: 1,
              controls: 0,
              loop: 1,
              related: 0,

              // Vimeo
              vurl: "",
              vallow: "autoplay; fullscreen",
              author: 0,
              autoplay: 1,
              control: 0,
              muted: 1,
              portrait: 0,
              title: 0,
              loops: 1,

              // Soundcloud
              surl: "",
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
            iframe.allow = this.config.yallow;
            iframe.src = this.config.yurl + "?autoplay=" + this.config.autoplay           // Youtube iframe
                                          + "&mute=" + this.config.mute
                                          + "&controls=" + this.config.controls
                                          + "&loop=" + this.config.loop
                                          + "&rel=" + this.config.related;

        } else if (this.config.mode == "Vimeo") {
          iframe.allow = this.config.vallow;
            iframe.src = this.config.vurl + "?byline=" + this.config.author           // Vimeo iframe
                                          + "&autoplay=" + this.config.play
                                          + "&controls=" + this.config.control
                                          + "&muted=" + this.config.muted
                                          + "&portrait=" + this.config.portrait
                                          + "&title=" + this.config.title
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