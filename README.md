<p align="center"><img width="128" height="128" src="./docs/assets/logo.svg"></p>
<h1 align="center">Google Like css</h1>

![GitHub file size in bytes](https://img.shields.io/github/size/aryqs-ipsum/gl-css/build/gl.css?label=gl.css)
![GitHub file size in bytes](https://img.shields.io/github/size/aryqs-ipsum/gl-css/build/gl.js?label=gl.js)

Google Material Design stylesheet for html apps. The project brings multiple components easy to use, to quickly create responsive and readable interfaces.

Documentation : https://gl-css.vercel.app/

# CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Aryqs-Ipsum/gl-css/build/gl.min.css">
<script defer src="https://cdn.jsdelivr.net/gh/Aryqs-Ipsum/gl-css/build/gl.min.js"></script>
```

CDN link is auto-updated, if you want to keep the same version and change it manually, you can download the files from the `/build` folder.

# Examples

## Find my device

![find my device](https://i.imgur.com/1YqvoUcm.png)

Side panel with actions list, and fullscreen map.

[![screenshot](https://i.imgur.com/nDBLXa9.png)](https://i.imgur.com/1YqvoUc.png)
[![visit](https://i.imgur.com/io1R0wR.png)](https://codepen.io/_aryx_/full/KKNmJRM)

## Keep

![notes web app](https://i.imgur.com/qExQmczm.png)

Masonry grid ordered cards, with responsive drawer.

[![screenshot](https://i.imgur.com/nDBLXa9.png)](https://i.imgur.com/qExQmcz.png)
[![visit](https://i.imgur.com/io1R0wR.png)](https://codepen.io/_aryx_/full/rNWmEQo)

## Messages

![messages web app](https://i.imgur.com/DkE09FLm.png)

Messaging app interface, with contact panel, avatars and bubbles.

[![screenshot](https://i.imgur.com/nDBLXa9.png)](https://i.imgur.com/DkE09FL.png)
[![visit](https://i.imgur.com/io1R0wR.png)](https://codepen.io/_aryx_/full/rNWwMQV)

You can find more examples at https://codepen.io/collection/XkKWVv

**These examples are not functional, they allow to illustrate the interfaces that it is possible to create with these css styles.*

***These examples are inspired by Google web applications.*

# Commands

```sh
sass --watch sass/gl.scss:build/gl.css --style compressed
```