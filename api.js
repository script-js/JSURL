function getLinkWithPopup(url,keyword) {
  var popup1 = window.open("https://jsurl.pages.dev/add?key=" + keyword + "&url=" + url);
}

function getLink(url,keyword) {
  var f = document.createElement("iframe");
  f.style = "width:0px;border:none;height:0px;";
  f.src = "https://jsurl.pages.dev/add?key=" + keyword + "&url=" + url;
  document.body.appendChild(f);
  return "https://jsurl.pages.dev/" + keyword
}
