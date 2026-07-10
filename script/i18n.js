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
    const activeBtn = document.getElementById(`lang-${lang}`);
    if (activeBtn) {
      activeBtn.classList.add("active");
    }

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
      en: "JunctionX Kyutech | Hackathon 2026 at Kyushu Institute of Technology",
      ja: "JunctionX Kyutech | 九州工業大学ハッカソン 2026",
    };

    const descriptions = {
      en: "JunctionX Kyutech | A large-scale hackathon held Sept 25-27, 2026, at Kyushu Institute of Technology (Kitakyushu). Compete with ideas and technology to create the future.",
      ja: "JunctionX Kyutech | 2026年9月25-27日、九州工業大学（北九州）で開催される大規模ハッカソン。アイデアとテクノロジーで未来を創造しよう。",
    };

    if (titles[lang]) {
      document.title = titles[lang];
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && descriptions[lang]) {
      metaDesc.setAttribute("content", descriptions[lang]);
    }
  }
}

// DOMが読み込まれた後にI18nを初期化
document.addEventListener("DOMContentLoaded", () => {
  new I18n();
});
