// 数据来源:发卡行官网及主流卡类媒体,核实日期 2026-11-11。发卡行可能随时调整,使用前请以官网为准。
// period: monthly | quarterly | semiannual | annual | anniversary(按开卡周年)
// 带 enroll: true 的 benefit 需要先在发卡行页面激活/登记。
window.VERIFIED_ON = "2026-11-11";
window.CARDS = [
  {
    id: "amex-platinum", name: "American Express Platinum", fee: 895, color: "#8a8d91",
    benefits: [
      { id: "uber", name: "Uber Cash(12 月 $35)", amount: 15, period: "monthly", amountByMonth: { 12: 35 } },
      { id: "digital", name: "数字娱乐", amount: 25, period: "monthly", enroll: true },
      { id: "walmart", name: "Walmart+ 月费", amount: 12.95, period: "monthly" },
      { id: "resy", name: "Resy 餐饮", amount: 100, period: "quarterly", enroll: true },
      { id: "lulu", name: "lululemon", amount: 75, period: "quarterly", enroll: true },
      { id: "hotel", name: "酒店(FHR / Hotel Collection)", amount: 300, period: "semiannual" },
      { id: "airline", name: "航空杂费(选一家航司)", amount: 200, period: "annual" },
      { id: "uberone", name: "Uber One 会员", amount: 120, period: "annual" },
      { id: "clear", name: "CLEAR+", amount: 219, period: "annual" },
      { id: "oura", name: "Oura Ring", amount: 200, period: "annual", enroll: true },
    ],
  },
  {
    id: "amex-hilton-aspire", name: "Amex Hilton Honors Aspire", fee: 550, color: "#1b4f9c",
    benefits: [
      { id: "flight", name: "机票消费", amount: 50, period: "quarterly" },
      { id: "resort", name: "Hilton 度假村消费", amount: 200, period: "semiannual" },
      { id: "clear", name: "CLEAR+", amount: 219, period: "annual" },
      { id: "night", name: "年度免费住宿夜", amount: 0, period: "anniversary" },
    ],
  },
  {
    id: "capone-venturex", name: "Capital One Venture X", fee: 395, color: "#a4262c",
    benefits: [
      { id: "travel", name: "Capital One Travel 抵扣", amount: 300, period: "anniversary" },
      { id: "miles", name: "周年奖励 10,000 里程", amount: 100, period: "anniversary" },
    ],
  },
  {
    id: "amex-gold", name: "American Express Gold", fee: 325, color: "#b8902f",
    benefits: [
      { id: "uber", name: "Uber Cash", amount: 10, period: "monthly" },
      { id: "dining", name: "餐饮(Grubhub / Five Guys / Cheesecake Factory 等)", amount: 10, period: "monthly", enroll: true },
      { id: "dunkin", name: "Dunkin'", amount: 7, period: "monthly", enroll: true },
      { id: "resy", name: "Resy 餐饮", amount: 50, period: "semiannual", enroll: true },
    ],
  },
  {
    id: "amex-green", name: "American Express Green(已停止新申请)", fee: 150, color: "#2e7d5b",
    benefits: [
      { id: "clear", name: "CLEAR+", amount: 219, period: "annual" },
    ],
  },
  {
    id: "csr", name: "Chase Sapphire Reserve", fee: 795, color: "#16365f",
    benefits: [
      { id: "doordash-r", name: "DoorDash 餐厅优惠", amount: 15, period: "monthly", enroll: true },
      { id: "doordash-n", name: "DoorDash 非餐厅优惠(2 次 × $10)", amount: 20, period: "monthly", enroll: true },
      { id: "lyft", name: "Lyft", amount: 10, period: "monthly", enroll: true },
      { id: "peloton", name: "Peloton 会员", amount: 10, period: "monthly", enroll: true },
      { id: "dining", name: "Exclusive Tables 餐饮", amount: 150, period: "semiannual" },
      { id: "stubhub", name: "StubHub / viagogo", amount: 150, period: "semiannual", enroll: true },
      { id: "edit1", name: "The Edit 酒店 #1(预付 2 晚起)", amount: 250, period: "annual" },
      { id: "edit2", name: "The Edit 酒店 #2(预付 2 晚起)", amount: 250, period: "annual" },
      { id: "select", name: "指定酒店(IHG / Omni 等,仅 2026 年)", amount: 250, period: "annual" },
      { id: "travel", name: "旅行抵扣", amount: 300, period: "anniversary" },
    ],
  },
  {
    id: "csp", name: "Chase Sapphire Preferred", fee: 95, color: "#2a6fb0",
    benefits: [
      { id: "hotel", name: "Chase Travel 酒店抵扣", amount: 100, period: "anniversary" },
    ],
  },
  {
    id: "marriott-brilliant", name: "Marriott Bonvoy Brilliant", fee: 650, color: "#7a2e3a",
    benefits: [
      { id: "dining", name: "餐饮", amount: 25, period: "monthly" },
      { id: "night", name: "年度免费住宿夜(≤85k 点)", amount: 0, period: "anniversary" },
    ],
  },
  {
    id: "delta-reserve", name: "Delta SkyMiles Reserve", fee: 650, color: "#a31f34",
    benefits: [
      { id: "resy", name: "Resy 餐饮", amount: 20, period: "monthly", enroll: true },
      { id: "rideshare", name: "网约车", amount: 10, period: "monthly", enroll: true },
      { id: "companion", name: "周年同行票", amount: 0, period: "anniversary" },
    ],
  },
  {
    id: "citi-strata-elite", name: "Citi Strata Elite", fee: 595, color: "#0b6e99",
    benefits: [
      { id: "blacklane", name: "Blacklane 专车", amount: 100, period: "semiannual" },
      { id: "hotel", name: "酒店(cititravel.com,2 晚起)", amount: 300, period: "annual" },
      { id: "splurge", name: "Splurge 指定商户(最多选 2 家)", amount: 200, period: "annual" },
    ],
  },
];
