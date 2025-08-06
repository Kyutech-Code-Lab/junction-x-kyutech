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

      // Microsoft Formsのエントリーページにリダイレクト
      console.log("Entry button clicked - redirecting to entry form");

      window.open("https://forms.office.com/r/qe9S5n3Q5p", "_blank");
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

// FAQ アコーディオン機能
document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const isExpanded = this.getAttribute("aria-expanded") === "true";

      // 他のアコーディオンを閉じる
      faqQuestions.forEach((otherQuestion) => {
        if (otherQuestion !== this) {
          otherQuestion.setAttribute("aria-expanded", "false");
          otherQuestion.nextElementSibling.classList.remove("active");
        }
      });

      // 現在のアコーディオンを切り替える
      if (isExpanded) {
        this.setAttribute("aria-expanded", "false");
        answer.classList.remove("active");
      } else {
        this.setAttribute("aria-expanded", "true");
        answer.classList.add("active");
      }
    });
  });
});
