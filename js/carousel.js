(function ($) {
  var Spanizer = (function () {
    var settings = {
      letters: $(".js-letters"),
    };
    return {
      init: function () {
        this.bind();
      },
      bind: function () {
        Spanizer.doSpanize();
      },
      doSpanize: function () {
        settings.letters.html(function (i, el) {
          var spanize = $.trim(el).split("");
          var template = "<span>" + spanize.join("</span><span>") + "</span>";
          return template;
        });
      },
    };
  })();
  // Let's GO!

  if (matchMedia("only screen and (min-width: 991px)").matches) {
    Spanizer.init();
  }
})(jQuery);

if ($(".thumbs-swiper-column").length > 0) {
  var swiperthumbs = new Swiper(".thumbs-swiper-column1", {
    spaceBetween: 0,
    slidesPerView: 4,
    freeMode: true,
    direction: "vertical",
    watchSlidesProgress: true,
  });

  var swiper2 = new Swiper(".thumbs-swiper-column", {
    spaceBetween: 0,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 500,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    thumbs: {
      swiper: swiperthumbs,
    },
  });
}

if ($(".slider-sw-home2").length > 0) {
  var swiper2 = new Swiper(".slider-sw-home2", {
    spaceBetween: 0,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    speed: 2000,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });
}

if ($(".tf-sw-location").length > 0) {
  var preview = $(".tf-sw-location").data("preview");
  var tablet = $(".tf-sw-location").data("tablet");
  var mobile = $(".tf-sw-location").data("mobile");
  var mobileSm = $(".tf-sw-location").data("mobile-sm");
  var spacingLg = $(".tf-sw-location").data("space-lg");
  var spacingMd = $(".tf-sw-location").data("space-md");
  var spacing = $(".tf-sw-location").data("space");
  var perGroup = $(".tf-sw-location").data("pagination-sm");
  var perGroupSm = $(".tf-sw-location").data("pagination");
  var perGroupMd = $(".tf-sw-location").data("pagination-md");
  var perGroupLg = $(".tf-sw-location").data("pagination-lg");
  var swiper = new Swiper(".tf-sw-location", {
    slidesPerView: mobile,
    spaceBetween: spacing,
    pagination: {
      el: ".sw-pagination-location",
      clickable: true,
    },
    slidesPerGroup: perGroup,
    navigation: {
      clickable: true,
      nextEl: ".nav-prev-location",
      prevEl: ".nav-next-location",
    },
    breakpoints: {
      575: {
        slidesPerView: mobileSm,
        spaceBetween: spacing,
        slidesPerGroup: perGroupSm,
      },
      768: {
        slidesPerView: tablet,
        spaceBetween: spacingMd,
        slidesPerGroup: perGroupMd,
      },
      1150: {
        slidesPerView: preview,
        spaceBetween: spacingLg,
        slidesPerGroup: perGroupLg,
      },
    },
  });
}

if ($(".tf-sw-testimonial").length > 0) {
  var mobile = $(".tf-sw-testimonial").data("mobile");
  var mobileSm = $(".tf-sw-testimonial").data("mobile-sm");
  var tablet = $(".tf-sw-testimonial").data("tablet");
  var preview = $(".tf-sw-testimonial").data("preview");
  var spacing = $(".tf-sw-testimonial").data("space");
  var spacingMd = $(".tf-sw-testimonial").data("space-md");
  var spacingLg = $(".tf-sw-testimonial").data("space-lg");
  var centered = $(".tf-sw-testimonial").data("centered");
  var loop = $(".tf-sw-testimonial").data("loop");

  var swTestimonial = new Swiper(".tf-sw-testimonial", {
    slidesPerView: mobile,
    spaceBetween: spacing,
    navigation: {
      clickable: true,
      nextEl: ".nav-prev-testimonial",
      prevEl: ".nav-next-testimonial",
    },
    pagination: {
      el: ".sw-pagination-testimonial",
      clickable: true,
    },
    loop: loop,
    breakpoints: {
      575: {
        slidesPerView: mobileSm,
        spaceBetween: spacing,
      },
      800: {
        slidesPerView: tablet,
        spaceBetween: spacingMd,
        centeredSlides: false,
      },
      1440: {
        slidesPerView: preview,
        spaceBetween: spacingLg,
        centeredSlides: centered,
      },
    },
  });
}

if ($(".tf-sw-partner").length > 0) {
  var preview = $(".tf-sw-partner").data("preview");
  var tablet = $(".tf-sw-partner").data("tablet");
  var mobile = $(".tf-sw-partner").data("mobile");
  var mobileSm = $(".tf-sw-partner").data("mobile-sm");

  var spacing = $(".tf-sw-partner").data("space");
  var spacingMd = $(".tf-sw-partner").data("space-md");
  var spacingLg = $(".tf-sw-partner").data("space-lg");

  var swiper = new Swiper(".tf-sw-partner", {
    slidesPerView: mobile,
    spaceBetween: spacing,
    navigation: {
      clickable: true,
      nextEl: ".nav-prev-partner",
      prevEl: ".nav-next-partner",
    },
    pagination: {
      el: ".sw-pagination-partner",
      clickable: true,
    },
    breakpoints: {
      575: {
        slidesPerView: mobileSm,
        spaceBetween: spacing,
      },
      768: {
        slidesPerView: tablet,
        spaceBetween: spacingMd,
      },

      1200: {
        slidesPerView: preview,
        spaceBetween: spacingLg,
      },
    },
  });
}
// $(".tf-sw-partner").hover(
//   function () {
//     this.swiper.autoplay.stop();
//   },
//   function () {
//     this.swiper.autoplay.start();
//   }
// );

if ($(".tf-sw-categories").length > 0) {
  var preview = $(".tf-sw-categories").data("preview");
  var tablet = $(".tf-sw-categories").data("tablet");
  var mobile = $(".tf-sw-categories").data("mobile");
  var mobileSm = $(".tf-sw-categories").data("mobile-sm");

  var spacing = $(".tf-sw-categories").data("space");
  var spacingMd = $(".tf-sw-categories").data("space-md");
  var spacingLg = $(".tf-sw-categories").data("space-lg");
  var swiper = new Swiper(".tf-sw-categories", {
    slidesPerView: mobile,
    spaceBetween: spacing,
    navigation: {
      clickable: true,
      nextEl: ".nav-prev-category",
      prevEl: ".nav-next-category",
    },
    pagination: {
      el: ".sw-pagination-category",
      clickable: true,
    },
    breakpoints: {
      575: {
        slidesPerView: mobileSm,
        spaceBetween: spacing,
      },
      768: {
        slidesPerView: tablet,
        spaceBetween: spacingMd,
      },

      1200: {
        slidesPerView: preview,
        spaceBetween: spacingLg,
      },
    },
  });
}

if ($(".tf-sw-property").length > 0) {
  var swiper = new Swiper(".tf-sw-property", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      clickable: true,
      nextEl: ".nav-prev-property",
      prevEl: ".nav-next-property",
    },
    pagination: {
      el: ".sw-pagination-property",
      clickable: true,
    },
  });
}

if ($(".tf-sw-benefit").length > 0) {
  var swiper = new Swiper(".tf-sw-benefit", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      clickable: true,
      nextEl: ".nav-prev-benefit",
      prevEl: ".nav-next-benefit",
    },
    pagination: {
      el: ".sw-pagination-benefit",
      clickable: true,
    },
  });
}
if ($(".tf-sw-auto").length > 0) {
  var loop = $(".tf-sw-auto").data("loop");

  var swiper = new Swiper(".tf-sw-auto", {
    // autoplay: {
    //   delay: 1500,
    //   disableOnInteraction: false,
    //   pauseOnMouseEnter: true,
    // },
    speed: 2000,
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: loop,
    navigation: {
      clickable: true,
      nextEl: ".nav-prev-category",
      prevEl: ".nav-next-category",
    },
  });
}

var pagithumbs = new Swiper(".thumbs-sw-pagi", {
  spaceBetween: 14,
  slidesPerView: "auto",
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    375: {
      slidesPerView: 3,
      spaceBetween: 14,
    },
    500: {
      slidesPerView: "auto",
    },
  },
});

var swiperSingle = new Swiper(".sw-single", {
  spaceBetween: 16,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 500,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  thumbs: {
    swiper: pagithumbs,
  },
  navigation: {
    clickable: true,
    nextEl: ".nav-prev-single",
    prevEl: ".nav-next-single",
  },
});

if ($(".tf-latest-property").length > 0) {
  var previewLg = $(".tf-latest-property").data("preview-lg");
  var previewMd = $(".tf-latest-property").data("preview-md");
  var previewSm = $(".tf-latest-property").data("preview-sm");
  var spacing = $(".tf-latest-property").data("space");
  var centered = $(".tf-latest-property").data("centered");
  var loop = $(".tf-latest-property").data("loop");
  var swiper = new Swiper(".tf-latest-property", {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      reverseDirection: false,
    },

    speed: 3000,
    slidesPerView: 1,
    loop: loop,
    spaceBetween: spacing,
    centeredSlides: centered,
    breakpoints: {
      600: {
        slidesPerView: previewSm,
        spaceBetween: 20,
        centeredSlides: false,
      },
      991: {
        slidesPerView: previewMd,
        spaceBetween: 20,
        centeredSlides: false,
      },

      1550: {
        slidesPerView: previewLg,
        spaceBetween: spacing,
      },
    },
  });
}

if ($(".tf-sw-result").length > 0) {
  var swiper = new Swiper(".tf-sw-result", {
    slidesPerView: 1,
    spaceBetween: 15,
    navigation: {
      clickable: true,
      nextEl: ".nav-next-result",
      prevEl: ".nav-prev-result",
    },
    loop: true,
    pagination: {
      el: ".sw-pagination-result",
      clickable: true,
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },

      1550: {
        slidesPerView: 5.2,
        spaceBetween: 30,
      },
    },
  });
}
