/*!
  upyachka.js 0.2.0 | https://github.com/artpolikarpov/upyachka.js
 */

(function () {
  var addEvent = function (el, event, handler) {
    if (el.addEventListener) {
      return el.addEventListener(event, handler, false);
    } else if (el.attachEvent) {
      return el.attachEvent('on' + event, handler, false);
    }
  };

  var removeEvent = function (el, event, handler) {
    if (el.removeEventListener) {
      return el.removeEventListener(event, handler, false);
    } else if (el.detachEvent) {
      return el.detachEvent('on' + event, handler, false);
    }
  };

  var cure = function () {
    var img = this;
    var $img = $(this);
    var style = img.getAttribute('style');
    var className = img.className;
    var enabled = true;
    if ($img.width() && $img.height()) {
      return;
    }
    var fixHeight = function () {
      return img.style.height = (Math.round($img.width() / ratio)) + 'px';
    };
    img.onload = function () {
      if (style) {
        img.setAttribute('style', style);
      } else {
        img.removeAttribute('style');
      }
      enabled = false;
      img.className = className;
      return removeEvent(window, 'resize', fixHeight);
    };
    var width = img.getAttribute('width');
    var height = img.getAttribute('height');
    var ratio;
    if (width / height) {
        ratio = width / height;
    } else {
        var pxRE = /^[0-9]*\.?[0-9]+px$/i;
        if (pxRE.test(width) && pxRE.test(height)) {
            ratio = parseFloat(width) / parseFloat(height);
        }
    }
    if (ratio && enabled) {
        img.className += ' upyachka';
        fixHeight();
        return S.utils.upyachka.addEvent(window, 'resize', fixHeight);
    }
  };

  $(function () {
    $('img[width][height][src]').each(cure);
  });
})();
