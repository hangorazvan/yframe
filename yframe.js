/*  Magic Mirror 2
 * Module: Yframe
 * by Razvan Cristea 
 * https://github.com/hangorazvan
 */

Module.register("yframe", {

    defaults: {
              mode: "", // Web, Youtube, Vimeo or Soundcloud

              w_url: "",
              width: "1024px",    // in px not %
              height: "576px",    // in px not %
              cssClass: "video",
              scrolling: "no",
              allowfullscreen: "yes",
              frameborder: "0",   // style width color
              name: "iframe",

              // Youtube
              y_url: "",
              y_allow: "autoplay; encrypted-media; picture-in-picture",
              y_autoplay: 1,
              mute: 1,
              y_controls: 0,
              y_loop: 1,
              related: 0,

              // Vimeo
              v_url: "",
              v_allow: "autoplay; fullscreen",
              author: 0,
              v_autoplay: 1,
              v_controls: 0,
              muted: 1,
              portrait: 0,
              title: 0,
              v_loop: 1,

              // Soundcloud
              s_url: "",
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

    start: function() {
        Log.info("Starting module: " + this.name);
    },
  
    getDom: function() {
        var iframe = document.createElement("iframe");
        iframe.frameborder = 0;
        iframe.style.border = this.config.frameborder;  // style width color
        iframe.name = this.config.name;
        iframe.className = this.config.cssClass;
        iframe.style.width = this.config.width;         // in px not %
        iframe.style.height = this.config.height;       // in px not %
        iframe.scrolling = this.config.scrolling;
        iframe.allowfullscreen = this.config.allowfullscreen;

        if (this.config.mode == "Web") { iframe.src = this.config.w_url                   // web iframe

        } else if (this.config.mode == "Youtube") {
            iframe.allow = this.config.y_allow;
            iframe.src = this.config.y_url  + "?autoplay=" + this.config.y_autoplay           // Youtube iframe
                                          + "&mute=" + this.config.mute
                                          + "&controls=" + this.config.y_controls
                                          + "&loop=" + this.config.y_loop
                                          + "&rel=" + this.config.related;

        } else if (this.config.mode == "Vimeo") {
          iframe.allow = this.config.v_allow;
            iframe.src = this.config.v_url  + "?byline=" + this.config.author           // Vimeo iframe
                                          + "&autoplay=" + this.config.v_autoplay
                                          + "&controls=" + this.config.v_controls
                                          + "&muted=" + this.config.muted
                                          + "&portrait=" + this.config.portrait
                                          + "&title=" + this.config.title
                                          + "&loop=" + this.config.v_loop;

        } else if (this.config.mode == "Soundcloud") {
          iframe.allow = this.config.s_allow;
            iframe.src = this.config.s_url  + "&color=" + this.config.color                 // Soundcloud iframe
                                          + "&auto_play=" + this.config.s_autoplay
                                          + "&hide_related=" + this.config.hide_related
                                          + "&show_comments=" + this.config.show_coments
                                          + "&show_user=" + this.config.show_user
                                          + "&show_reposts=" + this.config.show_reposts
                                          + "&show_teaser=" + this.config.show_teaser
                                          + "&visual=" + this.config.visual;
        }

        return iframe;
    }
});