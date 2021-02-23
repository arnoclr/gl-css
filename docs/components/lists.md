# Lists

Lists are a continuous group of text or images. They are composed of items containing primary and supplemental actions, which are represented by icons and text.

## Basic

```html
<ul class="list">
    <li>First element</li>
    <li>Second element</li>
    <li>Third element</li>
</ul>
```

You can write on one or two lines :

```html
<ul class="list">
    <li>
        <div class="content">
            <div class="text">
                <span class="first">Two lines item</span>
                <span class="second">Secondary text</span>
            </div>
        </div>
    </li>
    ...
</ul>
```

## Images

You can use avatars or material icons to illustrate each row

```html
<ul class="list">
    <li>
        <div class="content">
            <img class="avatar" src="http://placehold.it/40">
            <div class="text">
                <span class="first">Two lines item</span>
                <span class="second">Secondary text</span>
            </div>
        </div>
    </li>
    <li>
        <div class="content">
            <i class="material-icons avatar">delete</i>
            <div class="text">
                <span class="first">Two lines item</span>
                <span class="second">Secondary text</span>
            </div>
        </div>
    </li>
    <li>
        <div class="content">
            <i class="material-icons avatar outlined">edit</i>
            <div class="text">
                <span class="first">Two lines item</span>
                <span class="second">Secondary text</span>
            </div>
        </div>
    </li>
</ul>
```

## Actions

Lists can be used as buttons, with detailled description of each action

```html
<ul class="list">
    <li class="button ripple">
        <div class="header">
            <i class="material-icons">phonelink_ring</i>
            <span>play sound</span>
            <i class="material-icons action">navigate_next</i>
        </div>
        <p>Device will ring for 5 minutes, even if set to silent.</p>
    </li>
    <li class="button ripple">
        <div class="header">
            <i class="material-icons">phonelink_lock</i>
            <span>secure device</span>
            <i class="material-icons action">navigate_next</i>
        </div>
        <p><b>Lock device and sign out of your Google Account.</b> You can also display a message or phone number on the lock screen. You can still locate the device after it's locked.</p>
    </li>
    <li class="button ripple">
        <div class="header">
            <i class="material-icons">phonelink_erase</i>
            <span>erase device</span>
            <i class="material-icons action">navigate_next</i>
        </div>
        <p><b>Erase all content from the device.</b> After your device has been erased, you can't locate it.</p>
    </li>
</ul>
```

# Classes

ul.list : `no-top-margin`

& li : `button`, `ripple`

& .content span : `main`, `first`, `second`

& .content .avatar : `outlined`