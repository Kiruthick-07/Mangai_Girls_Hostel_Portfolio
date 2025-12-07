// DOM Elements
const navbar = document.getElementById("navbar")
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileMenu = document.getElementById("mobileMenu")
const mobileLinks = document.querySelectorAll(".mobile-link")
const backToTopBtn = document.getElementById("backToTop")
const navLinks = document.querySelectorAll(".nav-link")
const contactForm = document.getElementById("contactForm")
const testimonialDots = document.querySelectorAll(".dot")
const testimonialCards = document.querySelectorAll(".testimonial-card")

// Navbar scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }

  // Back to top button visibility
  if (window.scrollY > 500) {
    backToTopBtn.classList.add("visible")
  } else {
    backToTopBtn.classList.remove("visible")
  }

  // Active nav link on scroll
  updateActiveNavLink()
})

// Mobile menu toggle
mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active")
  mobileMenu.classList.toggle("active")
  document.body.style.overflow = mobileMenu.classList.contains("active") ? "hidden" : ""
})

// Close mobile menu on link click
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenuBtn.classList.remove("active")
    mobileMenu.classList.remove("active")
    document.body.style.overflow = ""
  })
})

// Back to top button
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Update active nav link based on scroll position
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]")
  const scrollPos = window.scrollY + 100

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active")
        }
      })
    }
  })
}

// Smooth scroll for nav links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href")
    const targetSection = document.querySelector(targetId)

    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Testimonial slider
let currentTestimonial = 0

function showTestimonial(index) {
  testimonialCards.forEach((card, i) => {
    card.classList.remove("active")
    testimonialDots[i].classList.remove("active")
  })

  testimonialCards[index].classList.add("active")
  testimonialDots[index].classList.add("active")
  currentTestimonial = index
}

testimonialDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showTestimonial(index)
  })
})

// Auto-rotate testimonials
setInterval(() => {
  const nextIndex = (currentTestimonial + 1) % testimonialCards.length
  showTestimonial(nextIndex)
}, 5000)

// Contact form submission
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = new FormData(contactForm)
  const data = Object.fromEntries(formData)

  // Simulate form submission
  const submitBtn = contactForm.querySelector(".btn-submit")
  const originalText = submitBtn.innerHTML

  submitBtn.innerHTML = "<span>Sending...</span>"
  submitBtn.disabled = true

  setTimeout(() => {
    submitBtn.innerHTML =
      '<span>Message Sent!</span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>'
    submitBtn.style.background = "#10b981"

    setTimeout(() => {
      contactForm.reset()
      submitBtn.innerHTML = originalText
      submitBtn.disabled = false
      submitBtn.style.background = ""
    }, 2000)
  }, 1500)
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in")
    }
  })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll(".room-card, .amenity-card, .gallery-item, .feature").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "all 0.6s ease"
  observer.observe(el)
})

// Add animation class styles
document.head.insertAdjacentHTML(
  "beforeend",
  `
    <style>
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    </style>
`,
)

// Gallery lightbox effect (simple hover enhancement)
const galleryItems = document.querySelectorAll(".gallery-item")
galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Could implement full lightbox here
    item.style.transform = "scale(1.02)"
    setTimeout(() => {
      item.style.transform = ""
    }, 200)
  })
})

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY
  const heroImage = document.querySelector(".hero-image-wrapper")

  if (heroImage && scrolled < 800) {
    heroImage.style.transform = `translateY(${scrolled * 0.1}px)`
  }
})

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  // Set first testimonial as active
  showTestimonial(0)

  // Trigger initial animation for visible elements
  setTimeout(() => {
    document.querySelectorAll(".room-card, .amenity-card, .gallery-item, .feature").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("animate-in")
      }
    })
  }, 100)

  // Active nav link on scroll
  updateActiveNavLink()
})



//Payment Gateway Integrated
async function initiatePayment(amount) {
  try {
    const response = await fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount,
        currency: "INR",
        receipt: "receipt_" + Date.now()
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const order = await response.json();

    var options = {
      "key": "rzp_test_RMKz5sso9Q16ay",
      "amount": order.amount,
      "currency": order.currency,
      "name": "Mangai Girls Hostel",
      "description": "Room Booking Transaction",
      "image": "https://example.com/your_logo", // Replace with valid logo URL if available
      "order_id": order.id,
      "handler": function (response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        // You can add further logic here (e.g., save booking to database)
      },
      "prefill": {
        "name": "", // Can be populated if user data is known
        "email": "",
        "contact": ""
      },
      "notes": {
        "address": "Mangai Girls Hostel"
      },
      "theme": {
        "color": "#3399cc"
      }
    };

    var rzp1 = new Razorpay(options);
    rzp1.on('payment.failed', function (response) {
      alert("Payment Failed: " + response.error.description);
    });
    rzp1.open();

  } catch (error) {
    console.error("Error initiating payment:", error);
    alert("Unable to initiate payment. Please try again later.");
  }
}

// Attach event listeners to all "Book This Room" buttons
document.querySelectorAll('.btn-room').forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();

    // Find the price element within the same card
    const card = this.closest('.room-card');
    const priceText = card.querySelector('.price').textContent;

    // Extract numeric value from text like "₹12,000" -> 12000
    const amount = parseInt(priceText.replace(/[^0-9]/g, ''), 10);

    if (amount) {
      initiatePayment(amount);
    } else {
      console.error("Could not determine price for this room.");
    }
  });
});

// Login Form Handling
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = loginForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerText;

    submitBtn.innerHTML = 'Signing In...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerText = originalText;
      submitBtn.disabled = false;
      alert('Login functionality would be implemented here connecting to backend.');
      // window.location.href = 'index.html'; // Redirect on success
    }, 1500);
  });
}

// Signup Form Handling
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = signupForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerText;

    submitBtn.innerHTML = 'Creating Account...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerText = originalText;
      submitBtn.disabled = false;
      alert('Registration functionality would be implemented here connecting to backend.');
      // window.location.href = 'login.html'; // Redirect on success
    }, 1500);
  });
}