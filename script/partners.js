// パートナーデータを管理するファイル

// パートナー企業のデータ
const partnersData = [
  {
    name: "KYOCERA",
    logo: "images/partners/kyocera.jpg",
    whiteBg: true,
    sortKey: "きょうせら",
  },
  {
    name: "KYUSHU ELECTRIC POWER CO.,LTD.",
    logo: "images/partners/kyushu-electric.bmp",
    whiteBg: true,
    sortKey: "きゅうしゅうでんりょく",
  },
  {
    name: "LAC",
    logo: "images/partners/lac.jpg",
    whiteBg: true,
    sortKey: "らっく",
  },
  {
    name: "muRata",
    logo: "images/partners/murata.png",
    whiteBg: true,
    sortKey: "むらた",
  },
  {
    name: "pixiv",
    logo: "images/partners/pixiv.png",
    whiteBg: true,
    sortKey: "ぴくしぶ",
  },
  {
    name: "PLAY",
    logo: "images/partners/play.png",
    whiteBg: true,
    sortKey: "ぷれい",
  },
  {
    name: "Sumitomo Mitsui Card Company, Ltd.",
    logo: "images/partners/smbc.jpg",
    whiteBg: true,
    sortKey: "みついすみともかーど",
  },
  {
    name: "WingArc1st",
    logo: "images/partners/wingarc1st.svg",
    whiteBg: true,
    sortKey: "ういんぐあーくわん",
  }
];

// パートナーデータを取得する関数
function getPartnersData() {
  // アルファベット順にソートして返す
  return [...partnersData].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase(), 'en'));
}

// パートナーが存在するかチェックする関数
function hasPartners() {
  return partnersData && partnersData.length > 0;
}
