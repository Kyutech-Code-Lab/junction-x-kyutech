// パートナーデータを管理するファイル

// パートナー企業のデータ
const partnersData = [
  {
    name: "KYOCERA",
    logo: "images/partners/kyocera.png",
    whiteBg: false,
  },
  {
    name: "LAC",
    logo: "images/partners/lac.jpg",
    whiteBg: true,
  },
  {
    name: "muRata",
    logo: "images/partners/murata.png",
    whiteBg: true,
  },
  {
    name: "pixiv",
    logo: "images/partners/pixiv.svg",
    whiteBg: false,
  },
  {
    name: "PLAY",
    logo: "images/partners/play.png",
    whiteBg: true,
  },
  {
    name: "Sumitomo Mitsui Card Company, Ltd.",
    logo: "images/partners/smbc.jpg",
    whiteBg: true,
  },
  {
    name: "WingArc1st",
    logo: "images/partners/wingarc1st.svg",
    whiteBg: false,
  }
];

// パートナーデータを取得する関数
function getPartnersData() {
  return partnersData;
}

// パートナーが存在するかチェックする関数
function hasPartners() {
  return partnersData && partnersData.length > 0;
}
