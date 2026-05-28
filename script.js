//your JS code here. If required.
const form = document.querySelector('form');
const fontsize = document.querySelector('#fontsize');
const fontcolor = document.querySelector('#fontcolor');

function applyPreferences(size, color) {
      document.documentElement.style.setProperty(
        "--fontsize",
        size + "px"
      );

      document.documentElement.style.setProperty(
        "--fontcolor",
        color
      );
}

window.onload = function () {
      const savedSize = localStorage.getItem("fontsize");
      const savedColor = localStorage.getItem("fontcolor");

      if (savedSize) {
        fontsize.value = savedSize;
      }

      if (savedColor) {
        fontcolor.value = savedColor;
      }

      applyPreferences(
        savedSize || 16,
        savedColor || "#000000"
      );
    };

    // Save preferences
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const size = fontsize.value;
      const color = fontcolor.value;

      // Store in localStorage
      localStorage.setItem("fontsize", size);
      localStorage.setItem("fontcolor", color);

      // Apply styles immediately
      applyPreferences(size, color);
    });