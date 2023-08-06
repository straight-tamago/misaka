//preloader
$(window).on('load', function () {
    var $preloader = $('.preloader');
    $preloader.delay(500).fadeOut('slow');
});

$("#header-1").addClass("header-1")
$("#header-2").addClass("header-2")
$("#header-carousel").addClass("header-carousel")
$("#start").addClass("start")
$("#about").addClass("about")
$("#video").addClass("video")
$("#features").addClass("features")
$("#screenshots").addClass("screenshots")
$("#download").addClass("download")
$("#reviews").addClass("reviews")
$("#team").addClass("team")
$("#stats").addClass("stats")
$("#price").addClass("price")
$("#faq").addClass("faq")
$("#blog").addClass("blog")

//color navbar after scroll
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.navbar').addClass("scrolled");
        $('.navbar').removeClass("no-scrolled");
    } else {
        $('.navbar').removeClass("scrolled");
        $('.navbar').addClass("no-scrolled");
    }
});

//color switcher
$(document).ready(function () {
    $('a.switch-style-button').click(function () {
        $('.colors').toggleClass('active');
    });
});

$(document).ready(function () {
    $('#page-wraper').click(function () {
        $('.colors').removeClass('active');
    });
});

(function ($j) {
    switch_style = {
        onReady: function () {
            this.switch_style_click();
        },
        switch_style_click: function () {
            $(".box").click(function () {
                var id = $(this).attr("id");

                $("#switch_style").attr("href", "css/color/" + id + ".css");
            });
        },
    };
    $j().ready(function () {
        switch_style.onReady();
    });

})(jQuery);

//burger menu
$(".burger-menu").click(function () {
    $(this).toggleClass("menu-on");
});

//navigation
var lastId,
    topMenu = $("#navigation"),
    topMenuHeight = topMenu.outerHeight() - 60,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });

menuItems.click(function (e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 900);
    e.preventDefault();
});


$(window).scroll(function () {

    var fromTop = $(this).scrollTop() + topMenuHeight;
    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop)
            return this;
    });
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";
    if (lastId !== id) {
        lastId = id;
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
});

$(function () {
    $('#navigation li').each(function () {
        var location = window.location.href;
        var link = this.href;
        if (location == link) {
            $(this).addClass('active');
        }
    });
});

(function ($j) {
    switch_style = {
        onReady: function () {
            this.switch_style_click();
        },
        switch_style_click: function () {
            $(".box").click(function () {
                var id = $(this).attr("id");

                $("#switch_style").attr("href", "css/color/" + id + ".css");
            });
        },
    };
    $j().ready(function () {
        switch_style.onReady();
    });

})(jQuery);

// wow
new WOW().init();

// header slider
$("#header-carousel").owlCarousel({
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    nav: true,
    navSpeed: 100,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

// header screenshots slider
$('.header-slider').owlCarousel({
    animateOut: 'fadeOut',
    mouseDrag: false,
    dots: true,
    loop: true,
    navText: [''],
    dots: false,
    items: 1,
    autoplay: true,
    smartSpeed: 450
});

//screenshots slider
$('.screenshots-slider').owlCarousel({
    center: true,
    items: 2,
    loop: true,
    navSpeed: 900,
    nav: false,
    dots: true,
    dotsSpeed: 900,
    navText: ['', ''],
    navText: ['<i class="fa fa-arrow-circle-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>'],
    responsive: {
        375: {
            items: 2,
            navText: ['<i class="fa fa-arrow-circle-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>'],
        },
        768: {
            items: 4,
            navText: ['<i class="fa fa-arrow-circle-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>'],
        },
        992: {
            items: 6,
            navText: ['<i class="fa fa-arrow-circle-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>'],
        },
        1200: {
            items: 6,
            navText: ['<i class="fa fa-arrow-circle-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>'],
        }
    }
});

//reviews-slider
$('.reviews-slider').owlCarousel({
    center: true,
    items: 1,
    loop: true,
    navSpeed: 900,
    dots: true,
    dotsSpeed: 900,
    navText: ['', ''],
    navText: ['<i class="fa fa-arrow-circle-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>'],
    responsive: {
        375: {
            items: 1,
            navText: ['<i class="fa fa-arrow-circle-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>'],
        },
        550: {
            items: 2,
            navText: ['<i class="fa fa-arrow-circle-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>'],
        },
        992: {
            items: 4,
            navText: ['<i class="fa fa-arrow-circle-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>'],
        }
    }
});

//counter
$window = $(window);
var $counters = $('.js-counter');

$window.on('load', function () {
    $counters.each(function () {
        var $counter = $(this);
        if (isInViewport($counter[0])) {
            if (!$counter.hasClass('is-counting')) {
                drawCounter($counter);
            }
        }
    });
});

$window.on('scroll', function () {
    $counters.each(function () {
        var $counter = $(this);
        if (isInViewport($counter[0])) {
            if (!$counter.hasClass('is-counting')) {
                drawCounter($counter);
            }
        }
    });
});

//tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

function isInViewport(elem) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function drawCounter(counter) {
    var $counter = counter;
    var $counter_value = $('.js-counter-value', $counter);
    var end = $counter.data('counter-end');
    var interval = $counter.data('counter-interval');
    var count = 1;

    var update = setInterval(function () {
        $counter_value.text(count);
        $counter.addClass('is-counting');

        if (count === end) {
            clearInterval(update);
            $counter.addClass('is-counting');
        }

        count++;
    }, interval);
}

// Typed
var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 2000;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
};
