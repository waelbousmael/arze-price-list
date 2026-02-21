(async function () {
  const categoryGrid = document.getElementById("categoryGrid");
  const viewCategories = document.getElementById("view-categories");
  const viewCategory = document.getElementById("view-category");
  const backBtn = document.getElementById("backBtn");

  const catTagline = document.getElementById("catTagline");
  const catTitle = document.getElementById("catTitle");
  const catIntro = document.getElementById("catIntro");
  const serviceList = document.getElementById("serviceList");
  const whatsAppBtn = document.getElementById("whatsAppBtn");

  function show(view) {
    viewCategories.classList.remove("view--active");
    viewCategory.classList.remove("view--active");
    view.classList.add("view--active");
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function formatPrice(value, currency) {
    const n = Number(value);
    if (Number.isNaN(n)) return value;
    return `${n} ${currency}`;
  }

  function renderCategories(data) {
    categoryGrid.innerHTML = "";

    data.categories.forEach((c) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "card";

      btn.innerHTML = `
        <div>
          <h3 class="cardTitle">${c.name}</h3>
          <p class="cardDesc">${c.tagline || ""}</p>
        </div>
        <div class="arrow" aria-hidden="true">›</div>
      `;

      btn.addEventListener("click", () => renderCategory(data, c.id));
      categoryGrid.appendChild(btn);
    });
  }

  function renderCategory(data, categoryId) {
    const c = data.categories.find((x) => x.id === categoryId);
    if (!c) return;

    catTagline.textContent = c.tagline || "";
    catTitle.textContent = c.name || "";
    catIntro.textContent = c.intro || "";

    serviceList.innerHTML = "";

    c.services.forEach((s) => {
      const card = document.createElement("article");
      card.className = "serviceCard";

      const badges = [];
      if (s.note) badges.push(s.note);

      card.innerHTML = `
        <div class="serviceTop">
          <h4 class="serviceName">${s.name}</h4>
          <div class="serviceMeta">
            <p class="servicePrice">${formatPrice(s.price, data.currency || "")}</p>
            <p class="serviceDuration">${s.duration_min} min</p>
          </div>
        </div>

        <p class="serviceDesc">${s.description || ""}</p>

        ${
          badges.length
            ? `<div class="badgeRow">${badges
                .map((b) => `<span class="badge">${b}</span>`)
                .join("")}</div>`
            : ""
        }
      `;

      serviceList.appendChild(card);
    });

    // WhatsApp CTA
    const wa =
      (data.contact && data.contact.whatsapp) ||
      "https://wa.me/966598256743";
    whatsAppBtn.href = wa;

    show(viewCategory);
  }

  backBtn.addEventListener("click", () => show(viewCategories));

  // Load menu data
  const res = await fetch("./data/menu.json", { cache: "no-store" });
  const data = await res.json();

  // Render initial
  renderCategories(data);
  show(viewCategories);
})();
