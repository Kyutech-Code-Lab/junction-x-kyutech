class I18n {
  constructor() {
    this.currentLanguage = localStorage.getItem("language") || "en";
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.switchLanguage(this.currentLanguage);
  }

  setupEventListeners() {
    const langButtons = document.querySelectorAll(".lang-btn");
    langButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const lang = e.target.id.replace("lang-", "");
        this.switchLanguage(lang);
      });
    });
  }

  switchLanguage(lang) {
    this.currentLanguage = lang;
    localStorage.setItem("language", lang);

    // ボタンのアクティブ状態を更新
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    document.getElementById(`lang-${lang}`).classList.add("active");

    // テキストを更新
    this.updateTexts(lang);

    // HTML lang属性を更新
    document.documentElement.lang = lang;

    // メタデータを更新
    this.updateMetadata(lang);

    // FAQManagerが存在する場合、FAQの言語も更新
    if (window.faqManager) {
      window.faqManager.updateLanguage(lang);
    }
  }

  updateTexts(lang) {
    const elements = document.querySelectorAll("[data-en][data-ja]");
    elements.forEach((element) => {
      const text = element.getAttribute(`data-${lang}`);
      if (text) {
        element.innerHTML = text;
      }
    });
  }

  updateMetadata(lang) {
    const titles = {
      en: "JunctionX Kyutech | Hackathon 2025 at Kyushu Institute of Technology",
      ja: "JunctionX Kyutech | 九州工業大学ハッカソン 2025",
    };

    const descriptions = {
      en: "JunctionX Kyutech | A large-scale hackathon held Sept 26-28, 2025, at Kyushu Institute of Technology (Kitakyushu). Compete with ideas and technology to create the future. Register now!",
      ja: "JunctionX Kyutech | 2025年9月26-28日、九州工業大学（北九州）で開催される大規模ハッカソン。アイデアとテクノロジーで未来を創造しよう。今すぐ申し込み！",
    };

    document.title = titles[lang];
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", descriptions[lang]);
  }
}

// DOMが読み込まれた後にI18nを初期化
document.addEventListener("DOMContentLoaded", () => {
  new I18n();
});
