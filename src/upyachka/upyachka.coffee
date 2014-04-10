domready = require 'domready'
widthOrHeight = require './width-or-height/width-or-height.js'

addEvent = (el, event, handler) ->
  if el.addEventListener
    el.addEventListener event, handler, false
  else if el.attachEvent
    el.attachEvent 'on' + event, handler, false

removeEvent = (el, event, handler) ->
  if el.removeEventListener
    el.removeEventListener event, handler, false
  else if el.detachEvent
    el.detachEvent 'on' + event, handler, false

cure = (img) ->
  # console.log '# Cure', img

  style = img.getAttribute 'style'
  className = img.className
  enabled = true

  if (widthOrHeight img, 'width') and (widthOrHeight img, 'height')
    console.log '# Not a responsive image, exit', (widthOrHeight img, 'width'), (widthOrHeight img, 'height')
    return

  fixHeight = ->
    # console.log '# Force height', img
    img.style.height = (Math.round (widthOrHeight img, 'width') / ratio) + 'px'

  img.onload = ->
    if style
      img.setAttribute 'style', style
    else
      img.removeAttribute 'style'
    # console.log '# Done', img
    enabled = false
    img.className =  className
    removeEvent window, 'resize', fixHeight

  width = img.getAttribute 'width'
  height = img.getAttribute 'height'
  ratio = width / height

  if enabled
    # console.log '# Add class `upyachka`', img
    img.className += ' upyachka'
    fixHeight()
    addEvent window, 'resize', fixHeight

domready ->
  cure img for img in document.getElementsByTagName 'img' when (img.getAttribute 'width') and (img.getAttribute 'height') and (img.getAttribute 'src')
