Module.register("yframe", {

  defaults: {
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
    iframe.allow = this.config.allow;
    iframe.allowfullscreen = this.config.allowfullscreen;
    iframe.src = this.config.url  + "?autoplay=" + this.config.autoplay 
                                  + "&mute=" + this.config.mute 
                                  + "&controls=" + this.config.controls 
                                  + "&loop=" + this.config.loop 
                                  + "&rel=" + this.config.related;
    return iframe;
  }
});