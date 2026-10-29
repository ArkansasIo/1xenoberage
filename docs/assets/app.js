(() => {
  "use strict";
  const views = ["command", "galaxy", "ship", "trade", "missions", "empire"];
  const titles = { command: "Command Center", galaxy: "Galaxy Navigation", ship: "Ship Systems", trade: "Trade Exchange", missions: "Mission Board", empire: "Empire Overview" };
  let credits = 12500;
  const acceptedMissions = new Set();
  const commodities = [
    { name: "Titanium Alloy", price: 180, stock: 45 },
    { name: "Deuterium Cells", price: 95, stock: 70 },
    { name: "Quantum Circuits", price: 420, stock: 12 },
    { name: "Food Supplies", price: 35, stock: 90 }
  ];

  function showView(name) {
    if (!views.includes(name)) return;
    document.querySelectorAll(".view").forEach(el => el.classList.toggle("active", el.id === "view-" + name));
    document.querySelectorAll("[data-view].nav-link").forEach(el => el.classList.toggle("active", el.dataset.view === name));
    document.getElementById("page-title").textContent = titles[name];
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  document.querySelectorAll("[data-view]").forEach(el => el.addEventListener("click", () => showView(el.dataset.view)));

  document.querySelectorAll("[data-sector]").forEach(el => el.addEventListener("click", () => {
    document.querySelectorAll("[data-sector]").forEach(btn => btn.classList.toggle("selected", btn === el));
    document.getElementById("stat-sector").textContent = el.dataset.sector;
    document.getElementById("sector-message").textContent = "Selected: " + el.dataset.sector + ". Navigation is a frontend demo; no warp command was sent.";
  }));

  function renderCredits() {
    document.getElementById("stat-credits").textContent = credits.toLocaleString("en-US");
    document.getElementById("metric-credits").textContent = credits.toLocaleString("en-US");
  }
  function renderMarket() {
    const body = document.getElementById("market-rows");
    body.replaceChildren();
    commodities.forEach((item, index) => {
      const tr = document.createElement("tr");
      [item.name, item.price.toLocaleString("en-US") + " cr", String(item.stock) + " units"].forEach(value => {
        const td = document.createElement("td"); td.textContent = value; tr.appendChild(td);
      });
      const action = document.createElement("td");
      const buy = document.createElement("button"); buy.className = "secondary"; buy.textContent = "Buy 1";
      buy.addEventListener("click", () => {
        if (item.stock < 1) { document.getElementById("trade-message").textContent = "No demo stock remains for " + item.name + "."; return; }
        if (credits < item.price) { document.getElementById("trade-message").textContent = "Not enough demo credits."; return; }
        credits -= item.price; item.stock -= 1; renderCredits(); renderMarket();
        document.getElementById("trade-message").textContent = "Demo purchase: 1 " + item.name + ". This change is not saved to a server.";
      });
      action.appendChild(buy); tr.appendChild(action); body.appendChild(tr);
    });
  }
  document.querySelectorAll("[data-mission]").forEach(btn => btn.addEventListener("click", () => {
    const name = btn.dataset.mission;
    if (acceptedMissions.has(name)) {
      document.getElementById("mission-message").textContent = "Already accepted in this page session: " + name + ".";
      return;
    }
    acceptedMissions.add(name); btn.textContent = "Accepted"; btn.disabled = true;
    document.getElementById("mission-message").textContent = "Accepted locally: " + name + ". Mission progress is not persisted or connected to a game server.";
    document.getElementById("metric-missions").textContent = String(Math.max(0, 2 - acceptedMissions.size)).padStart(2, "0");
  }));
  renderCredits();
  renderMarket();
})();