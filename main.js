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
