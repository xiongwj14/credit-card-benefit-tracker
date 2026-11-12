(function () {
  const STORE = "benefit-tracker-v1";
  const DAY = 86400000;
  const PERIOD_LABEL = { monthly: "每月", quarterly: "每季度", semiannual: "每半年", annual: "每年", anniversary: "开卡周年" };
  const PERIOD_ORDER = ["monthly", "quarterly", "semiannual", "annual", "anniversary"];

  let state = load();

  function load() {
    try { return JSON.parse(localStorage.getItem(STORE)) || { cards: [], used: {}, notified: {} }; }
    catch (e) { return { cards: [], used: {}, notified: {} }; }
  }
  function save() { localStorage.setItem(STORE, JSON.stringify(state)); }

  function parseDate(s) { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); }
  function daysBetween(a, b) { return Math.ceil((b - a) / DAY); }

  // 返回当前周期的 key 与结束时间(次日 0 点)
  function periodInfo(period, openDate, now) {
    const y = now.getFullYear(), m = now.getMonth();
    switch (period) {
      case "monthly": return { key: `${y}-${m + 1}`, end: new Date(y, m + 1, 1) };
      case "quarterly": { const q = Math.floor(m / 3); return { key: `${y}-Q${q + 1}`, end: new Date(y, q * 3 + 3, 1) }; }
      case "semiannual": { const h = m < 6 ? 0 : 1; return { key: `${y}-H${h + 1}`, end: new Date(y, h * 6 + 6, 1) }; }
      case "annual": return { key: `${y}`, end: new Date(y + 1, 0, 1) };
      case "anniversary": {
        const o = parseDate(openDate);
        let start = new Date(y, o.getMonth(), o.getDate());
        if (start > now) start = new Date(y - 1, o.getMonth(), o.getDate());
        const end = new Date(start.getFullYear() + 1, start.getMonth(), start.getDate());
        return { key: `A${start.getFullYear()}`, end };
      }
    }
  }

  function benefitAmount(b, now) {
    return (b.amountByMonth && b.period === "monthly" && b.amountByMonth[now.getMonth() + 1]) || b.amount;
  }

  function entries(now) {
    const out = [];
    state.cards.forEach((sc) => {
      const card = CARDS.find((c) => c.id === sc.id);
      if (!card) return;
      card.benefits.forEach((b) => {
        const p = periodInfo(b.period, sc.openDate, now);
        const uid = `${card.id}|${b.id}|${p.key}`;
        out.push({ card, b, uid, used: !!state.used[uid], amount: benefitAmount(b, now), daysLeft: daysBetween(now, p.end) });
      });
    });
    return out;
  }

  const money = (n) => "$" + (Number.isInteger(n) ? n : n.toFixed(2));
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function render() {
    const now = new Date();
    const list = entries(now);
    const total = list.reduce((s, e) => s + e.amount, 0);
    const used = list.filter((e) => e.used).reduce((s, e) => s + e.amount, 0);
    const soon = list.filter((e) => !e.used && e.amount > 0 && e.daysLeft <= 7).length;

    $("summary").innerHTML = state.cards.length
      ? `<div class="stat"><b>${money(used)}</b><span>本周期已使用</span></div>
         <div class="stat"><b>${money(total - used)}</b><span>本周期待使用</span></div>
         <div class="stat"><b>${soon}</b><span>7 天内到期未用</span></div>`
      : "";

    if (!state.cards.length) {
      $("cards").innerHTML = '<div class="empty">还没有添加卡片,点击右上角「添加卡片」开始。</div>';
      return;
    }
    $("cards").innerHTML = state.cards.map((sc) => {
      const card = CARDS.find((c) => c.id === sc.id);
      if (!card) return "";
      const mine = list.filter((e) => e.card.id === card.id);
      const groups = PERIOD_ORDER.map((p) => {
        const rows = mine.filter((e) => e.b.period === p);
        if (!rows.length) return "";
        return `<div class="group"><h3>${PERIOD_LABEL[p]}</h3>${rows.map((e) => `
          <label class="row ${e.used ? "done" : ""}">
            <input type="checkbox" data-uid="${esc(e.uid)}" ${e.used ? "checked" : ""}>
            <span class="name">${esc(e.b.name)}</span>
            <span class="amt">${e.amount ? money(e.amount) : "—"}</span>
            <span class="left ${!e.used && e.daysLeft <= 7 ? "soon" : ""}">${e.used ? "已完成" : `剩 ${e.daysLeft} 天`}</span>
          </label>`).join("")}</div>`;
      }).join("");
      const open = sc.openDate ? ` · 开卡日 ${sc.openDate}` : "";
      return `<div class="card" style="--c:${card.color}">
        <div class="card-head"><div><h2>${esc(card.name)}</h2><small>年费 ${money(card.fee)}${open}</small></div>
        <button class="link" data-remove="${card.id}">移除</button></div>${groups}</div>`;
    }).join("");
  }

  function renderAddList() {
    $("add-list").innerHTML = CARDS.map((c) => {
      const has = state.cards.some((s) => s.id === c.id);
      return `<button data-add="${c.id}" ${has ? "disabled" : ""}><span>${esc(c.name)}</span><span>${has ? "已添加" : "年费 " + money(c.fee)}</span></button>`;
    }).join("");
  }

  function addCard(id) {
    const card = CARDS.find((c) => c.id === id);
    const sc = { id };
    if (card.benefits.some((b) => b.period === "anniversary")) {
      const v = prompt("该卡有按开卡周年计算的 benefit,请输入开卡日期(YYYY-MM-DD):");
      if (!v || !/^\d{4}-\d{2}-\d{2}$/.test(v) || isNaN(parseDate(v))) { alert("日期格式不正确,已取消添加。"); return; }
      sc.openDate = v;
    }
    state.cards.push(sc);
    save(); renderAddList(); render();
  }

  // 浏览器通知:页面打开期间,每个 benefit 每个周期最多提醒一次
  function updateNotifyBtn() {
    const btn = $("notify-btn");
    if (!("Notification" in window)) { btn.style.display = "none"; return; }
    btn.textContent = Notification.permission === "granted" ? "通知已开启" : "开启到期通知";
    btn.disabled = Notification.permission === "granted";
  }
  function checkNotifications() {
    if (!("Notification" in window) || Notification.permission !== "granted") return;
    entries(new Date()).filter((e) => !e.used && e.amount > 0 && e.daysLeft <= 7 && !state.notified[e.uid]).forEach((e) => {
      new Notification("Benefit 即将到期", { body: `${e.card.name} · ${e.b.name} ${money(e.amount)},剩 ${e.daysLeft} 天` });
      state.notified[e.uid] = true;
    });
    save();
  }

  document.addEventListener("change", (ev) => {
    const uid = ev.target.dataset && ev.target.dataset.uid;
    if (!uid) return;
    if (ev.target.checked) state.used[uid] = true; else delete state.used[uid];
    save(); render();
  });
  document.addEventListener("click", (ev) => {
    const t = ev.target;
    if (t.dataset.add) addCard(t.closest("button").dataset.add);
    else if (t.closest && t.closest("[data-add]")) addCard(t.closest("[data-add]").dataset.add);
    if (t.dataset.remove && confirm("移除该卡及其本地记录?")) {
      state.cards = state.cards.filter((c) => c.id !== t.dataset.remove);
      Object.keys(state.used).forEach((k) => { if (k.startsWith(t.dataset.remove + "|")) delete state.used[k]; });
      save(); render(); renderAddList();
    }
  });
  $("add-btn").onclick = () => { renderAddList(); $("add-dialog").showModal(); };
  $("notify-btn").onclick = () => Notification.requestPermission().then(() => { updateNotifyBtn(); checkNotifications(); });

  updateNotifyBtn(); render(); checkNotifications();
  setInterval(() => { render(); checkNotifications(); }, 60 * 60 * 1000);
})();
