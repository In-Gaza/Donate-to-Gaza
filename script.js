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

        // وظائف أساسية
        function toggleDonationPopup() {
            const donationModal = document.getElementById('donation-popup');
            if (donationModal) {
                donationModal.classList.toggle('active');
            }
        }
        
        function copyText(elementId) {
            const element = document.getElementById(elementId);
            if (element) {
                const textArea = document.createElement('textarea');
                textArea.value = element.textContent;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                // تأكيد النسخ
                const copyBtn = document.querySelector('.copy-btn');
                if (copyBtn) {
                    const originalText = copyBtn.innerHTML;
                    copyBtn.innerHTML = '<i class="fas fa-check"></i> COPIED! YOU\'RE A HERO!';
                    copyBtn.style.background = 'linear-gradient(135deg, var(--success) 0%, #00d4ff 100%)';
                    
                    setTimeout(() => {
                        copyBtn.innerHTML = originalText;
                        copyBtn.style.background = 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)';
                    }, 3000);
                }
            }
        }

        // تغيير الوضع الداكن/الفاتح
        document.addEventListener('DOMContentLoaded', function() {
            const themeToggle = document.getElementById('themeToggle');
            if (themeToggle) {
                themeToggle.addEventListener('click', function() {
                    document.body.classList.toggle('dark-mode');
                    const icon = this.querySelector('i');
                    if (icon) {
                        if (document.body.classList.contains('dark-mode')) {
                            icon.classList.replace('fa-moon', 'fa-sun');
                        } else {
                            icon.classList.replace('fa-sun', 'fa-moon');
                        }
                    }
                });
            }

            // تأثير التمرير
            window.addEventListener('scroll', function() {
                const header = document.getElementById('main-header');
                const scrollTopBtn = document.querySelector('.scroll-arrow');
                
                if (header) {
                    if (window.scrollY > 50) {
                        header.classList.add('scrolled');
                    } else {
                        header.classList.remove('scrolled');
                    }
                }
                
                if (scrollTopBtn) {
                    if (window.scrollY > 300) {
                        scrollTopBtn.classList.add('active');
                    } else {
                        scrollTopBtn.classList.remove('active');
                    }
                }
            });

            // تأثيرات الظهور عند التمرير
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            // مراقبة العناصر
            document.querySelectorAll('.article-card, .image-card').forEach(el => {
                observer.observe(el);
            });

            // التنقل السلس
            document.querySelectorAll('nav a').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // إزالة النشاط من جميع الروابط
                    document.querySelectorAll('nav a').forEach(l => l.classList.remove('active'));
                    // إضافة النشاط للرابط الحالي
                    this.classList.add('active');
                    
                    const targetId = this.getAttribute('href');
                    if (targetId && targetId !== '#') {
                        const targetSection = document.querySelector(targetId);
                        if (targetSection) {
                            window.scrollTo({
                                top: targetSection.offsetTop - 100,
                                behavior: 'smooth'
                            });
                        }
                    }
                });
            });

            // العودة للأعلى
            document.querySelector('.scroll-arrow').addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });
