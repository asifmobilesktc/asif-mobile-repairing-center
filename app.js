const BUSINESS_WHATSAPP = "918790891353";
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const form = document.getElementById("bookingForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const msg = [
      "Hello Asif Mobile Repairing Center, I need a repair estimate / booking.",
      "Name: " + (data.get("name") || ""),
      "Customer phone: " + (data.get("phone") || ""),
      "Phone model: " + (data.get("model") || ""),
      "Problem category: " + (data.get("service") || ""),
      "Exact problem: " + (data.get("exact") || "Not specified"),
      "Details: " + (data.get("issue") || "Not specified")
    ].join("\\n");
    const url = "https://wa.me/" + BUSINESS_WHATSAPP + "?text=" + encodeURIComponent(msg);
    window.open(url, "_blank", "noopener");
  });
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}
