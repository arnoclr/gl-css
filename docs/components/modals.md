# Modals (dialogs)

A dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken.

Dialogs are purposefully interruptive, so they should be used sparingly.

```html
<!-- modal button -->
<button class="btn primary ripple js-modal-trigger" data-modal="modal1">open modal</button>

<!-- modal structure -->
<aside class="js-modal js-modal-closable" id="modal1">
    <div class="content">
        <div class="header">
            <span>Modal title</span>
            <button class="btn icon" icon="launch"></button>
        </div>
        <div class="body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
            Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
            in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
            vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
            Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
            faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
            Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
            Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
            non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
        </div>
        <div class="actions">
            <button class="btn js-modal-close">close</button>
        </div>
    </div>
</aside>
```

By default, modals are opened automatically when the associated buttons are clicked, however, if you want to open the modals automatically, you use this javascript function.

```js
gl.openModal("modal1")
```

To close all opened modals :

```js
gl.closeModals()
```