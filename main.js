const html = document.documentElement;

const icons = {
  light: document.querySelector("#light-icon"),
  dark: document.querySelector("#dark-icon"),
  system: document.querySelector("#system-icon"),
};

const themeMenu = document.querySelector("#theme-menu");
const themeOptions = document.querySelectorAll("[data-theme-option]");
const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

let currentTheme = localStorage.getItem("theme") || "system";
localStorage.setItem("theme", currentTheme);

updateTheme(currentTheme);
updateThemeUI(currentTheme);

function updateThemeUI(theme) {
  Object.entries(icons).forEach(([key, icon]) =>
    key === theme
      ? icon.classList.remove("hidden")
      : icon.classList.add("hidden")
  );

  themeMenu.classList.add("hidden");
  localStorage.setItem("theme", theme);
}
function updateTheme(theme) {
  if (theme === "dark" || (theme === "system" && isDarkMode.matches)) {
    html.classList.add("dark");
  } else if (theme === "light" || (theme === "system" && !isDarkMode.matches)) {
    html.classList.remove("dark");
  }
  currentTheme = theme;
}
isDarkMode.addEventListener("change", ({ matches }) => {
  if (currentTheme === "system") {
    matches ? html.classList.add("dark") : html.classList.remove("dark");
  }
});

themeOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const theme = option.dataset.themeOption;

    updateThemeUI(theme);
    updateTheme(theme);
  });
});

document
  .querySelector("#toggle-theme-menu")
  .addEventListener("click", () => themeMenu.classList.toggle("hidden"));

const toggleMobileMenu = document.querySelector("#toggle-mobile-menu");

toggleMobileMenu.addEventListener("click", () => {
  const mobileMenu = document.querySelector("#mobile-menu");
  const openMenuIcon = document.querySelector("#open-menu-icon");
  const closeMenuIcon = document.querySelector("#close-menu-icon");

  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    openMenuIcon.classList.add("hidden");
    closeMenuIcon.classList.remove("hidden");
  } else {
    mobileMenu.classList.add("hidden");
    openMenuIcon.classList.remove("hidden");
    closeMenuIcon.classList.add("hidden");
  }
});
