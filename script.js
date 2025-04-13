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
    alert('✅ The text has been copied:::' + text);
  }).catch(() => {
    alert('❌ Copy failed. Select the address and copy it yourself:');
  });
}




