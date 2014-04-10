# upyachka.js

UPYACHKA, web page disease. Symptoms: the page with images jerks and jumps around during loading. Long pages with large photos are often susceptible to upyachka.

<img src="http://artpolikarpov.github.io/upyachka.js/examples/sick.gif" width="500" height="370" alt="Page has upyachka">

It happens when browser doesn’t know the dimensions of images and cannot reserve space for them as it contructs the page.

## Medieval medicine

Earlier it was treated by simply specifying the width and height:

```html
<img src="smile.jpg" width="900" height="600" />
```

<img src="http://artpolikarpov.github.io/upyachka.js/examples/cured.gif" width="500" height="370" alt="Page is cured of upyachka">

## Still sick

Today in the responsive era it’s not enough. Quite often we want images to be rubber and add something like this:

```css
img {
  max-width: 100%;
  height: auto;
}
```

Pictures become responsive, okay. But because of `height:auto` browser must download the images to calculate their size and cannot reserve the appropriate space to it beforehand. Upyachka again here. Despite the specified `width` and `height`.

## Recipe

To cure upyachka, I wrote a tiny vanilla plugin that takes `width` and `height` attributes and calculates the size of every responsive image until browser fully loaded and handled them.

Please check the examples:

* [sick.html](http://artpolikarpov.github.io/upyachka.js/examples/sick.html)
* [cured.html](http://artpolikarpov.github.io/upyachka.js/examples/cured.html)

To cure your pages add the following to the `<head>` of your page:

```html
<script src="/path/to/upyachka.min.js"></script>
```

Specify both the height and width attributes for images.

Now the layout should be fixed and the images will pop into place when loaded.

Placehold loading images with background using temporary `upyachka` class:

```css
img.upyachka {
  background-color: #f3f3f3;
}
```

---

2014, <a href="https://twitter.com/artpolikarpoff/">Artem Polikarpov</a>
