$('.faq-list_item').on('click', function () {
    $this = $(this);
    if ($this.hasClass('js-open')) {
        $this.removeClass('js-open');
        $this.find('.answer').slideUp(300);
    } else {
        $this.find('.answer').slideDown({
            duration: 300, complete: function () {
                $this.addClass('js-open');
            }
        });
    }
});
$(document).on('click', 'a[href^="#"]', function (event) {
	event.preventDefault();
	$('html, body').animate({
		 scrollTop: $($.attr(this, 'href')).offset().top
	}, 500);
});
/******************* timer ********************/
function Timer() {
	function e(e) {
		var i = t(new Date(e).getHours()),
			o = t(new Date(e).getMinutes()),
			n = t(new Date(e).getSeconds());
		s.each(function () {
			$(this).find(".hours").text(i), $(this).find(".minutes").text(o), $(this).find(".seconds").text(n)
		})
	}

	function t(e) {
		return e >= 10 ? e : "0" + e
	}

	function i() {
		a == r ? clearInterval(d) : (a -= 1e3, e(a))
	}

	function o() {
		d = setInterval(i, 1e3)
	}
	var s = $(".timer"),
		n = new Date,
		r = 60 * n.getTimezoneOffset() * 1e3,
		l = new Date((new Date).getTime() + 864e5);
	l.setHours(0), l.setMinutes(0), l.setSeconds(0);
	var a = l - n + r;
	i(), o();
	var d
}
/******************* end timer ********************/
Timer();