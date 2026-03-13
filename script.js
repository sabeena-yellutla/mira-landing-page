// Read savedTheme from local storage on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "true") {
    document.body.classList.add("dark");
}

// toggling theme by adding dark class to body, and store to local storage
document.querySelector('.theme-toggle').addEventListener('click', () => {
    const theme = document.body.classList.toggle('dark');
    localStorage.setItem("theme", theme);
});