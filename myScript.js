$(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if ($(this).width() <= 768) {
            $("nav").removeClass("sticky");
        }
        else if (scroll >= 1900) {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    }
);


$(window).scroll(function () {
    var scroll_top = $(this).scrollTop();

    if ($(this).width() <= 768) {
        $("#opacity").removeClass("opacity-ul");
    }
    else if (scroll_top >= 1900) {
        $("#opacity").addClass("opacity-ul");
    } else {
        $("#opacity").removeClass("opacity-ul");
    }
});


$(document).ready(function() {
    if ($(this).width() > 768) {
        $(window).scroll(function () {
            $('.hideme').each(function (i) {
                var bottom_of_object = $(this).position().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if (bottom_of_window >= bottom_of_object - 50) {
                    $(this).animate({'opacity': '1'}, 1500);
                }
            });
        });
    }
});


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function(){
        this.classList.toggle("activeSpoiler");
        var contentSpoiler = this.nextElementSibling;
        if (contentSpoiler.style.maxHeight) {
            contentSpoiler.style.maxHeight = null;
        }
        else {
            contentSpoiler.style.maxHeight = contentSpoiler.scrollHeight + "px";
        }
    });
}

$(document).ready(function() {
    $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
    });
    $("nav ul").on("click", function() {
        $("nav ul").removeClass("showing");
    });
});