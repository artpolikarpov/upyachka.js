(function() {
  function cure($img) {
    if ($img.width() && $img.height()) {
      return;
    }

    var _this = this;

    this.$img = $img;
    this.style = $img.attr('style');
    this.ratio = $img.attr('width') / $img.attr('height');

    this.enable();

    $img.on('load', function() {
      _this.disable();
    });
  }

  cure.prototype = {
    fixHeight: function() {
      this.$img.css('height', Math.round(this.$img.width() / this.ratio));
    },
    enable: function() {
      this.$img.addClass('upyachka');
      this.fixHeight();
      $(window).on('resize.upyachka', this.fixHeight);
    },
    disable: function() {
      if (this.style) {
        this.$img.attr('style', this.style);
      }
      else {
        this.$img.removeAttr('style');
      }
      this.enabled = false;
      this.$img.removeClass('upyachka');
      $(window).off('resize.upyachka');
    }
  };

  $.fn.upyachka = function() {
    this.each(function() {
      new cure($(this));
    });

    return this;
  };

  $(function() {
    $('img[width][height][src]').upyachka();
  });
})();
