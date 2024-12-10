// Defer script simulation
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      const deferBox = document.getElementById("defer-box");
      deferBox.classList.add("show");
    }, 2000); // Simulate defer script waiting until DOM content is fully parsed
  });