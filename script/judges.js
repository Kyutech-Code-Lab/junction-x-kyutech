// 審査員データとカードの描画を管理するファイル

const judgesData = [
  {
    name: {
      en: "Mr. Jirou Kamegawa",
      ja: "亀川 滋郎氏",
    },
    role: {
      en: "Manager, Innovation Group, Digital Transformation Promotion Division, Technical Solution Headquarters, Kyushu Electric Power Company, Incorporated",
      ja: "九州電力株式会社　テクニカルソリューション統括本部　ＤＸ推進本部<br>イノベーショングループ長",
    },
  },
  {
    name: {
      en: "Mr. Rin Sato",
      ja: "佐藤 凜氏",
    },
    role: {
      en: "Co-Founder & CEO, Kick Space Technologies Inc.",
      ja: "キックスペーステクノロジーズ株式会社<br>代表取締役CEO",
    },
  },
];

function createJudgeCard(judge) {
  const card = document.createElement("article");
  card.className = "judge-card";

  card.innerHTML = `
    <div class="judge-info">
      <h3 data-en="${judge.name.en}" data-ja="${judge.name.ja}">${judge.name.en}</h3>
      <p data-en="${judge.role.en}" data-ja="${judge.role.ja}">${judge.role.en}</p>
    </div>
  `;

  return card;
}

document.addEventListener("DOMContentLoaded", () => {
  const judgesGrid = document.querySelector(".judges-grid");
  if (!judgesGrid) return;

  judgesData.forEach((judge) => {
    judgesGrid.appendChild(createJudgeCard(judge));
  });
});
