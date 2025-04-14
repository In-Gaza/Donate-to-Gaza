const animatedElements = document.querySelectorAll('#articles, .gaza-article, .image-section');

window.addEventListener('scroll', () => {
  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

function toggleDonationCenter() {
  const popup = document.getElementById("donation-center-popup");
  popup.classList.toggle("active");
}

function copyWallet() {
  const address = document.getElementById("donation-wallet").innerText;
  navigator.clipboard.writeText(address).then(() => {
    alert("Address copied: " + address);
  });
}

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-H5TEWTP9M6');

function toggleDonationPopup() {
    const popup = document.getElementById('donation-popup');
    popup.classList.toggle('active');
}

function copyText(elementId) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert('✅ Address copied:\n' + text);
    }).catch(() => {
        alert('❌ Copy failed. Please try again.');
    });
}




// Smooth scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // Check if the link is for a valid target
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault(); // prevent jump
      target.scrollIntoView({
        behavior: 'smooth', // 👈 slow motion effect
        block: 'start'
      });
    }
  });
});



