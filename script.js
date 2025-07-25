// アニメーションの初期化
document.addEventListener("DOMContentLoaded", function () {
  // すべてのアニメーション要素を取得
  const animatedElements = document.querySelectorAll(".fade-in-up");

  // アニメーションのスタート
  animatedElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
  });

  // 少し遅延してからアニメーションを開始
  setTimeout(() => {
    animatedElements.forEach((element) => {
      element.style.animation =
        element.style.animation || "fadeInUp 1s ease-out forwards";
    });
  }, 100);
});

// エントリーボタンのクリックイベント
document.addEventListener("DOMContentLoaded", function () {
  const entryButton = document.querySelector(".entry-button");

  if (entryButton) {
    entryButton.addEventListener("click", function (e) {
      e.preventDefault();

      // ここでエントリーページへのリダイレクトや
      // モーダルの表示などを実装できます
      console.log("Entry button clicked");

      // 現在はアラートで代用
      alert(
        "エントリーページは準備中です。SNSで最新情報をチェックしてください。"
      );
    });
  }
});

// SNSリンクのクリック追跡（オプション）
document.addEventListener("DOMContentLoaded", function () {
  const snsLinks = document.querySelectorAll(".sns-links a");

  snsLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const platform = this.textContent.trim();
      console.log(`SNS link clicked: ${platform}`);

      // ここでアナリティクスのイベント追跡などを実装できます
    });
  });
});

// スムーズスクロール効果（将来の拡張用）
function smoothScrollTo(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// ページロード時の初期化
window.addEventListener("load", function () {
  console.log("JunctionX Kyutech page loaded");

  // ページが完全に読み込まれた後の処理
  // 例：画像の遅延読み込み、外部APIの呼び出しなど
});

// パートナーセクションのアニメーション
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("partners-track");
  const slider = document.getElementById("partners-slider");

  // 無限スクロールのためにロゴを複製
  const logos = Array.from(track.children);
  logos.forEach((logo) => {
    const clone = logo.cloneNode(true);
    track.appendChild(clone);
  });

  // CSSでアニメーションを動かすために、トラック幅の半分をCSS変数としてセット
  // (トラックにはオリジナルとクローンの2セット分のロゴが入っているため)
  const trackWidth = track.getBoundingClientRect().width / 2;
  track.style.setProperty("--track-width", `${trackWidth}px`);
});
