# Notes

Taken from [mozilla](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)

There is a page for [publishing](https://extensionworkshop.com/documentation/publish/package-your-extension/)

## Installing

In Firefox: Open the [about:debugging](about:debugging) page, click the This Firefox option, click the Load Temporary Add-on button, then select any file in your extension's directory.

The extension now installs, and remains installed until you restart Firefox.

Alternatively, you can run the extension from the command line using the web-ext tool.

## Manifest.json

Adds data for the browser to read on the extension

### content_scripts

The most interesting key here is content_scripts, which tells Firefox to load a script into Web pages whose URL matches a specific pattern. In this case, we're asking Firefox to load a script called "borderify.js" into all HTTP or HTTPS pages served from "mozilla.org" or any of its subdomains.
Shown in this json:

```json
"content_scripts": [
    {
      "matches": ["*://*.mozilla.org/*"],
      "js": ["borderify.js"]
    }
  ]
```

### icons

If you choose to supply your own icon, It should be 48x48 pixels. You could also supply a 96x96 pixel icon, for high-resolution displays, and if you do this it will be specified as the 96 property of the icons object in manifest.json:

```json
"icons": {
  "48": "icons/border-48.png",
  "96": "icons/border-96.png"
}
```