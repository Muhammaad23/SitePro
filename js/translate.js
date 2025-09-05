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
        send:"send",
        finance:"Finance",
        topic:"Topic Listing Template includes homepage, listing page, detail page, and contact page. You can feel free to edit and adapt for your CMS requirements.",
        learn:"Learn More",
        share:"Share:"
    },
    uz: {
        home: "Bosh sahifa",
        browse: "Mavzularni ko'rish",
        how: "Qanday ishlaydi",
        faqs: "Savol Javob",
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
        send:"yuborish",
        finance:"moliya",
        topic:"Mavzular ro'yxati shabloniga bosh sahifa, ro'yxat sahifasi, batafsil sahifa va aloqa sahifasi kiradi. Siz o'zingizning CMS talablaringizni o'zgartirishingiz va moslashingiz mumkin.",
        learn:"Batafsil ma'lumot",
        share:"baham ko'ring"
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

