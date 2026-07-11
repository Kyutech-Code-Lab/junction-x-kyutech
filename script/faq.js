document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      if (isActive) {
        item.classList.remove("active");
        question.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("active");
        question.setAttribute("aria-expanded", "true");
      }
    });
  });
});
