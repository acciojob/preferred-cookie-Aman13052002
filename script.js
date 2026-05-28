const form = document.getElementById("settingsForm");
  const fontsizeInput = document.getElementById("fontsize");
  const fontcolorInput = document.getElementById("fontcolor");

  // Set Cookie
  function setCookie(name, value, days = 365) {
    const date = new Date();

    date.setTime(
      date.getTime() + (days * 24 * 60 * 60 * 1000)
    );

    document.cookie =
      `${name}=${value}; expires=${date.toUTCString()}; path=/`;
  }

  // Get Cookie
  function getCookie(name) {
    const cookies = document.cookie.split(";");

    for (let cookie of cookies) {
      cookie = cookie.trim();

      if (cookie.startsWith(name + "=")) {
        return cookie.substring(name.length + 1);
      }
    }

    return null;
  }

  // Apply styles
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

  // Load saved preferences
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

  // Save button
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const size = fontsizeInput.value;
    const color = fontcolorInput.value;

    // Save cookies
    setCookie("fontsize", size);
    setCookie("fontcolor", color);

    // Apply immediately
    applyPreferences(size, color);
  });