$ ->
  $window = $ window
  _upyachka = 'upyachka'
  _resize = 'resize'
  _style = 'style'
  $('img[src][width][height]').each ->
    img = this
    $img = $ img
    src = $img.attr 'src'

    style = $img.attr _style
    enabled = true

    if $img.width() and $img.height()
      console.log '# Not a responsive image, exit', img
      return

    fixHeight = ->
      console.log '# Force height', img
      $img.css
        height: $img.width() / ratio

    $img.on 'load', ->
      if style
        $img.attr
          style: style
      else
        $img.removeAttr _style
      console.log '# Done', img
      enabled = false
      $img.removeClass _upyachka
      $window.off _resize, fixHeight

    width = $img.attr('width')
    height = $img.attr('height')
    ratio = width / height

    if enabled
      console.log '# Add class `upyachka`', img
      $img.addClass _upyachka
      $window.on _resize, fixHeight
      .trigger(_resize)