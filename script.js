// Product Data
const PRODUCTS = [
  {
    id: "1",
    name: "Молоко",
    image: "products_2/milk.png",
    description:
      "Свежее молоко — источник природной пользы и натурального вкуса. Проходит строгий контроль качества и сохраняет все важные питательные свойства.",
  },
  {
    id: "2",
    name: "Йогурт",
    image: "products_2/yogurt.png",
    description:
      "Натуральный йогурт из отборного молока с использованием живых заквасок. Обладает мягким вкусом и нежной текстурой, подходит для полезного завтрака и лёгкого перекуса каждый день.",
  },
  {
    id: "3",
    name: "Масло",
    image: "products_2/butter.png",
    description:
      "Сливочное масло из натуральных сливок без добавок и заменителей молочного жира. Имеет насыщенный сливочный вкус и идеально подходит как для бутербродов, так и для приготовления блюд.",
  },
  {
    id: "4",
    name: "Сметана",
    image: "products_2/sour-cream.png",
    description:
      "Сметана отличается густой консистенцией и чистым сливочным вкусом. Изготовлена по традиционной технологии, отлично дополняет как домашние блюда, так и выпечку.",
  },
  {
    id: "5",
    name: "Яйца",
    image: "products_2/eggs.png",
    description:
      "Куриные яйца — свежий и питательный продукт для ежедневного рациона. Подходят для завтраков, выпечки и приготовления разнообразных блюд.",
  },
  {
    id: "6",
    name: "Бифилайф",
    image: "products_2/bifi-life.png",
    description:
      "Бифилайф — кисломолочный продукт с бифидобактериями, способствующий поддержанию баланса микрофлоры кишечника. Изготовлен из натурального молока, обладает мягким вкусом и подходит для ежедневного употребления всей семьёй.",
  },
  {
    id: "7",
    name: "Сыр",
    image: "products_2/cheese.png",
    description:
      "Изысканный сыр с белой плесенью изготовлен из натурального молока с использованием традиционных технологий созревания. Обладает мягким кремовым вкусом с лёгкими грибными нотками и идеально подходит для дегустаций, закусок и сырных тарелок.",
  },
  {
    id: "8",
    name: "Творог",
    image: "products_2/curd.png",
    description:
      "Натуральный творог производится из свежего молока без добавок и консервантов. Имеет нежную текстуру и мягкий сливочный вкус, прекрасно подходит для завтраков, десертов и здорового питания.",
  },
];

// DOM Elements
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navMobile = document.getElementById("navMobile");
const menuIcon = mobileMenuBtn.querySelector(".menu-icon");
const closeIcon = mobileMenuBtn.querySelector(".close-icon");
const carousel = document.getElementById("carousel");
const productModal = document.getElementById("productModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const scrollBtn = document.getElementById("scrollBtn");
const scrollToTop = document.getElementById("scrollToTop");
const submitBtn = document.getElementById("submitBtn");
const submitBtnMobile = document.getElementById("submitBtnMobile");
const requestModal = document.getElementById("requestModal");
const requestModalOverlay = document.getElementById("requestModalOverlay");
const requestModalClose = document.getElementById("requestModalClose");
const requestForm = document.getElementById("requestForm");
const navDesktop = document.getElementById("navDesktop");
const navDesktopBtns = document.querySelectorAll(".nav-btn");
const navMobileBtns = document.querySelectorAll(".nav-mobile-btn");

// Mobile Menu Toggle
mobileMenuBtn.addEventListener("click", () => {
  const isHidden = navMobile.classList.contains("hidden");
  if (isHidden) {
    navMobile.classList.remove("hidden");
    menuIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  } else {
    navMobile.classList.add("hidden");
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }
});

// Close mobile menu when a nav item is clicked
navMobileBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    navMobile.classList.add("hidden");
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  });
});

// Navigation Tab Switching
function updateActiveTab(tabName) {
  navDesktopBtns.forEach((btn) => {
    if (btn.dataset.tab === tabName) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  navMobileBtns.forEach((btn) => {
    if (btn.dataset.tab === tabName) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

navDesktopBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    updateActiveTab(btn.dataset.tab);
  });
});

navMobileBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    updateActiveTab(btn.dataset.tab);
  });
});

// Render Product Cards
function renderProducts() {
  carousel.innerHTML = "";
  PRODUCTS.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <button class="product-btn" onclick="openProductModal('${product.id}')">
                    Подробнее
                    <svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>
        `;
    carousel.appendChild(card);
  });
}

// Product Modal
function openProductModal(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (product) {
    document.getElementById("modalProductName").textContent = product.name;
    document.getElementById("modalProductDescription").textContent =
      product.description;
    document.getElementById("modalProductImage").src = product.image;
    document.getElementById("modalProductImage").alt = product.name;
    productModal.classList.remove("hidden");
  }
}

function closeProductModal() {
  productModal.classList.add("hidden");
}

modalClose.addEventListener("click", closeProductModal);
modalOverlay.addEventListener("click", closeProductModal);

// Request Modal
function openRequestModal() {
  requestModal.classList.remove("hidden");
}

function closeRequestModal() {
  requestModal.classList.add("hidden");
}

submitBtn.addEventListener("click", openRequestModal);
submitBtnMobile.addEventListener("click", openRequestModal);
requestModalClose.addEventListener("click", closeRequestModal);
requestModalOverlay.addEventListener("click", closeRequestModal);

// Request Form Submission
requestForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // Here you would typically send the data to a server
  console.log("Form submitted:", { name, email, phone, message });

  // Reset form and close modal
  requestForm.reset();
  closeRequestModal();

  // Show success message
  alert("Спасибо! Ваша заявка отправлена.");
});

// Scroll to Products Section
scrollBtn.addEventListener("click", () => {
  const productsSection = document.getElementById("productsSection");
  productsSection.scrollIntoView({ behavior: "smooth" });
});

// Scroll to Top Button
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTop.classList.remove("hidden");
  } else {
    scrollToTop.classList.add("hidden");
  }
});

scrollToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});
