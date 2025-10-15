browser.menus.create({
  id: "karakeep-link",
  title: "Send to karakeep",
  documentUrlPatterns: ["*://*/*"],
  contexts : [
    "link",
    "selection"
  ],
  onclick(info) {
    const text = info.linkUrl || info.selectionText;
  }
});

// broswer.menus.create({
//   id: "karakeep-image",
//   title: "Send image to karakeep",
//   documentUrlPatterns : ["*"],
//   contexts: [
//     "image"
//   ]
// });