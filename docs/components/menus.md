# Menus

A menu displays a list of choices on a temporary surface. They appear when users interact with a button, action, or other control.

Wrap button and menu into same div, with a relative position.

```html
<div class="relative">
    <button class="btn icon js-menu-trigger" icon="more_vert" data-menu="menu1" />

    <div class="js-menu top-left" id="menu1">
        <a href="#!">Settings</a>
        <a href="#!">Feedback</a>
    </div>
</div>
```

With body and icons :

```html
<div class="relative">
    <button class="btn js-menu-trigger" title="import photos" data-menu="m-upload"><i class="material-icons">file_upload</i> Import</button>

    <div id="m-upload" class="js-menu bottom-left icons">
        <div class="ma">
            <small>Import from</small>
        </div>
        <a href="#!"><i class="material-icons">laptop_chromebook</i> Computer</a>
        <a href="#!"><i class="material-icons">cloud</i> Cloud storage</a>
        <ul class="list">
            <li class="button">
                <div class="content">
                    <img src="http://www.icons101.com/icons/47/Icons_Material_Design_by_Rammist/128/cloud.png" class="avatar">
                    <div class="text">
                        <span class="first">Download save and sync</span>
                        <span class="second">Automatically save photos from your PC or Mac</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
```

# Classes

.js-menu : `top-right`, `top-left`, `bottom-right`, `bottom-left`, `icons`