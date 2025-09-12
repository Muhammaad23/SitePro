const translations = {
    uz: {
        home: "Bosh sahifa",
        browse: "Mavzularni ko'rish",
        how: "Qanday ishlaydi",
        faqs: "Savol Javob",
        contact: "Aloqa",
        pages: "Sahifalar",
        topics: "Mavzular ro'yxati",
        contactForm: "Aloqa Formasi",
        platform:"Biznesingizni yangi bosqichga Biz bilan olib chiqing",
        search:"Qidiruv",
        web:"Veb dizayn",
        when:"bu yangi ochilgan yoki biznesini  yanada rivojlantirishni xohlayotganlar uchun kuchli marketing yechimlarini taqdim etadigan jamoa",
        chat:"Biz bilan bog‘laning",
        name:"ismingiz",
        send:"yuborish",
        finance:"moliya",
        topic:"Mavzular ro'yxati shabloniga bosh sahifa, ro'yxat sahifasi, batafsil sahifa va aloqa sahifasi kiradi. Siz o'zingizning CMS talablaringizni o'zgartirishingiz va moslashingiz mumkin.",
        learn:"Batafsil ma'lumot",
        share:"baham ko'ring"
    },
    en: {
        home: "Home",
        browse: "Browse Topics",
        how: "How it works",
        faqs: "FAQs",
        contact: "Contact",
        pages: "Pages",
        topics: "Topics Listing",
        contactForm: "Contact Form",
        platform:"Take your business to the next level with us",
        search:"Search",
        web:"Web Design",
        when:"This is a team that provides powerful marketing solutions for those who are just starting out or want to further develop their business.",
        chat:"Contact us",
        name:"your name",
        send:"send",
        finance:"Finance",
        topic:"Topic Listing Template includes homepage, listing page, detail page, and contact page. You can feel free to edit and adapt for your CMS requirements.",
        learn:"Learn More",
        share:"Share:"
    },
    ru: {
        home: "Главная",
        browse: "Темы",
        how: "Как это работает",
        faqs: "Вопросы",
        contact: "Контакты",
        pages: "Страницы",
        topics: "Список тем",
        contactForm: "Форма связи",
        platform:"Выведите свой бизнес на новый уровень вместе с нами",
        search:"Поиск",
        web:"Веб дизайн",
        when:"Это команда, которая предоставляет мощные маркетинговые решения для тех, кто только начинает или хочет дальше развивать свой бизнес.",
        chat:"Связаться с нами",
        name:"Ваше имя",
        send:"отправлять",
        finance:"финансы",
        topic:"Шаблон списка тем включает в себя домашнюю страницу, страницу со списком, страницу с подробной информацией и страницу контактов. Вы можете свободно редактировать и адаптировать его под требования вашей CMS.",
        learn:"Узнать больше",
        share:"делиться"
    }
};

document.getElementById("languageSelect").addEventListener("change", function() {
    const selectedLang = this.value;
    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        el.textContent = translations[selectedLang][key];
    });
});

