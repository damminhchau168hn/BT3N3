document.addEventListener("DOMContentLoaded", function () {

  /* --- Toggle menu mobile (header) --- */
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      mainNav.classList.toggle("show");
    });
  }

  /* --- Bootstrap tooltip init (nếu có) --- */
  var tooltipEls = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipEls.forEach(function (el) {
    if (window.bootstrap) new bootstrap.Tooltip(el);
  });

  /* --- Bộ đếm số lượng (qty-stepper) dùng chung cho trang đặt tour --- */
  document.querySelectorAll(".qty-stepper").forEach(function (stepper) {
    var minus = stepper.querySelector(".qty-minus");
    var plus = stepper.querySelector(".qty-plus");
    var display = stepper.querySelector(".qty-value");
    var min = parseInt(stepper.dataset.min || "0", 10);
    var max = parseInt(stepper.dataset.max || "20", 10);

    function update(val) {
      display.textContent = val;
      stepper.dataset.value = val;
      stepper.dispatchEvent(new CustomEvent("qtychange", { detail: val, bubbles: true }));
    }
    if (minus) minus.addEventListener("click", function () {
      var v = Math.max(min, parseInt(stepper.dataset.value || "0", 10) - 1);
      update(v);
    });
    if (plus) plus.addEventListener("click", function () {
      var v = Math.min(max, parseInt(stepper.dataset.value || "0", 10) + 1);
      update(v);
    });
  });

  /* --- Admin sidebar: thu gọn / mở trên mobile --- */
  var sidebarToggle = document.getElementById("sidebarToggle");
  var adminShell = document.getElementById("adminShell");
  var adminSidebar = document.getElementById("adminSidebar");
  var adminBackdrop = document.getElementById("adminBackdrop");

  if (sidebarToggle && adminShell) {
    sidebarToggle.addEventListener("click", function () {
      if (window.innerWidth < 992) {
        adminSidebar.classList.toggle("show");
        adminBackdrop.classList.toggle("show");
      } else {
        adminShell.classList.toggle("collapsed");
      }
    });
  }
  if (adminBackdrop) {
    adminBackdrop.addEventListener("click", function () {
      adminSidebar.classList.remove("show");
      adminBackdrop.classList.remove("show");
    });
  }
});
