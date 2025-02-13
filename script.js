// Get theme from localStorage or default to dark
let currentTheme = localStorage.getItem("theme") || "dark";

// Get DOM elements
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Theme colors
const themes = {
  light: {
    background: "#ffffff",
    text: "#333333",
    border: "#333333",
    cardBg: "#333",
    cardText: "#ffffff",
    highlight: "#ea00ff",
    socialIcons: 0,
  },
  dark: {
    background: "#333333",
    text: "#ffffff",
    border: "#d6d6d6",
    cardBg: "#ffffff",
    cardText: "#333333",
    highlight: "#ea00ff",
    socialIcons: 1,
  },
};

// Apply theme function
function applyTheme(theme) {
  const colors = themes[theme];

  // Update CSS variables
  document.documentElement.style.setProperty("--background", colors.background);
  document.documentElement.style.setProperty("--text", colors.text);
  document.documentElement.style.setProperty("--border", colors.border);
  document.documentElement.style.setProperty("--card-bg", colors.cardBg);
  document.documentElement.style.setProperty("--card-text", colors.cardText);
  document.documentElement.style.setProperty("--highlight", colors.highlight);
  document.documentElement.style.setProperty(
    "--social-icons",
    colors.socialIcons
  );

  // Update toggle button
  themeToggle.textContent = theme === "dark" ? "🌙" : "☀️";

  // Save theme preference
  localStorage.setItem("theme", theme);
  currentTheme = theme;
}

// Toggle theme function
function toggleTheme() {
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
}

// Add click event listener
themeToggle.addEventListener("click", toggleTheme);

// Apply initial theme
applyTheme(currentTheme);
