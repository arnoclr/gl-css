# Dark Mode

By default, website is loaded in light mode. 
To load it into dark mode, or automatic (according to the device theme), you can add data attribute to the body element :

```xml
<body data-theme="light|auto|dark"></body>
```

Another theme than the one entered in body can be forced using javascript, and the chosen option will be saved in the local storage

```js
gl.setTheme('light|auto|dark')
```

An example of theme selector :

```html
<div class="inline-flex">
    <button class="btn icon" icon="brightness_7" onclick="gl.setTheme('light')" />
    <button class="btn icon" icon="brightness_4" onclick="gl.setTheme('dark')" />
    <button class="btn icon" icon="brightness_auto" onclick="gl.setTheme('auto')" />
</div>
```