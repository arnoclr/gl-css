# Buttons

Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:

* Dialogs
* Modal windows
* Forms
* Cards
* Toolbars

Markup :

```html
<button class="btn">label</button>
```

You can choose different styles, depending on the importance of the button in the interface.

```html
<button class="btn outlined">outlined</button>
<button class="btn primary">colored</button>
```

You can illustrate your buttons using material icons, or you can create button icons, for simple actions (eg: likes).

```html
<div class="inline-flex">
    <button class="btn"><i class="material-icons">edit</i> update informations</button>
    <button class="btn icon" icon="send"></button>
</div>
```

Buttons can be sized in 3 formats, small, normal and large
```html
<button class="btn outlined small">small action</button>
<button class="btn outlined">normal size</button>
<button class="btn outlined large">large button</button>
```

# Classes

.btn : `ripple`