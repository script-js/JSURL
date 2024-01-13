function getLinkWithPopup(url,keyword) {
  var popup1 = window.open("https://jsurl.pages.dev/add?key=" + keyword + "&url=" + url);
}

function getLink(url,keyword) {
  var jsurlgenerator = document.createElement("iframe");
  jsurlgenerator.style = "width:0px;border:none;height:0px;";
  jsurlgenerator.src = "https://jsurl.pages.dev/add?key=" + keyword + "&url=" + url;
  document.appendChild(jsurlgenerator);
  return "https://jsurl.pages.dev/" + keyword
}
