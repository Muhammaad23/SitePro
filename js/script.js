const EMAILJS_PUBLIC_KEY = "E5Tnv4Jlzh5lXJz4j"; // Public Key
const EMAILJS_SERVICE_ID = "service_g4j028u";  // Service ID
const EMAILJS_TEMPLATE_ID = "template_xvou3rr"; // Template ID

emailjs.init(EMAILJS_PUBLIC_KEY);

const chatBtn = document.getElementById('chatBtn');
const chatModal = document.getElementById('chatModal');
const sendBtn = document.getElementById('sendBtn');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');
const closeBtn = document.getElementById('closeModalBtn');


// Chatni ochish/yopish tugmasi
chatBtn.addEventListener('click', () => {
  chatModal.style.display = (chatModal.style.display === 'flex') ? 'none' : 'flex';
});
// Modalni yopish
closeBtn.addEventListener('click', () => {
  chatModal.style.display = 'none';
});
// Xabar yuborish
sendBtn.addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  // Validatsiya
  if (!name || !email || !phone || !message) {
    showToast("Iltimos, barcha maydonlarni to‘ldiring!", "error");
    return;
  }
  if (!/^\+998\d{9}$/.test(phone)) {
    showToast("Telefon raqami +998 bilan boshlanishi kerak!", "error");
    return;
  }
  sendBtn.disabled = true;
  sendBtn.innerText = "Yuborilmoqda...";
  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    from_name: name,
    from_email: email,
    phone: phone,
    message: message
  }).then(() => {
    showToast("Xabar muvaffaqiyatli yuborildi!", "success");
    chatModal.style.display = 'none';
    clearForm();
  }).catch((error) => {
    console.error("Xato:", error);
    showToast("Xabar yuborishda xatolik yuz berdi!", "error");
  }).finally(() => {
    sendBtn.disabled = false;
    sendBtn.innerText = "Yuborish";
  });
});
function showToast(msg, type = "info") {
  toastMsg.innerText = msg;
  toast.className = `toast ${type} show`;
  setTimeout(() => {
    toast.className = `toast ${type}`;
  }, 4000);
}
function clearForm() {
  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
  document.getElementById('phone').value = "";
  document.getElementById('message').value = "";
}