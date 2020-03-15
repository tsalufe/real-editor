The following does not work because of github's CORS restrictions. Please go to https://raw.githubusercontent.com/tsalufe/real-editor/master/real-editor.js and copy the code before dropping it directly on your browser's console and hit enter.

To stop it, please drop the following code on your browser's console and hit enter,
```
window.RealEditorInst.destroy();
```


Add the following script tag to your html file,

```
<script type="text/javascript" src="https://raw.githubusercontent.com/tsalufe/real-editor/master/real-editor.js"></script>
```

Or, drop the following script to your browser console

```
let script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://raw.githubusercontent.com/tsalufe/real-editor/master/real-editor.js';
document.body.append(script);
```
