// Products
const PRODUCTS = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling",
    category: "Electronics",
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 312,
    badge: "hot",
    description:
      "Experience studio-quality sound with industry-leading noise cancellation. Up to 30 hours of battery life, premium leather cushions, and USB-C fast charging.",
    images: [
      "Assets/Wireless Noise-Cancelling Headphones.jpg",
      "Assets/Wireless Noise-Cancelling Headphones1.jpg",
      "Assets/Wireless Noise-Cancelling Headphones2.jpg",
    ],
    features: [
      "30hr battery",
      "Active Noise Cancel",
      "USB-C Fast Charge",
      "Foldable design",
    ],
  },
  {
    id: 2,
    name: "Minimalist Leather Watch",
    category: "Fashion",
    price: 189,
    originalPrice: 249,
    rating: 4.6,
    reviews: 187,
    badge: "sale",
    description:
      "Swiss movement, genuine Italian leather strap, and sapphire crystal glass. Water-resistant up to 50m. The perfect blend of classic and contemporary.",
    images: [
      "Assets/Minimalist Leather Watch.jpg",
      "Assets/Minimalist Leather Watch1.jpg",
      "Assets/Minimalist Leather Watch2.jpg",
    ],
    features: [
      "Swiss movement",
      "Sapphire crystal",
      "Water resist. 50m",
      "Italian leather",
    ],
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    category: "Home & Kitchen",
    price: 449,
    originalPrice: 599,
    rating: 4.5,
    reviews: 245,
    badge: "sale",
    description:
      "Lumbar support, 4D adjustable armrests, mesh back for breathability and tilt-lock mechanism. Built for 8+ hours of comfortable work.",
    images: [
      "Assets/Ergonomic Office Chair.jpg",
      "Assets/Ergonomic Office Chair1.jpg",
      "Assets/Ergonomic Office Chair2.jpg",
    ],
    features: [
      "Lumbar support",
      "4D armrests",
      "Breathable mesh",
      "5-year warranty",
    ],
  },
  {
    id: 4,
    name: "4K Ultra-Wide Monitor",
    category: "Electronics",
    price: 699,
    originalPrice: 899,
    rating: 4.7,
    reviews: 156,
    badge: "hot",
    description:
      "34-inch curved IPS panel, 144Hz refresh rate, 1ms response time, HDR400, and USB-C 65W charging. Elevate your productivity and gaming setup.",
    images: [
      "Assets/4K Ultra-Wide Monitor.jpg",
      "Assets/4K Ultra-Wide Monitor1.jpg",
    ],
    features: ['34" Curved IPS', "144Hz refresh", "HDR400", "USB-C 65W"],
  },
  {
    id: 5,
    name: "Luxury Skincare Set",
    category: "Beauty & Wellness",
    price: 129,
    originalPrice: 179,
    rating: 4.9,
    reviews: 421,
    badge: "new",
    description:
      "A complete 5-piece routine featuring vitamin C serum, hyaluronic acid moisturizer, retinol night cream, SPF 50 sunscreen, and an eye contour gel.",
    images: [
      "Assets/Luxury Skincare Set.jpg",
      "Assets/Luxury Skincare Set1.jpg",
      "Assets/Luxury Skincare Set2.jpg",
    ],
    features: ["Vit C serum", "Hyaluronic acid", "Retinol cream", "SPF 50"],
  },
  {
    id: 6,
    name: "Running Sneakers Pro",
    category: "Fashion",
    price: 159,
    originalPrice: 199,
    rating: 4.4,
    reviews: 298,
    badge: "sale",
    description:
      "Carbon-fiber midsole, Flyknit upper for ventilation, and rubber outsole with enhanced grip. Built for marathon runners and casual wearers alike.",
    images: [
      "Assets/Running Sneakers Pro.jpg",
      "Assets/Running Sneakers Pro1.jpg",
      "Assets/Running Sneakers Pro2.jpg",
    ],
    features: [
      "Carbon midsole",
      "Flyknit upper",
      "Grip outsole",
      "Unisex sizing",
    ],
  },
  {
    id: 7,
    name: "Smart Home Hub",
    category: "Electronics",
    price: 99,
    originalPrice: 129,
    rating: 4.3,
    reviews: 134,
    badge: "hot",
    description:
      "Control all your smart home devices from one place. Compatible with Alexa, Google Home, Apple HomeKit, and 2000+ devices. Built-in Zigbee and Z-Wave.",
    images: ["Assets/Smart Home Hub.jpg"],
    features: [
      "Multi-platform",
      "Zigbee/Z-Wave",
      "2000+ devices",
      "Voice control",
    ],
  },
  {
    id: 8,
    name: "Artisan Coffee Maker",
    category: "Home & Kitchen",
    price: 249,
    originalPrice: 299,
    rating: 4.6,
    reviews: 189,
    badge: "new",
    description:
      "Precision temperature control (±1°C), built-in burr grinder, 12-cup carafe, and programmable brew scheduler. For the true coffee aficionado.",
    images: [
      "Assets/Artisan Coffee Maker.jpg",
      "Assets/Artisan Coffee Maker1.jpg",
      "Assets/Artisan Coffee Maker2.jpg",
    ],
    features: [
      "Burr grinder",
      "Temp control ±1°C",
      "12-cup carafe",
      "Programmable",
    ],
  },
  {
    id: 9,
    name: "Silk Dress Shirt",
    category: "Fashion",
    price: 89,
    originalPrice: 120,
    rating: 4.5,
    reviews: 92,
    badge: "sale",
    description:
      "100% mulberry silk, hand-finished seams, mother-of-pearl buttons, and a tailored slim fit. Available in 8 colors. Dry-clean or hand-wash.",
    images: [
      "Assets/Silk Dress Shirt.jpg",
      "Assets/Silk Dress Shirt1.jpg",
      "Assets/Silk Dress Shirt2.jpg",
    ],
    features: [
      "100% mulberry silk",
      "Hand-finished",
      "MoP buttons",
      "8 colorways",
    ],
  },
  {
    id: 10,
    name: "Wireless Mechanical",
    category: "Electronics",
    price: 179,
    originalPrice: 219,
    rating: 4.7,
    reviews: 267,
    badge: "hot",
    description:
      "Hot-swappable switches, per-key RGB, aluminum chassis, Bluetooth 5.0 + USB-C, and 6000mAh battery. Tactile typing reimagined.",
    images: [
      "Assets/Wireless Mechanical Keyboard.jpg",
      "Assets/Wireless Mechanical Keyboard1.jpg",
      "Assets/Wireless Mechanical Keyboard2.jpg",
    ],
    features: [
      "Hot-swap switches",
      "Per-key RGB",
      "Bluetooth 5.0",
      "6000mAh battery",
    ],
  },
  {
    id: 11,
    name: "Aromatherapy Diffuser",
    category: "Home & Kitchen",
    price: 59,
    originalPrice: 79,
    rating: 4.4,
    reviews: 312,
    badge: "sale",
    description:
      "Ultrasonic diffusion, 7-color LED mood lighting, 400ml tank for up to 12 hours of continuous mist, and whisper-quiet operation.",
    images: ["Assets/Aromatherapy Diffuser.jpg"],
    features: ["Ultrasonic mist", "7-color LED", "400ml tank", "12hr runtime"],
  },
];

// Navigation active state
let navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navLink.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
  });
});

// NavLinks active link
const homePage = document.getElementById("Home-Page");
const shopPage = document.getElementById("Shop-Page");
const wishlistPage = document.getElementById("Wishlist-Page");
const cartPage = document.getElementById("Cart-Page");
const ShopLink = document.getElementById("shop-link");
const homeLink = document.getElementById("Home");
const shopLink = document.getElementById("Shop");
const wishlistLink = document.getElementById("Wishlist");
const cartLink = document.getElementById("cart-icon-btn");
ShopLink.addEventListener("click", () => {
  homePage.classList.add("hidden");
  cartPage.classList.add("hidden");
  wishlistPage.classList.add("hidden");
  shopPage.classList.remove("hidden");
  homeLink.classList.remove("active");
  shopLink.classList.add("active");
});
shopLink.addEventListener("click", () => {
  homePage.classList.add("hidden");
  cartPage.classList.add("hidden");
  wishlistPage.classList.add("hidden");
  shopPage.classList.remove("hidden");
});
homeLink.addEventListener("click", () => {
  shopPage.classList.add("hidden");
  cartPage.classList.add("hidden");
  wishlistPage.classList.add("hidden");
  homePage.classList.remove("hidden");
});
wishlistLink.addEventListener("click", () => {
  homePage.classList.add("hidden");
  shopPage.classList.add("hidden");
  cartPage.classList.add("hidden");
  wishlistPage.classList.remove("hidden");
});
cartLink.addEventListener("click", () => {
  homePage.classList.add("hidden");
  shopPage.classList.add("hidden");
  wishlistPage.classList.add("hidden");
  cartPage.classList.remove("hidden");
});
// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav-links");
const span = hamburger.querySelectorAll(".hamburger-span");

hamburger.addEventListener("click", () => {
  span.forEach((s) => s.classList.toggle("active"));
  nav.classList.toggle("-translate-x-full");
});

// Search for products
const searchInputDesktop = document.getElementById("search-input");
const resultsContainerDesktop = document.getElementById("search-results");

let timeoutDesktop;

// Display search results
function displayResults(products, result) {
  result.innerHTML = "";

  if (products.length === 0) {
    result.innerHTML = `<p class="p-3 text-(--text-light)">No results found</p>`;
    result.classList.remove("hidden");
    return;
  }

  products.slice(0, 5).forEach((product) => {
    const item = `
      <div class="flex items-center gap-3 p-3 hover:bg-(--bg-alt) cursor-pointer">
        <img loading="lazy" src="${product.images[0]}" alt="${product.name}" class="w-12 h-12 object-cover rounded">
        <div>
          <p class="font-semibold text-(--text-light)">${product.name}</p>
          <p class="text-sm text-gray-500">$${product.price}</p>
        </div>
      </div>
    `;
    result.innerHTML += item;
  });

  result.classList.remove("hidden");
}

searchInputDesktop.addEventListener("input", () => {
  clearTimeout(timeoutDesktop);

  timeoutDesktop = setTimeout(() => {
    const query = searchInputDesktop.value.toLowerCase().trim();

    if (query === "") {
      resultsContainerDesktop.classList.add("hidden");
      return;
    }

    const filtered = PRODUCTS.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.features.join(" ").toLowerCase().includes(query),
    );

    displayResults(filtered, resultsContainerDesktop);
  }, 300);

});

// Choose product from search results
resultsContainerDesktop.addEventListener("click", (e) => {
  const item = e.target.closest(".flex");
  if (!item) return;
  const name = item.querySelector("p").textContent;
  const product = PRODUCTS.find((p) => p.name === name);
  if (product) {
    homePage.classList.add("hidden");
    cartPage.classList.add("hidden");
    wishlistPage.classList.add("hidden");
    shopPage.classList.remove("hidden");
    homeLink.classList.remove("active");
    shopLink.classList.add("active");
    showProductDetails(product);
    resultsContainerDesktop.classList.add("hidden");
    searchInputDesktop.value = "";
  }
});

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
const iconSun = themeToggle.querySelector(".icon-sun");
const iconMoon = themeToggle.querySelector(".icon-moon");

let savedTheme = localStorage.getItem("theme") || "light";

document.documentElement.setAttribute("data-theme", savedTheme);
if (savedTheme === "dark") {
  iconSun.classList.add("hidden");
  iconMoon.classList.remove("hidden");
} else {
  iconSun.classList.remove("hidden");
  iconMoon.classList.add("hidden");
}
themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";

  if (isDark) {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");

    iconSun.classList.remove("hidden");
    iconMoon.classList.add("hidden");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");

    iconSun.classList.add("hidden");
    iconMoon.classList.remove("hidden");
  }
});

// Auth modal toggle
const authBtn = document.getElementById("auth-btn");
const authModal = document.getElementById("auth-modal");
const authClose = document.getElementById("auth-close");
const authTabs = document.querySelectorAll(".auth-tab");
const authOverlay = document.getElementById("auth-overlay");
authClose.addEventListener("click", () => {
  authModal.classList.add("hidden");
  authOverlay.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
});
authTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    authTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    const target = tab.getAttribute("data-tab");
    document.querySelectorAll(".auth-panel").forEach((panel) => {
      if (panel.id === "tab-" + target) {
        panel.classList.remove("hidden");
      } else {
        panel.classList.add("hidden");
      }
    });
  });
});

// register form submit
const regName = document.getElementById("reg-name");
const regEmail = document.getElementById("reg-email");
const regPassword = document.getElementById("reg-password");
const regbtn = document.getElementById("register-btn");
const errorDiv = document.getElementById("Error");
const logTab = document.querySelector("#log-tab");
const regTab = document.querySelector("#reg-tab");
logTab.addEventListener("click", () => {
  document.querySelector('[data-tab="register"]').click();
});

regTab.addEventListener("click", () => {
  document.querySelector('[data-tab="login"]').click();
});
regbtn.addEventListener("click", (e) => {
  e.preventDefault();

  errorDiv.textContent = "";

  if (
    regName.value.trim() === "" ||
    regEmail.value.trim() === "" ||
    regPassword.value.trim() === ""
  ) {
    showError("All fields are required");
    return;
  }

  if (!validateEmail(regEmail.value.trim())) {
    showError("Invalid email format");
    return;
  }

  if (regPassword.value.trim().length < 6) {
    showError("Password must be at least 6 characters");
    return;
  }

  if (!validatePassword(regPassword.value.trim())) {
    showError("Password must include uppercase, lowercase, and a number");
    return;
  }

  storedEmail = localStorage.getItem("regEmail");
  if (storedEmail && storedEmail === regEmail.value.trim()) {
    showError("Email is already registered");
    return;
  }

  //save to localStorage
  localStorage.setItem("regName", regName.value);
  localStorage.setItem("regEmail", regEmail.value);
  localStorage.setItem("regPassword", regPassword.value);

  // switch to login tab
  document.querySelector('[data-tab="login"]').click();
  alertBox.textContent = "Registration successful! Please log in.";
  alertBox.classList.remove("bg-(--red)");
  alertBox.classList.add(
    "bg-(--green)",
    "text-white",
    "px-6",
    "py-3",
    "rounded-lg",
    "shadow-lg",
    "opacity-100",
    "z-10000",
  );
  setTimeout(() => {
    alertBox.classList.remove("opacity-100");
  }, 3000);
});

// helper function
function showError(msg) {
  errorDiv.textContent = msg;
  errorDiv.classList.add("text-red-500", "mt-2", "opacity-100");
  setTimeout(() => {
    errorDiv.classList.remove("opacity-100");
    errorDiv.classList.add("opacity-0");
  }, 3000);
}

function validateEmail(email) {
  const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
  return EmailRegex.test(email);
}

function validatePassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password);
}

// login form submit
const loginForm = document.getElementById("tab-login");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginBtn = document.getElementById("login-btn");
const alertBox = document.getElementById("alert");
let isLogin = false;
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  errorDiv.textContent = "";

  if (loginEmail.value.trim() === "" || loginPassword.value.trim() === "") {
    showError("All fields are required");
    return;
  }

  const storedEmail = localStorage.getItem("regEmail");
  const storedPassword = localStorage.getItem("regPassword");
  if (
    loginEmail.value.trim() !== storedEmail ||
    loginPassword.value.trim() !== storedPassword
  ) {
    showError("Invalid email or password");
    return;
  } else {
    alertBox.textContent = "Login successful!";
    alertBox.classList.remove("bg-(--red)");
    alertBox.classList.add(
      "bg-(--green)",
      "text-white",
      "px-6",
      "py-3",
      "rounded-lg",
      "shadow-lg",
      "opacity-100",
    );
    setTimeout(() => {
      alertBox.classList.remove("opacity-100");
    }, 3000);
    authClose.click();
    authBtn.style.color = "var(--accent)";
    isLogin = true;
  }
});
window.addEventListener("load", () => {
  loginEmail.value = localStorage.getItem("regEmail") || "";
});

// logOut Account
authBtn.addEventListener("click", () => {
  if (isLogin) {
    isLogin = false;

    authBtn.style.color = "";

    alertBox.textContent = "Logged out successfully!";
    alertBox.classList.remove("bg-(--green)");
    alertBox.classList.add(
      "bg-(--red)",
      "text-white",
      "px-6",
      "py-3",
      "rounded-lg",
      "shadow-lg",
      "opacity-100",
    );

    setTimeout(() => {
      alertBox.classList.remove("opacity-100");
    }, 3000);

    return;
  }

  authModal.classList.remove("hidden");
  authOverlay.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
});
// Shop Page - Load products
const productsGrid = document.getElementById("Products-grid");
const detailsModal = document.getElementById("Details");

// Render Products
function loadProducts(products) {
  productsGrid.innerHTML = "";

  products.forEach((product) => {
    const item = `
            <div class="product-card max-w-[400px] relative group overflow-hidden bg-(--bg) w-full pb-6 rounded-xl transition duration-300 border-2 border-(--border) cursor-pointer hover:border-(--accent) hover:-translate-y-2 hover:shadow-xl"
                data-name="${product.name}">

                ${
                  product.badge
                    ? `
                <span class="absolute top-5 left-5 z-50 bg-(--accent) text-(--bg-alt) p-2 rounded-2xl">
                    ${product.badge}
                </span>`
                    : ""
                }

                <button class="Wishlist absolute top-5 right-5 transition duration-300 z-50 bg-(--bg) size-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /> </svg>
                </button>

                <figure class="w-full overflow-hidden">
                    <img src="${product.images[0]}" alt="${product.name}" loading="lazy" class="w-full transition duration-300 group-hover:scale-110 object-cover">
                </figure>
                
                
                <article class="p-4 border-b-2 border-(--border)">
                    <p class="text-(--text-muted)">${product.category}</p>
                    <h3 class="font-semibold">${product.name}</h3>
                    <span class="text-sm text-(--text-muted)">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path></svg> ${product.rating} (${product.reviews})
                    </span>
                </article>

                <div class="flex items-center justify-between px-4">
                    <p class="font-semibold">
                        ${product.price}
                        <del class="text-(--text-muted)">${product.originalPrice}</del>
                    </p>

                    <button onclick="addToCart('${product.name}')" class="add-to-cart mt-2 text-xl size-10 bg-(--accent) text-(--bg) rounded-full hover:bg-(--accent-dark)">&#43;</button>
                </div>
            </div>
        `;

    productsGrid.insertAdjacentHTML("beforeend", item);
  });
}

loadProducts(PRODUCTS);

productsGrid.addEventListener("click", (e) => {
  // Wishlist
  const wishlistBtn = e.target.closest(".Wishlist");
  if (wishlistBtn) {
    e.stopPropagation();

    wishlistBtn.classList.toggle("active");

    const wishlistBadge = document.getElementById("wishlist-badge");
    let count = parseInt(wishlistBadge.textContent) || 0;

    count += wishlistBtn.classList.contains("active") ? 1 : -1;
    count = Math.max(0, count);

    wishlistBadge.textContent = count;
    wishlistBadge.classList.toggle("hidden", count === 0);
    alertBox.textContent = wishlistBtn.classList.contains("active")
      ? "Added to wishlist!"
      : "Removed from wishlist!";
    if (wishlistBtn.classList.contains("active")) {
      alertBox.classList.remove("bg-(--red)");
      alertBox.classList.add(
        "bg-(--green)",
        "text-white",
        "px-6",
        "py-3",
        "rounded-lg",
        "shadow-lg",
        "opacity-100",
      );
    } else {
      alertBox.classList.remove("bg-(--green)");
      alertBox.classList.add(
        "bg-(--red)",
        "text-white",
        "px-6",
        "py-3",
        "rounded-lg",
        "shadow-lg",
        "opacity-100",
      );
    }
    setTimeout(() => {
      alertBox.classList.remove("opacity-100");
    }, 3000);
    return;
  }

  //  Add to Cart
  const cartBtn = e.target.closest(".add-to-cart");
  if (cartBtn) {
    e.stopPropagation();

    const cartBadge = document.getElementById("cart-count");
    cartBadge.classList.remove("hidden");

    return;
  }

  // Open Product Details
  const card = e.target.closest(".product-card");
  if (!card) return;

  const productName = card.dataset.name;
  const product = PRODUCTS.find((p) => p.name === productName);

  if (product) {
    showProductDetails(product);
  }
});

// Show Product Details
let selectedImage = null;
function showProductDetails(product) {
  detailsModal.innerHTML = `
        <div class="Details-model p-6 relative flex sm:w-full  gap-6 lg:w-1/2 bg-(--bg-card) rounded-lg">

            <button id="details-close" class="absolute top-4 right-4"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>

            <div class="w-full flex items-center justify-center flex-col">
                <figure class="w-full overflow-hidden rounded">
                    <img id="Img1" src="${product.images[0]}" alt="${product.name}" loading="lazy" class="w-full transition duration-300 group-hover:scale-110 object-cover">
                </figure>
                <div class="flex items-center gap-2 px-4 mt-2">
                ${product.images
                  .map(
                    (img, index) => `
                      <figure onclick="selectImage('${img}')" class="w-1/2 overflow-hidden cursor-pointer border-2 border-(--border) rounded ${
                      index === 0 ? "border-(--accent)" : ""
                    }">
                    <img loading="lazy" src="${img}" alt="${product.name}" class="w-full h-full object-cover">
                    </figure>
                  `,
                  )
                  .join("")}
                </div>
                </div>
                <div>
                <h2 class="text-2xl font-bold mb-2">${product.name}</h2>
                <p class="mb-2">${product.description}</p>
                <p class="text-sm mb-2">Category: ${product.category}</p>

                <p class="mb-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path></svg> ${product.rating} (${product.reviews})</p>

                <ul class="mb-3 mark" >
                    ${product.features.map((f) => `<li>✔ ${f}</li>`).join("")}
                </ul>

                <p class="text-xl font-semibold mb-3">
                    ${product.price}
                    <del>${product.originalPrice}</del>
                </p>

                <button onclick="addToCart('${product.name}')" class="add-to-cart bg-(--accent) text-(--bg) p-2 rounded">Add to Cart</button>
            </div>
        </div>
    `;

  detailsModal.classList.remove("hidden");
}
// Select Image in Details Modal
function selectImage(img) {
  selectedImage = img;

  event.currentTarget.classList.add("border-(--accent)");
}

// Close Modal
detailsModal.addEventListener("click", (e) => {
  const closeBtn = e.target.closest("#details-close");
  if (!closeBtn) return;

  detailsModal.classList.add("hidden");
});

// Filters
document.querySelectorAll('input[name="category"]').forEach((filter) => {
  filter.addEventListener("change", () => {
    const value = document.querySelector(
      'input[name="category"]:checked'
    ).value;

    let filtered;

    if (value === "All Products") {
      filtered = PRODUCTS;
    } else {
      filtered = PRODUCTS.filter((p) => p.category === value);
    }

    loadProducts(filtered);
  });
});

// Price Filter
const priceRange = document.getElementById("Price-Range");

priceRange.addEventListener("input", () => {
  const max = Number(priceRange.value);

  document.getElementById("Price").textContent = `$${max}`;

  const filtered = PRODUCTS.filter((p) => Number(p.price) <= max);

  loadProducts(filtered);
});

// Add to Cart from Details Modal
detailsModal.addEventListener("click", (e) => {
  const cartBtn = e.target.closest(".add-to-cart");
  if (!cartBtn) return;

  const cartBadge = document.getElementById("cart-count");
  cartBadge.classList.remove("hidden");
  alertBox.textContent = "Added to cart!";
  alertBox.classList.remove("bg-(--red)");
  alertBox.classList.add(
    "bg-(--green)",
    "text-white",
    "px-6",
    "py-3",
    "rounded-lg",
    "shadow-lg",
    "z-10000",
    "opacity-100",
  );
  setTimeout(() => {
    alertBox.classList.remove("opacity-100");
  }, 3000);
});

// Change Image in Details Modal
detailsModal.addEventListener("click", (e) => {
  const imgBtn = e.target.closest("figure");
  if (!imgBtn) return;
  const newSrc = imgBtn.querySelector("img").src;
  detailsModal.querySelector("#Img1").src = newSrc;
});

// Wishlist Page
function loadWishlist() {
  const wishlistGrid = document.getElementById("Wishlist-grid");
  wishlistGrid.innerHTML = "";
  const wishlistBadge = document.getElementById("wishlist-badge");
  const count = parseInt(wishlistBadge.textContent) || 0;
  if (count === 0) {
    wishlistGrid.innerHTML = `<p class="p-3 text-(--text-light)">Your wishlist is empty</p>`;
    return;
  } else {
    const wishlistItems = document.querySelectorAll(".Wishlist.active");
    wishlistItems.forEach((item) => {
      const name = item.closest(".product-card").dataset.name;
      const product = PRODUCTS.find((p) => p.name === name);
      if (product) {
        const wishlistItem = `
                <div class="product-card max-w-[400px] relative group overflow-hidden bg-(--bg) w-full pb-6 rounded-xl transition duration-300 border-2 border-(--border) cursor-pointer hover:border-(--accent) hover:-translate-y-2 hover:shadow-xl"
                data-name="${product.name}">

                ${
                  product.badge
                    ? `
                <span class="absolute top-5 left-5 z-50 bg-(--accent) text-(--bg-alt) p-2 rounded-2xl">
                    ${product.badge}
                </span>`
                    : ""
                }

                <button class="Wishlist active absolute top-5 right-5 transition duration-300 z-50 bg-(--bg) size-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /> </svg>
                </button>

                <figure class="w-full overflow-hidden">
                    <img loading="lazy" src="${product.images[0]}" alt="${product.name}" class="w-full transition duration-300 group-hover:scale-110 object-cover">
                </figure>
                
                
                <article class="p-4 border-b-2 border-(--border)">
                    <p class="text-(--text-muted)">${product.category}</p>
                    <h3 class="font-semibold">${product.name}</h3>
                    <span class="text-sm text-(--text-muted)">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path></svg> ${product.rating} (${product.reviews})
                    </span>
                </article>

                <div class="flex items-center justify-between px-4">
                    <p class="font-semibold">
                        ${product.price}
                        <del class="text-(--text-muted)">${product.originalPrice}</del>
                    </p>

                    <button class="add-to-cart mt-2 text-xl size-10 bg-(--accent) text-(--bg) rounded-full hover:bg-(--accent-dark)">&#43;</button>
                </div>
            </div>
            `;
        wishlistGrid.insertAdjacentHTML("beforeend", wishlistItem);
      }
    });
  }
}
document.getElementById("Wishlist").addEventListener("click", loadWishlist);

// Remove from Wishlist
document.getElementById("Wishlist-grid").addEventListener("click", (e) => {
  const wishlistBtn = e.target.closest(".Wishlist");
  if (!wishlistBtn) return;

  const card = e.target.closest(".product-card");
  const name = card.dataset.name;

  wishlistBtn.classList.remove("active");

  const originalCard = document.querySelector(
    `.product-card[data-name="${name}"]`,
  );
  if (originalCard) {
    originalCard.querySelector(".Wishlist").classList.remove("active");
  }

  card.remove();

  const wishlistBadge = document.getElementById("wishlist-badge");
  let count = parseInt(wishlistBadge.textContent) || 0;
  count = Math.max(0, count - 1);
  wishlistBadge.textContent = count;
  wishlistBadge.classList.toggle("hidden", count === 0);

  alertBox.textContent = "Item removed from wishlist";
  alertBox.classList.remove("bg-(--green)");
  alertBox.classList.add(
    "bg-(--red)",
    "text-white",
    "px-6",
    "py-3",
    "rounded-lg",
    "shadow-lg",
    "opacity-100",
  );
  setTimeout(() => {
    alertBox.classList.remove("opacity-100");
  }, 3000);
});

// total price calculation and checkout button state
const Subtotal = document.getElementById("Subtotal");
const Shipping = document.getElementById("Shipping");
const Total = document.getElementById("Total");
const CheckoutBtn = document.getElementById("CheckOut");
function updateCartSummary() {
  let subtotal = 0;

  cartItems.forEach((item) => {
    const price = parseFloat(item.price.toString().replace(/[^\d.]/g, ""));
    const qty = item.qty || 1;

    subtotal += price * qty;
  });

  const shipping = subtotal > 0 ? 5 : 0;
  const total = subtotal + shipping;

  Subtotal.textContent = `$${subtotal.toFixed(2)}`;
  Shipping.textContent = `$${shipping.toFixed(2)}`;
  Total.textContent = `$${total.toFixed(2)}`;

  CheckoutBtn.disabled = cartItems.length === 0;
}

// Cart Page - Load Cart Items
cartItems = JSON.parse(localStorage.getItem("cart")) || [];
localStorage.setItem("cart", JSON.stringify(cartItems));
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}
function loadCart() {
  const cartGrid = document.getElementById("Cart-grid");
  cartGrid.innerHTML = "";

  if (cartItems.length === 0) {
    cartGrid.innerHTML = `<p>Your cart is empty</p>`;
    return;
  }

  cartItems.forEach((product, index) => {
    const isPurchased = product.purchased || false;

    const cartItem = `
    <ul data-index="${index}" 
      class="list-card flex items-center mb-3 gap-4 p-4 rounded-xl border-b-2 
      ${isPurchased ? "bg-green-100 border-green-400" : "bg-(--bg) border-(--border)"}">

      <li class="w-1/4">
        <img src="${product.selectedImage}" alt="${product.name}" class="w-full object-cover rounded">
      </li>

      <li class="w-1/2">
        <h3 class="text-(${isPurchased ? "--black" : "--text"}) font-semibold">${product.name}</h3>
        <p class="text-sm text-(--text-muted)">${product.category}</p>
        <p class="text-(${isPurchased ? "--black" : "--text"}) font-bold">${product.price.toFixed(2)}</p>
        <p class="text-sm text-(--text-muted)"><del>${product.originalPrice}</del></p>
      </li>

      <li class="w-1/4 text-right">

        ${
          !isPurchased
            ? `
              <button class="minus mt-2 text-xl size-8 bg-(--red) text-(--bg) rounded-full">-</button>
              <span class="counter text-xl mx-2">${product.qty || 1}</span>
              <button class="plus mt-2 text-xl size-8 bg-(--accent) text-(--bg) rounded-full"">+</button>
              <br>
              <button onclick="removeFromCart(${index})" class="text-red-500 text-sm mt-2 hover:underline">
                Remove
              </button>
            `
            : `
              <p class="text-(--green) font-semibold mt-3">✔ Purchased</p>
            `
        }

      </li>

    </ul>
  `;

    cartGrid.insertAdjacentHTML("beforeend", cartItem);
  });
  updateCartSummary();
}
loadCart();

// add to cart
function addToCart(name) {
  const product = PRODUCTS.find((p) => p.name === name);
  if (!product) return;

  const newItem = {
    ...product,
    qty: 1,
    purchased: false,
    selectedImage: selectedImage || product.images[0],
  };

  cartItems.push(newItem);
  saveCart();
  const badge = document.getElementById("cart-count");
  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);

  badge.textContent = totalItems;
  badge.classList.toggle("hidden", totalItems === 0);

  alertBox.textContent = "Item added to cart";
  alertBox.classList.remove("bg-(--red)");
  alertBox.classList.add(
    "bg-(--green)",
    "text-white",
    "px-6",
    "py-3",
    "rounded-lg",
    "shadow-lg",
    "opacity-100",
  );

  setTimeout(() => {
    alertBox.classList.remove("opacity-100");
  }, 3000);

  loadCart();
  updateCartSummary();
}

// Remove from Cart
function removeFromCart(index) {
  cartItems.splice(index, 1);
  const badge = document.getElementById("cart-count");
  badge.textContent = cartItems.length;
  badge.classList.toggle("hidden", cartItems.length === 0);
  alertBox.textContent = "Item removed from cart";
  alertBox.classList.remove("bg-(--green)");
  alertBox.classList.add(
    "bg-(--red)",
    "text-white",
    "px-6",
    "py-3",
    "rounded-lg",
    "shadow-lg",
    "opacity-100",
  );
  setTimeout(() => {
    alertBox.classList.remove("opacity-100");
  }, 3000);
  saveCart();
  loadCart();
  updateCartSummary();
}

// Cart Quantity Buttons
document.getElementById("Cart-grid").addEventListener("click", (e) => {
  const plusBtn = e.target.closest(".plus");
  const minusBtn = e.target.closest(".minus");

  if (!plusBtn && !minusBtn) return;

  const index = e.target.closest("ul").dataset.index;

  if (plusBtn) {
    cartItems[index].qty++;
  } else if (minusBtn) {
    cartItems[index].qty = Math.max(1, cartItems[index].qty - 1);
  } else {
    cartItems[index].qty--;
  }
  saveCart();
  loadCart();
  updateCartSummary();
});

// Checkout Overlay
const checkoutBtn = document.getElementById("CheckOut");
const checkoutOverlay = document.getElementById("Checkout-Overlay");
const checkoutClose = document.getElementById("checkout-close");
const placeOrderBtn = document.getElementById("PlaceOrder");
const ErrorCheckout = document.getElementById("Error-checkout");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const payment = document.getElementById("payment");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
// Validation functions
function isValidPhone(phone) {
  const phoneRegex = /^01[0-2,5]{1}[0-9]{8}$/;
  return phoneRegex.test(phone);
}
function isValidAddress(address) {
  return address.trim().length >= 5;
}

// Checkout Button Click
checkoutBtn.addEventListener("click", () => {
  if (!isLogin) {
    alertBox.textContent = "Please log in to proceed to checkout.";
    alertBox.classList.remove("bg-(--green)");
    alertBox.classList.add(
      "bg-(--red)",
      "text-white",
      "px-6",
      "py-3",
      "rounded-lg",
      "shadow-lg",
      "opacity-100",
    );
    setTimeout(() => {
      alertBox.classList.remove("opacity-100");
    }, 3000);
    return;
  }
  if (cartItems.length === 0) {
    alertBox.textContent = "Your cart is empty!";
    alertBox.classList.remove("bg-(--green)");
    alertBox.classList.add(
      "bg-(--red)",
      "text-white",
      "px-6",
      "py-3",
      "rounded-lg",
      "shadow-lg",
      "opacity-100",
    );
    setTimeout(() => {
      alertBox.classList.remove("opacity-100");
    }, 3000);
  } else {
    checkoutOverlay.classList.remove("hidden");
    if (localStorage.getItem("regName") && localStorage.getItem("regEmail")) {
      fullName.value = localStorage.getItem("regName");
      email.value = localStorage.getItem("regEmail");
    }
  }
});

// checkout form submit
placeOrderBtn.addEventListener("click", () => {
  const fullNameValue = fullName.value;
  const emailValue = email.value;
  const phoneValue = phone.value;
  const addressValue = address.value;
  const paymentValue = payment.value;

  if (!isValidPhone(phoneValue)) {
    ErrorCheckout.textContent = "Please enter a valid Egyptian phone number.";
    return;
  }
  if (!isValidAddress(addressValue)) {
    ErrorCheckout.textContent =
      "Please enter a valid address (at least 10 characters).";
    return;
  }
  if (!paymentValue) {
    ErrorCheckout.textContent = "Please select a payment method.";
    return;
  }
  if (
    !fullNameValue ||
    !emailValue ||
    !phoneValue ||
    !addressValue ||
    !paymentValue
  ) {
    ErrorCheckout.textContent = "Please fill in all required fields.";
    return;
  } else {
    alertBox.textContent = "Order placed successfully!";
    alertBox.classList.remove("bg-(--red)");
    alertBox.classList.add(
      "bg-(--green)",
      "text-white",
      "px-6",
      "py-3",
      "rounded-lg",
      "shadow-lg",
      "opacity-100",
    );
    setTimeout(() => {
      alertBox.classList.remove("opacity-100");
    }, 3000);
    cartItems = cartItems.map((item) => ({
      ...item,
      purchased: true,
    }));
    saveCart();
    loadCart();
    updateCartSummary();
    checkoutOverlay.classList.add("hidden");
  }
});
checkoutClose.addEventListener("click", () => {
  checkoutOverlay.classList.add("hidden");
});
