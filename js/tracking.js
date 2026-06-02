(function () {
  document.addEventListener("click", function (event) {
    const tracked = event.target.closest("[data-track]");
    if (!tracked) return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: tracked.dataset.track,
      category: tracked.dataset.category || "",
      service: tracked.dataset.service || "",
      platform: tracked.dataset.platform || "",
      lang: tracked.dataset.langOption || tracked.dataset.lang || "",
      page: tracked.dataset.page || "",
      url: tracked.href || ""
    });
  });
})();
