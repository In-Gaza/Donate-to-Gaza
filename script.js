// Animate elements when they appear in viewport
const animatedElements = document.querySelectorAll('#articles, .gaza-article, .image-section');

window.addEventListener('scroll', () => {
  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

// Toggle Donation Center Popup
function toggleDonationCenter() {
  const popup = document.getElementById("donation-center-popup");
  popup.classList.toggle("active");
}

// Toggle Donation Popup
function toggleDonationPopup() {
  const popup = document.getElementById('donation-popup');
  popup.classList.toggle('active');
}

// Copy Wallet Address by ID
function copyWallet() {
  const address = document.getElementById("donation-wallet").innerText;
  navigator.clipboard.writeText(address).then(() => {
    alert("Address copied: " + address);
  });
}

// General Copy Function
function copyText(elementId) {
  const text = document.getElementById(elementId).innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert('✅ Address copied:\n' + text);
  }).catch(() => {
    alert('❌ Copy failed. Please try again.');
  });
}

// Google Analytics Tag (no duplicate)
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-H5TEWTP9M6');

// Smooth scrolling for internal nav links (includes #top)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target && targetId !== '#') {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    // Special case: scroll to top if href="#"
    if (targetId === '#') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  });
});
