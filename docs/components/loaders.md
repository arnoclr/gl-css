# Loaders (Progress indicators)

Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates. They communicate an app’s state and indicate available actions, such as whether users can navigate away from the current screen.

There are 2 types of indicators: linear and circular versions, each of which comes with a fixed and indeterminate version.

# Usage

Use Determinate version when you know total amount of time to complete a process (eg: file upload & download), otherwise, when you don't know or if action is to speed, just use indeterminate version (eg: page refresh, infinte scroll loading).

[official documentation](https://material.io/components/progress-indicators)

## Circular

Circular version can be used on buttons, or small spaces, generally after user action.

```html
<div class="js-circular-loader"></div>
```

*The determined version is not yet available*

## Linear

Linear variant is generally used to track automatic process, like page load or file download.
It's more adapted for long time process.

```html
<div class="linear-loader">
    <div class="indeterminate"></div>
</div>

<!-- Determinate lenght can be specified with width percent size -->
<div class="linear-loader">
    <div class="determinate" style="width: 25%"></div>
</div>
```