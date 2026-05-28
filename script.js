const form = document.getElementById("settingsForm");
    const fontsizeInput = document.getElementById("fontsize");
    const fontcolorInput = document.getElementById("fontcolor");

    // Set Cookie
    function setCookie(name, value) {
      document.cookie = `${name}=${value}; path=/`;
    }

    // Get Cookie
    function getCookie(name) {
      let cookies = document.cookie.split(";");

      for (let cookie of cookies) {
        cookie = cookie.trim();

        if (cookie.startsWith(name + "=")) {
          return cookie.substring(name.length + 1);
        }
      }

      return null;
    }

    // Apply preferences
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

    // Load saved cookies
    window.onload = function () {

      const savedSize = getCookie("fontsize");
      const savedColor = getCookie("fontcolor");

      if (savedSize) {
        fontsizeInput.value = savedSize;
      }

      if (savedColor) {
        fontcolorInput.value = savedColor;
      }

      applyPreferences(
        savedSize || 16,
        savedColor || "#000000"
      );
    };

    // Save preferences
    form.addEventListener("submit", function (e) {

      e.preventDefault();

      const size = fontsizeInput.value;
      const color = fontcolorInput.value;

      setCookie("fontsize", size);
      setCookie("fontcolor", color);

      applyPreferences(size, color);
    });
