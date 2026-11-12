// 金额与规则为整理时的近似值,使用前请对照发卡行官网核对(lastVerified 为空表示尚未核实)。
// period: monthly | quarterly | semiannual | annual | anniversary(按开卡周年)
window.CARDS = [
  {
    id: "amex-platinum", name: "American Express Platinum", fee: 695, color: "#8a8d91",
    benefits: [
      { id: "uber", name: "Uber Cash", amount: 15, period: "monthly", amountByMonth: { 12: 35 } },
      { id: "digital", name: "数字娱乐", amount: 25, period: "monthly" },
      { id: "walmart", name: "Walmart+", amount: 12.95, period: "monthly" },
      { id: "resy", name: "Resy 餐饮", amount: 100, period: "quarterly" },
      { id: "lulu", name: "lululemon", amount: 75, period: "quarterly" },
      { id: "hotel", name: "酒店(FHR / Hotel Collection)", amount: 300, period: "semiannual" },
      { id: "saks", name: "Saks Fifth Avenue", amount: 50, period: "semiannual" },
      { id: "airline", name: "航空杂费", amount: 200, period: "annual" },
      { id: "clear", name: "CLEAR Plus", amount: 209, period: "annual" },
    ],
  },
  {
    id: "amex-hilton-aspire", name: "Amex Hilton Honors Aspire", fee: 550, color: "#1b4f9c",
    benefits: [
      { id: "resort", name: "Hilton 度假村消费", amount: 200, period: "semiannual" },
      { id: "airline", name: "航空杂费", amount: 200, period: "annual" },
      { id: "clear", name: "CLEAR Plus", amount: 209, period: "annual" },
      { id: "night", name: "年度免费住宿夜", amount: 0, period: "annual" },
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
      { id: "dining", name: "餐饮(Grubhub / Five Guys 等)", amount: 10, period: "monthly" },
      { id: "dunkin", name: "Dunkin'", amount: 7, period: "monthly" },
      { id: "resy", name: "Resy 餐饮", amount: 50, period: "semiannual" },
    ],
  },
  {
    id: "amex-green", name: "American Express Green", fee: 150, color: "#2e7d5b",
    benefits: [
      { id: "clear", name: "CLEAR Plus", amount: 209, period: "annual" },
      { id: "lounge", name: "LoungeBuddy 休息室", amount: 100, period: "annual" },
    ],
  },
  {
    id: "csr", name: "Chase Sapphire Reserve", fee: 795, color: "#16365f",
    benefits: [
      { id: "travel", name: "旅行抵扣", amount: 300, period: "annual" },
      { id: "edit", name: "The Edit 酒店", amount: 250, period: "semiannual" },
      { id: "dining", name: "指定餐厅", amount: 150, period: "semiannual" },
      { id: "stubhub", name: "StubHub / viagogo", amount: 150, period: "semiannual" },
    ],
  },
  {
    id: "csp", name: "Chase Sapphire Preferred", fee: 95, color: "#2a6fb0",
    benefits: [
      { id: "hotel", name: "Chase Travel 酒店抵扣", amount: 50, period: "anniversary" },
    ],
  },
  {
    id: "marriott-brilliant", name: "Marriott Bonvoy Brilliant", fee: 650, color: "#7a2e3a",
    benefits: [
      { id: "dining", name: "餐饮", amount: 25, period: "monthly" },
      { id: "marriott", name: "Marriott 酒店消费", amount: 300, period: "annual" },
      { id: "night", name: "周年免费住宿夜", amount: 0, period: "anniversary" },
    ],
  },
  {
    id: "delta-reserve", name: "Delta SkyMiles Reserve", fee: 650, color: "#a31f34",
    benefits: [
      { id: "resy", name: "Resy 餐饮", amount: 20, period: "monthly" },
      { id: "rideshare", name: "网约车", amount: 10, period: "monthly" },
      { id: "stays", name: "Delta Stays", amount: 200, period: "annual" },
      { id: "companion", name: "周年同行票", amount: 0, period: "anniversary" },
    ],
  },
  {
    id: "citi-strata-elite", name: "Citi Strata Elite", fee: 595, color: "#0b6e99",
    benefits: [
      { id: "hotel", name: "Citi Travel 酒店", amount: 300, period: "annual" },
      { id: "splurge", name: "指定商户 Splurge", amount: 200, period: "annual" },
      { id: "blacklane", name: "Blacklane 接送", amount: 200, period: "annual" },
    ],
  },
];
