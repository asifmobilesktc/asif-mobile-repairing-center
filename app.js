// IMPORTANT: Add your WhatsApp number in international format, digits only (India example: 91XXXXXXXXXX).
// Business WhatsApp number supplied by the owner.
const BUSINESS_WHATSAPP = "918790891353";
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("bookingForm").addEventListener("submit", function(e){
  e.preventDefault();
  const data = new FormData(this);
  const msg = [
    "Hello Asif Mobile Repairing Center, I want to book a repair.",
    "Name: " + data.get("name"),
    "Customer phone: " + data.get("phone"),
    "Device: " + data.get("model"),
    "Service: " + data.get("service"),
    "Problem: " + (data.get("issue") || "Not specified")
  ].join("\n");
  if(!BUSINESS_WHATSAPP){
    document.getElementById("formMsg").textContent = "Website demo ready. Add your WhatsApp business number in app.js to activate booking.";
    return;
  }
  window.open("https://wa.me/" + BUSINESS_WHATSAPP + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
});
document.getElementById("quickWhatsApp").addEventListener("click", function(e){
  if(!BUSINESS_WHATSAPP){e.preventDefault();document.getElementById("formMsg").textContent="Add your WhatsApp business number in app.js to activate WhatsApp.";document.getElementById("booking").scrollIntoView();return;}
  this.href="https://wa.me/"+BUSINESS_WHATSAPP;
});
if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));}
