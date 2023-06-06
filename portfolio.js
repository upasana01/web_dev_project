var tab_links = document.getElementsByClassName("tab_links");
var tab_contents = document.getElementsByClassName("tab_contents");
function opentab(tabname) {
  for (tab_link of tab_links) {
    tab_link.classList.remove("active-link");
  }
  for (tab_content of tab_contents) {
    tab_content.classList.remove("active-tab");
  }
}
var script = document.createElement("script");
script.src = "https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js";
document.head.appendChild(script);
script.onload = function () {
  var typed = new Typed("#element", {
    strings: [
      "CS Grad Student.",
      "Graduate Admin Assistant.",
      "ML/AI Enthusiast.",
    ],
    typeSpeed: 50,
  });
};
