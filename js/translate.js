const translations = {
    en: {
        home: "Home",
        browse: "Browse Topics",
        how: "How it works",
        faqs: "FAQs",
        contact: "Contact",
        pages: "Pages",
        topics: "Topics Listing",
        contactForm: "Contact Form",
        discover:"Discover. Learn. Enjoy",
        platform:"platform for creatives around the world",
        search:"Search",
        web:"Web Design",
        when:"When you search for free CSS templates, you will notice that TemplateMo is one of the best websites.",
        chat:"Contact us",
        name:"your name",
        send:"send"
    },
    uz: {
        home: "Bosh sahifa",
        browse: "Mavzularni ko'rish",
        how: "Qanday ishlaydi",
        faqs: "Savol-Javob",
        contact: "Aloqa",
        pages: "Sahifalar",
        topics: "Mavzular ro'yxati",
        contactForm: "Aloqa Formasi",
        discover:"Kashf qiling. O'rganing. Rohatlaning",
        platform:"butun dunyo bo'ylab ijodkorlar uchun platforma",
        search:"Qidiruv",
        web:"Veb dizayn",
        when:"Bepul CSS shablonlarini qidirsangiz, TemplateMo eng yaxshi veb-saytlardan biri ekanligini sezasiz.",
        chat:"Biz bilan bog‘laning",
        name:"ismingiz",
        send:"yuborish"
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
        discover:"Откройте. Учитесь. Наслаждайтесь.",
        platform:"платформа для креативщиков по всему миру",
        search:"Поиск",
        web:"Веб дизайн",
        when:"При поиске бесплатных шаблонов CSS вы заметите, что TemplateMo — один из лучших сайтов.",
        chat:"Связаться с нами",
        name:"Ваше имя",
        send:"отправлять"
    }
};

document.getElementById("languageSelect").addEventListener("change", function() {
    const selectedLang = this.value;
    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        el.textContent = translations[selectedLang][key];
    });
});

