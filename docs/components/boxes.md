# Boxes

BBoxes are simple content formatting elements, similar to cards, but without actions or titles.

They do not have rounded edges, and can be used in elements to highlight information. (ex: in a side panel)

It is possible to add the class `fixed` so that the box acts as a section header.

```html
<div class="relative">
    <div class="box elevated fixed pa">
        <h3>Google Pixel</h3>
        <p>Last seen just now</p>
        <p class="black small"><i class="material-icons">signal_wifi_0_bar</i> Bbox-GDHSND854-5GHz</p>
        <p class="black small"><i class="material-icons">battery_full</i> 100%</p>
    </div>
    <div style="height: 600px; border: 1px dotted grey;"><small>600px height div</small></div>
</div>
<div style="height: 600px; border: 1px dotted grey;"><small>600px height div</small></div>
```