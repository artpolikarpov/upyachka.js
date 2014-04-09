(function() {
  $(function() {
    var $window, _resize, _style, _upyachka;
    $window = $(window);
    _upyachka = 'upyachka';
    _resize = 'resize';
    _style = 'style';
    return $('img[src][width][height]').each(function() {
      var $img, enabled, fixHeight, height, img, ratio, src, style, width;
      img = this;
      $img = $(img);
      src = $img.attr('src');
      style = $img.attr(_style);
      enabled = true;
      if ($img.width() && $img.height()) {
        return;
      }
      fixHeight = function() {
        return $img.css({
          height: $img.width() / ratio
        });
      };
      $img.on('load', function() {
        if (style) {
          $img.attr({
            style: style
          });
        } else {
          $img.removeAttr(_style);
        }
        enabled = false;
        $img.removeClass(_upyachka);
        return $window.off(_resize, fixHeight);
      });
      width = $img.attr('width');
      height = $img.attr('height');
      ratio = width / height;
      if (enabled) {
        $img.addClass(_upyachka);
        return $window.on(_resize, fixHeight).trigger(_resize);
      }
    });
  });

}).call(this);
