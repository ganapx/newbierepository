if (!navigator.onLine) {
  window.location.href = "./offline.html";
}

window.addEventListener("offline", () => {
  window.location.href = "./offline.html";
});