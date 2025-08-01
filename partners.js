// パートナーデータを管理するファイル

// パートナー企業のデータ
const partnersData = [
  // 現在はサンプルデータをコメントアウト
  // {
  //   name: "Sample Partner 1",
  //   logo: "images/junction-x-logo-circle.png",
  //   url: "#"
  // },
];

// パートナーデータを取得する関数
function getPartnersData() {
  return partnersData;
}

// パートナーが存在するかチェックする関数
function hasPartners() {
  return partnersData && partnersData.length > 0;
}
