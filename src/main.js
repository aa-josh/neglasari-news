import "./index.css";
import { renderHeader } from "./header.js";
import { renderFooter } from "./footer.js";

// Inject header & footer
document.getElementById("site-header").innerHTML = renderHeader();
document.getElementById("site-footer").innerHTML = renderFooter();

// Navbar toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}
