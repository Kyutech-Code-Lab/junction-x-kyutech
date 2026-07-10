// パートナーロゴの無限カルーセル制御用スクリプト

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".partners-track");
  if (!track) return;

  if (typeof hasPartners === "function" && hasPartners()) {
    const partners = getPartnersData();

    // 既存のコンテンツをクリア
    track.innerHTML = "";

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

    // パートナーのロゴをトラックに追加
    partners.forEach((partner) => {
      const card = createLogoCard(partner);
      track.appendChild(card);
    });

    // 無限スクロール用にクローンを作成
    if (partners.length >= 3) {
      const originalLogos = Array.from(track.children);
      
      // 1回目のクローンを追加
      originalLogos.forEach((logo) => {
        const clone = logo.cloneNode(true);
        track.appendChild(clone);
      });
      
      // 2回目のクローンを追加 (超ワイド画面対応)
      originalLogos.forEach((logo) => {
        const clone = logo.cloneNode(true);
        track.appendChild(clone);
      });

      track.classList.add("animated");
    } else {
      track.classList.add("static");
    }
  } else {
    // パートナーデータがない場合はセクションを非表示にする
    const section = document.querySelector(".partners");
    if (section) {
      section.style.display = "none";
    }
  }
});
