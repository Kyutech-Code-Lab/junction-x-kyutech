// パートナーデータを管理するファイル

// パートナー企業のデータ
const partnersData = [
  {
    name: "Intelligent Design",
    logo: "images/partners/intelligent-design.png",
    whiteBg: true,
  },
	{
		name: "KYOCERA",
		logo: "images/partners/kyocera.jpg",
		whiteBg: true,
	},
	{
		name: "KYUSHU ELECTRIC POWER CO.,LTD.",
		logo: "images/partners/kyushu-electric.bmp",
		whiteBg: true,
	},
	{
		name: "LAC",
		logo: "images/partners/lac.jpg",
		whiteBg: true,
	},
  {
    name: "Local Innovation",
    logo: "images/partners/local-innovation.png",
    whiteBg: true,
  },
	{
		name: "muRata",
		logo: "images/partners/murata.png",
		whiteBg: true,
	},
	{
		name: "pixiv",
		logo: "images/partners/pixiv.png",
		whiteBg: true,
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
		name: "TOYOTA AUTO BODY R&D.",
		logo: "images/partners/toyota-auto-body-randd.png",
		whiteBg: true,
	},
	{
		name: "WingArc1st",
		logo: "images/partners/wingarc1st.svg",
		whiteBg: true,
	},
];

// パートナーデータを取得する関数
function getPartnersData() {
	// アルファベット順にソートして返す
	return [...partnersData].sort((a, b) =>
		a.name.toLowerCase().localeCompare(b.name.toLowerCase(), "en"),
	);
}

// パートナーが存在するかチェックする関数
function hasPartners() {
	return partnersData && partnersData.length > 0;
}
