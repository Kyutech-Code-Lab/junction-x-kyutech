// パートナーデータを管理するファイル

// パートナー企業のデータ
const partnersData = [
  // サンプルデータをコメントアウト
  // {
  //   name: "Sample Partner 1",
  //   logo: "images/junction-x-logo-circle.png",
  //   url: "#",
  //   whiteBg: false
  // },
  {
    name: "Kyushu Electric Power Co., Inc.",
    logo: "images/partners-logo/kyushu-electric-power.png",
    whiteBg: true, // 黒い文字があるロゴなので白背景を使用
  },
  {
    name: "Pixiv",
    logo: "images/partners-logo/pixiv_white.svg",
  },
];

// パートナーデータを取得する関数
function getPartnersData() {
  return partnersData;
}

// パートナーが存在するかチェックする関数
function hasPartners() {
  return partnersData && partnersData.length > 0;
}
