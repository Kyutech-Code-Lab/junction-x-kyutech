// パートナーデータを管理するファイル

// パートナー企業のデータ
const partnersData = [
  // サンプルデータをコメントアウト
  // {
  //   name: "Sample Partner 1",
  //   logo: "images/junction-x-logo-circle.png",
  //   url: "#"
  // },
  {
    name: "Kyushu Electric Power Co., Inc.",
    logo: "images/partners-logo/kyushu-electric-power.png",
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
