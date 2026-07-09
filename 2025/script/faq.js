// FAQ データの管理
const faqData = [
  {
    id: "how-to-apply",
    question: {
      en: "How do I apply?",
      ja: "申し込み方法を教えてください",
    },
    answer: {
      en: 'Apply via <a href="https://forms.office.com/r/qe9S5n3Q5p" target="_blank">https://forms.office.com/r/qe9S5n3Q5p</a> by filling out the form and answering a few questions.',
      ja: '<a href="https://forms.office.com/r/qe9S5n3Q5p" target="_blank">こちらのフォーム</a>にアクセスして、必要事項を記入し、いくつかの質問にお答えいただくことでお申し込みできます。',
    },
  },
  {
    id: "who-can-join",
    question: {
      en: "Who can join?",
      ja: "参加条件はありますか？",
    },
    answer: {
      en: "University students, developers, designers, and planners interested in global hackathons.",
      ja: "グローバルハッカソンに興味をお持ちの大学生、開発者、デザイナー、企画者の方々にご参加いただけます。",
    },
  },
  {
    id: "apply-solo",
    question: {
      en: "Can I apply solo?",
      ja: "個人でも参加できますか？",
    },
    answer: {
      en: "Yes! You can meet teammates later through team-building sessions.",
      ja: "はい、もちろんです！イベント前に開催されるチームビルディングセッションで、チームメンバーを見つけることができます。",
    },
  },
  {
    id: "apply-as-team",
    question: {
      en: "Can I apply as a team?",
      ja: "チームでの参加は可能ですか？",
    },
    answer: {
      en: "Sure! Up to 5 members per team—mix roles as you wish.",
      ja: "はい、チームでのご参加も歓迎いたします！1チーム最大5名まで、役割は自由に組み合わせていただけます。",
    },
  },
  {
    id: "no-team",
    question: {
      en: "I don't have a team—what now?",
      ja: "チームメンバーがいない場合はどうすればよいですか？",
    },
    answer: {
      en: "No worries! Online team-building sessions will be held before the event for selected participants.",
      ja: "ご安心ください！選考を通過された方には、イベント開催前にオンラインでのチームビルディングセッションをご用意しております。",
    },
  },
  {
    id: "selection-method",
    question: {
      en: "Is selection first come, first served?",
      ja: "選考は先着順ですか？",
    },
    answer: {
      en: "Nope. Participants will be chosen based on your application answers.",
      ja: "いいえ、先着順ではありません。申し込み時にご記入いただいた内容を基に選考させていただきます。",
    },
  },
  {
    id: "participation-fee",
    question: {
      en: "Is there a fee to participate?",
      ja: "参加費はかかりますか？",
    },
    answer: {
      en: "None! Just bring your passion.",
      ja: "参加費は無料です！お持ちいただくのは情熱だけです。",
    },
  },
  {
    id: "travel-coverage",
    question: {
      en: "Will travel to Kitakyushu City be covered?",
      ja: "北九州市までの交通費は支給されますか？",
    },
    answer: {
      en: "Travel expenses are self-funded. Please arrange your own transportation to the venue.",
      ja: "交通費につきましては各自でご負担いただいております。会場までの交通手段は各自でご手配をお願いいたします。",
    },
  },
  {
    id: "project-ip",
    question: {
      en: "Who owns the project IP?",
      ja: "開発したプロジェクトの知的財産権は誰に帰属しますか？",
    },
    answer: {
      en: "Your team does. Junction Kyutech doesn't claim any rights.",
      ja: "開発されたプロジェクトの知的財産権は、制作チームに帰属いたします。Junction Kyutechが権利を主張することはございません。",
    },
  },
  {
    id: "lodging-parking",
    question: {
      en: "Are lodging and parking included?",
      ja: "宿泊施設や駐車場は提供されますか？",
    },
    answer: {
      en: "There's a rest zone inside the venue, but you'll need to arrange your own accommodation. No designated parking, so public transport is best.",
      ja: "会場内には休憩エリアをご用意しておりますが、宿泊施設につきましては各自でご手配をお願いいたします。専用駐車場のご用意がございませんので、公共交通機関のご利用をお勧めいたします。",
    },
  },
  {
    id: "meals-provided",
    question: {
      en: "Are meals provided during the event?",
      ja: "食事の負担はどうなっていますか？",
    },
    answer: {
      en: "Yes! We'll provide all meals throughout the hackathon. You don't need to worry about food.",
      ja: "はい！ハッカソン期間中のお食事はこちらで用意いたします。食事についてご心配いただく必要はございません。",
    },
  },
];

class FAQManager {
  constructor() {
    this.currentLanguage = "en";
    this.init();
  }

  init() {
    this.generateFAQHTML();
    this.setupEventListeners();
  }

  generateFAQHTML() {
    const faqSection = document.querySelector(".faq-section");
    const faqTitle = faqSection.querySelector(".faq-title");

    // 既存のFAQアイテムを削除
    const existingItems = faqSection.querySelectorAll(".faq-item");
    existingItems.forEach((item) => item.remove());

    // FAQアイテムを生成
    faqData.forEach((faq) => {
      const faqItem = document.createElement("div");
      faqItem.className = "faq-item";
      faqItem.innerHTML = `
        <button class="faq-question" aria-expanded="false" data-faq-id="${faq.id}">
          <span class="question-text">${faq.question.en}</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer">
          <p class="answer-text">${faq.answer.en}</p>
        </div>
      `;
      faqSection.appendChild(faqItem);
    });
  }

  setupEventListeners() {
    // FAQのアコーディオン機能
    document.addEventListener("click", (e) => {
      const faqQuestion = e.target.closest(".faq-question");
      if (faqQuestion) {
        const faqItem = faqQuestion.closest(".faq-item");
        const faqAnswer = faqItem.querySelector(".faq-answer");
        const isExpanded = faqQuestion.getAttribute("aria-expanded") === "true";

        // 他のFAQを閉じる
        document.querySelectorAll(".faq-question").forEach((question) => {
          if (question !== faqQuestion) {
            question.setAttribute("aria-expanded", "false");
            question
              .closest(".faq-item")
              .querySelector(".faq-answer")
              .classList.remove("active");
          }
        });

        // 現在のFAQをトグル
        if (isExpanded) {
          faqQuestion.setAttribute("aria-expanded", "false");
          faqAnswer.classList.remove("active");
        } else {
          faqQuestion.setAttribute("aria-expanded", "true");
          faqAnswer.classList.add("active");
        }
      }
    });
  }

  updateLanguage(language) {
    this.currentLanguage = language;

    faqData.forEach((faq) => {
      const questionElement = document.querySelector(
        `[data-faq-id="${faq.id}"] .question-text`
      );
      const answerElement = document
        .querySelector(`[data-faq-id="${faq.id}"]`)
        .closest(".faq-item")
        .querySelector(".answer-text");

      if (questionElement && answerElement) {
        questionElement.textContent = faq.question[language];
        answerElement.innerHTML = faq.answer[language];
      }
    });
  }
}

// FAQManagerを初期化
document.addEventListener("DOMContentLoaded", () => {
  window.faqManager = new FAQManager();
});
