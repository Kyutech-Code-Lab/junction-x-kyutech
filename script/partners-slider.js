// パートナーロゴのグリッド配置制御用スクリプト

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".partners-grid");
  if (!grid) return;

  if (typeof hasPartners === "function" && hasPartners()) {
    const partners = getPartnersData();

    // 既存のコンテンツをクリア
    grid.innerHTML = "";

    // ロゴカードを生成するヘルパー関数
    function createLogoCard(partner) {
      const logoDiv = document.createElement("div");
      logoDiv.className = "partner-logo";
      if (partner.whiteBg) {
        logoDiv.classList.add("white-bg");
      }

      const img = document.createElement("img");
      img.src = partner.logo;
      img.alt = `${partner.name} Logo`;
      img.loading = "lazy";

      logoDiv.appendChild(img);
      return logoDiv;
    }

    // パートナーのロゴをグリッドに追加
    partners.forEach((partner) => {
      const card = createLogoCard(partner);
      grid.appendChild(card);
    });
  } else {
    // パートナーデータがない場合はセクションを非表示にする
    const section = document.querySelector(".partners");
    if (section) {
      section.style.display = "none";
    }
  }
});
