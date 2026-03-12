const savedTheme = localStorage.getItem("theme");
if (savedTheme === "true") {
    document.body.classList.add("dark");
}
document.querySelector('.theme-toggle').addEventListener('click', () => {
    const theme = document.body.classList.toggle('dark');
    localStorage.setItem("theme", theme);
});