/*! SmartAdmin - v1.4.1 - 2014-06-22 */
!function (a) {
    a.fn.SuperBox = function () {
        var b = a('<div class="superbox-show"></div>'),
        c = a('<img src="" class="superbox-current-img">'),
        d = a('<div class="superbox-close txt-color-white"></div>');
        b.append(c) .append(d);
        a('.superbox-imageinfo');
        return this.each(function () {
            a('.superbox-list') .hover(function () {
                $this = a(this);
                var d = $this.find('.superbox-img'),
                e = d.data('img'),
                f = d.attr('alt') || 'No description',
                g = e,
                h = d.attr('title') || 'No Title';
                c.attr('src', e),
                a('.superbox-list') .removeClass('active'),
                $this.addClass('active'),
                c.find('em') .text(g),
                c.find('>:first-child') .text(h),
                c.find('.superbox-img-description') .text(f),
                0 == a('.superbox-current-img') .css('opacity') && a('.superbox-current-img') .animate({
                    opacity: 1
                }),
                a(this) .next() .hasClass('superbox-show') ? (a('.superbox-list') .removeClass('active'), b.toggle())  : (b.insertAfter(this) .css('display', 'block'), $this.addClass('active'))
            }),
            a('.superbox') .on('click', '.superbox-close', function () {
                a('.superbox-list') .removeClass('active'),
                a('.superbox-current-img') .animate({
                    opacity: 0
                }, 200, function () {
                    a('.superbox-show') .slideUp()
                })
            })
        })
    }
}(jQuery);