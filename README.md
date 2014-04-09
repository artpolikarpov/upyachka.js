# upyachka.js

UPYACHKA, web page disease. Symptom: The page with images jerks and jumps during loading. Disease most often exposed long pages with large photos.

It happens when browser doesn’t know dimensions of the images and cannot reserve space for them as it contructs the page.

<img src="http://artpolikarpov.github.io/upyachka.js/examples/sick.gif" width="500" height="370" alt="Page has upyachka">

## Medieval medicine

Earlier it were cured by simply specifying the width and height:

```html
<img src="smile.jpg" width="900" height="600" />
```

<img src="http://artpolikarpov.github.io/upyachka.js/examples/cured.gif" width="500" height="370" alt="Page is cured of upyachka">

## Still sick

Today in the responsive era we want images to be rubber and add something like this:

```css
img {
  max-width: 100%;
  height: auto;
}
```

Pictures become responsive, okay. But in that case because of `height:auto` browser must download the images to calculate their size and cannot reserve the appropriate space to it. Upyachka again here. Despite the specified `width` and `height`.

## Recipe

To cure upyachka, I wrote a tiny plugin that takes `width` and `height` attributes and calculates the size of every responsive image until browser fully loaded and handled them.

Please check the examples:

* [sick.html](http://artpolikarpov.github.io/upyachka.js/examples/sick.html)
* [cured.html](http://artpolikarpov.github.io/upyachka.js/examples/cured.html)

To cure your pages add the following to the `<head>` of your page:

```html
<script src="/path/to/jquery.min.js"></script> <!-- or Zepto -->
<script src="/path/to/upyachka.min.js"></script>
```

Specify both the height and width attributes for images.

Now the layout should be fixed and the images will pop into place when loaded.

---

2014, <a href="https://twitter.com/artpolikarpoff/">Artem Polikarpov</a>
