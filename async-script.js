// Async script simulation
window.addEventListener("load", () => {
    setTimeout(() => {
      const asyncBox = document.getElementById("async-box");
      asyncBox.classList.add("show");
    }, Math.random() * 2000); // Simulate random async load time
  });
  