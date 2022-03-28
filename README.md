
<p align="center">
    <img src="https://cdn.ssuper.co/icon/circle/icon.png" height=300>
</p>
<p align="center">
 <img src="https://img.shields.io/badge/version-v1.0.0-success" />
    <a href="https://opensource.org/licenses/GPL-3.0" alt="License">
        <img src="https://img.shields.io/badge/license-GPL--3.0-black" /></a>
      
</p>

##  Web3 Messenger Javascript SDK by Ssuper

Welcome to the Web3 Messenger Javascript SDK by Ssuper! 💬🔒

Ssuper is the safest Web3 messenger. Using this SDK you can easily integrate Ssuper into your own platform. 

###  ‎🔥 Quick Start

Copy the code below into your document's `<body>`  to get started. Then, reload and celebrate! 🥳💬

```html
<script async defer crossorigin="anonymous" src="https://cdn.ssuper.co/js-sdk/stable/sdk.js"></script>
```

Want to customize your messenger? Look no further. 👇

### 🛠️ Customization

To tailor the message experience to your platform and users, add an initialization function before loading the SDK.

```html
<script>
window.ssuperAsyncInit = function () {
  window.ssuper.init({
    /*👇 the ethereum address users should message (e.g. your admin!) */
    address: "0x6d96b22376e80c5275c2f8057446535c941afced",
    /* 👇 modal width and height */
    height: "min(635px, 100%)",
    width: "400px",
    /* 👇 header customization */
    backgroundColor: "red",
    // backgroundImage: "url('https://cdn.ssuper.co/icon.png')",
    // backgroundImage: "linear-gradient(to right, #EE0979 0%, #FF6A00 51%, #EE0979 100%)",
    /* 👇 accent color, only "white" and "black" are currently supported */
    accentColor: "black",
  });
}
</script>
<script async defer crossorigin="anonymous" src="https://cdn.ssuper.co/js-sdk/stable/sdk.js"></script>
```

Supply your own values, and build a polished and customized user experience.

**Tip:** All valid CSS is acceptable, unless otherwise stated.

Want more customization? Ask us (or, contribute)! See below. 👇

### 💪 Other Utilities

At any time you can:


**uninstall**

```javascript
window.ssuper.uninstall();
```

**install**

```javascript
window.ssuper.install();
```

**reload**

This uninstalls and then reinstalls the messenger.
```javascript
window.ssuper.reload();
```

**init**

This reloads the messenger with the provided, fresh config.
```javascript
window.ssuper.init({backgroundColor: "purple"});
```

**Pro-tip:** You can also directly access and modify the config at `window.ssuper.config`.  Then `reload` to see the changes.

### ✨ Feature Requests

Please open an issue on this repository with your request, or [contact us](#contact). We can't wait to see what we build together.

### 🛠🐛 Contributing

We welcome any and all bug reports or pull requests.

###  📜 License

We release this project under the [GPL 3.0 License](http://opensource.org/licenses/GPL-3.0).

We request that if you wish to use this code in a commercial context to [contact us](#contact).

### 👋 Contact <a id='contact'></a>

 Questions? Issues? Interested in working with us?
 * Email us at gm (at) ssuper (dot) co OR
 * Message us at https://app.ssuper.co/message/0x6d96b22376e80c5275c2f8057446535c941afced

### 📱 Other Platforms

<p align="center">
    <a href="https://apps.apple.com/us/app/ssuper/id1575109054"><img src="https://cdn.ssuper.co/availability/app_store.webp"></a>
     <a href="https://play.google.com/store/apps/details?id=com.ssuper.ssuper"><img src="https://cdn.ssuper.co/availability/play_store.webp"></a>
      <a href="https://app.ssuper.co"><img src="https://cdn.ssuper.co/availability/web.webp">
</p></a>
</p>