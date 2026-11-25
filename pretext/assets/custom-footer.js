(function () {
  function addCustomFooterLink() {
    var footer = document.querySelector(".ptx-page-footer");
    if (!footer || footer.querySelector(".custom-site-footer-link-wrap")) {
      return;
    }

    var wrap = document.createElement("div");
    wrap.className = "custom-site-footer-link-wrap";

    var prefix = document.createElement("span");
    prefix.className = "custom-site-footer-prefix";
    prefix.textContent = "Adapted to PreTeXt by ";

    var link = document.createElement("a");
    link.className = "custom-site-footer-link";
    link.href = "https://www.idems.international/";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "IDEMS International";
    link.setAttribute("aria-label", "Visit IDEMS International");

    wrap.appendChild(prefix);
    wrap.appendChild(link);
    footer.appendChild(wrap);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addCustomFooterLink);
  } else {
    addCustomFooterLink();
  }
})();

// Citations: show (Author, year) instead of [Author, year].
// PreTeXt wraps bibliography cross-references in square brackets; the
// source already supplies round brackets, so remove the square ones.
(function () {
  function tidyCitations() {
    document.querySelectorAll("a.xref").forEach(function (a) {
      var title = a.getAttribute("title") || "";
      var txt = a.textContent;
      if (title.indexOf("Bibliographic Entry") === 0 && /^\[.*\]$/.test(txt)) {
        a.textContent = txt.slice(1, -1);
      }
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", tidyCitations);
  } else {
    tidyCitations();
  }
})();
