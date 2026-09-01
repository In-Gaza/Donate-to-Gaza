// =========================================================
// Animate elements when they appear in viewport
// =========================================================

const animatedElements = document.querySelectorAll(
    '#articles, .gaza-article, .image-section'
);

window.addEventListener('scroll', () => {
    animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
});


// =========================================================
// DONATION POPUP
// =========================================================

function toggleDonationPopup() {
    const popup = document.getElementById('donation-popup');

    if (!popup) return;

    popup.classList.toggle('active');

    // منع تمرير الصفحة خلف النافذة
    if (popup.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}


// =========================================================
// DONATION CENTER POPUP
// =========================================================

function toggleDonationCenter() {
    const popup = document.getElementById('donation-center-popup');

    if (!popup) return;

    popup.classList.toggle('active');

    if (popup.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}


// =========================================================
// CLOSE DONATION POPUP
// When clicking outside the modal
// =========================================================

document.addEventListener('click', function (event) {

    const popup = document.getElementById('donation-popup');

    if (!popup) return;

    if (
        popup.classList.contains('active') &&
        event.target === popup
    ) {
        toggleDonationPopup();
    }
});


// =========================================================
// CLOSE POPUP WITH ESCAPE
// =========================================================

document.addEventListener('keydown', function (event) {

    if (event.key !== 'Escape') return;

    const donationPopup =
        document.getElementById('donation-popup');

    const donationCenterPopup =
        document.getElementById('donation-center-popup');

    if (
        donationPopup &&
        donationPopup.classList.contains('active')
    ) {
        toggleDonationPopup();
    }

    if (
        donationCenterPopup &&
        donationCenterPopup.classList.contains('active')
    ) {
        toggleDonationCenter();
    }
});


// =========================================================
// COPY WALLET ADDRESS
// =========================================================

function copyWallet() {

    const element =
        document.getElementById('donation-wallet');

    if (!element) return;

    const address =
        element.textContent.trim();

    copyToClipboard(
        address,
        'Address copied successfully!'
    );
}


// =========================================================
// GENERAL COPY FUNCTION
// Works with:
// usdt-address
// btc-address
// eth-address
// bnb-address
// jawwal-number
// palpay-number
// =========================================================

function copyText(elementId) {

    const element =
        document.getElementById(elementId);

    if (!element) {
        console.error(
            'Copy element not found:',
            elementId
        );

        return;
    }

    const text =
        element.textContent.trim();

    copyToClipboard(
        text,
        'Copied successfully! ❤️'
    );
}


// =========================================================
// UNIVERSAL CLIPBOARD FUNCTION
// =========================================================

function copyToClipboard(text, successMessage) {

    // Modern Clipboard API
    if (
        navigator.clipboard &&
        window.isSecureContext
    ) {

        navigator.clipboard.writeText(text)
            .then(() => {

                showCopySuccess(successMessage);

            })
            .catch(() => {

                fallbackCopy(text, successMessage);

            });

        return;
    }

    // Fallback
    fallbackCopy(text, successMessage);
}


// =========================================================
// FALLBACK COPY
// Works on older browsers
// =========================================================

function fallbackCopy(text, successMessage) {

    const textArea =
        document.createElement('textarea');

    textArea.value = text;

    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '0';

    document.body.appendChild(textArea);

    textArea.focus();
    textArea.select();

    let successful = false;

    try {

        successful =
            document.execCommand('copy');

    } catch (error) {

        successful = false;

    }

    document.body.removeChild(textArea);

    if (successful) {

        showCopySuccess(successMessage);

    } else {

        alert(
            '❌ Copy failed.\nPlease copy the address manually.'
        );

    }
}


// =========================================================
// COPY SUCCESS MESSAGE
// Does NOT modify every copy button
// Only gives a small notification
// =========================================================

function showCopySuccess(message) {

    // إزالة إشعار سابق إن وجد
    const oldToast =
        document.querySelector('.copy-toast');

    if (oldToast) {
        oldToast.remove();
    }

    const toast =
        document.createElement('div');

    toast.className = 'copy-toast';

    toast.innerHTML =
        '<i class="fas fa-check-circle"></i> ' +
        message;

    document.body.appendChild(toast);

    // ظهور
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    // إخفاء
    setTimeout(() => {

        toast.classList.remove('show');

        setTimeout(() => {

            if (toast.parentNode) {
                toast.remove();
            }

        }, 300);

    }, 2200);
}


// =========================================================
// GOOGLE ANALYTICS
// =========================================================

window.dataLayer =
    window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag('js', new Date());

gtag(
    'config',
    'G-H5TEWTP9M6'
);


// =========================================================
// SMOOTH SCROLLING FOR INTERNAL LINKS
// =========================================================

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener(
        'click',
        function (e) {

            const targetId =
                this.getAttribute('href');

            // Scroll to top
            if (targetId === '#') {

                e.preventDefault();

                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });

                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    );
});


// =========================================================
// DOM CONTENT LOADED
// =========================================================

document.addEventListener(
    'DOMContentLoaded',
    function () {


        // =====================================================
        // THEME TOGGLE
        // =====================================================

        const themeToggle =
            document.getElementById('themeToggle');

        if (themeToggle) {

            themeToggle.addEventListener(
                'click',
                function () {

                    document.body.classList.toggle(
                        'dark-mode'
                    );

                    const icon =
                        this.querySelector('i');

                    if (icon) {

                        if (
                            document.body.classList.contains(
                                'dark-mode'
                            )
                        ) {

                            icon.classList.replace(
                                'fa-moon',
                                'fa-sun'
                            );

                        } else {

                            icon.classList.replace(
                                'fa-sun',
                                'fa-moon'
                            );
                        }
                    }
                }
            );
        }


        // =====================================================
        // SCROLL EFFECTS
        // =====================================================

        const header =
            document.getElementById('main-header');

        const scrollTopBtn =
            document.querySelector('.scroll-arrow');


        window.addEventListener(
            'scroll',
            function () {

                const scrollTop =
                    window.pageYOffset ||
                    document.documentElement.scrollTop;


                // Header
                if (header) {

                    if (scrollTop > 50) {

                        header.classList.add(
                            'scrolled'
                        );

                    } else {

                        header.classList.remove(
                            'scrolled'
                        );
                    }
                }


                // Scroll to top button
                if (scrollTopBtn) {

                    if (scrollTop > 300) {

                        scrollTopBtn.classList.add(
                            'active'
                        );

                    } else {

                        scrollTopBtn.classList.remove(
                            'active'
                        );
                    }
                }

            }
        );


        // =====================================================
        // INTERSECTION OBSERVER
        // =====================================================

        const observerOptions = {

            threshold: 0.1,

            rootMargin:
                '0px 0px -50px 0px'
        };


        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    'visible'
                                );

                            }

                        }
                    );

                },
                observerOptions
            );


        document.querySelectorAll(
            '.article-card, .image-card'
        ).forEach(el => {

            observer.observe(el);

        });


        // =====================================================
        // NAVIGATION
        // =====================================================

        document.querySelectorAll(
            'nav a'
        ).forEach(link => {

            link.addEventListener(
                'click',
                function (e) {

                    const targetId =
                        this.getAttribute('href');

                    if (
                        !targetId ||
                        targetId === '#'
                    ) {
                        return;
                    }

                    const targetSection =
                        document.querySelector(
                            targetId
                        );

                    if (!targetSection) {
                        return;
                    }

                    e.preventDefault();


                    // Remove active
                    document.querySelectorAll(
                        'nav a'
                    ).forEach(l => {

                        l.classList.remove(
                            'active'
                        );

                    });


                    // Add active
                    this.classList.add(
                        'active'
                    );


                    // Smooth scroll
                    window.scrollTo({

                        top:
                            targetSection.offsetTop -
                            100,

                        behavior:
                            'smooth'

                    });

                }
            );

        });


        // =====================================================
        // SCROLL TO TOP
        // =====================================================

        if (scrollTopBtn) {

            scrollTopBtn.addEventListener(
                'click',
                function (e) {

                    e.preventDefault();

                    window.scrollTo({

                        top: 0,

                        behavior:
                            'smooth'

                    });

                }
            );

        }


        // =====================================================
        // MOBILE IMPROVEMENTS
        // =====================================================

        let touchStartY = 0;
        let touchEndY = 0;


        document.addEventListener(
            'touchstart',
            function (e) {

                if (
                    e.changedTouches &&
                    e.changedTouches.length
                ) {

                    touchStartY =
                        e.changedTouches[0].screenY;

                }

            },
            { passive: true }
        );


        document.addEventListener(
            'touchend',
            function (e) {

                if (
                    e.changedTouches &&
                    e.changedTouches.length
                ) {

                    touchEndY =
                        e.changedTouches[0].screenY;

                }

            },
            { passive: true }
        );


        // =====================================================
        // DONATION BUTTON MOBILE POSITION
        // =====================================================

        function checkDonateButtonVisibility() {

            const donateButton =
                document.querySelector(
                    '.donate-button'
                );

            if (!donateButton) {
                return;
            }

            const windowHeight =
                window.innerHeight;

            if (windowHeight < 600) {

                donateButton.style.top = '70%';

            } else {

                donateButton.style.top = '50%';

            }
        }


        // Initial position
        checkDonateButtonVisibility();


        // =====================================================
        // HEADER AUTO HIDE ON MOBILE
        // =====================================================

        let lastScrollTop = 0;

        window.addEventListener(
            'scroll',
            function () {

                if (!header) {
                    return;
                }

                const scrollTop =
                    window.pageYOffset ||
                    document.documentElement.scrollTop;


                // Hide header while scrolling down
                if (
                    scrollTop > lastScrollTop &&
                    scrollTop > 100
                ) {

                    header.style.transform =
                        'translateY(-100%)';

                } else {

                    header.style.transform =
                        'translateY(0)';

                }


                if (scrollTop > 50) {

                    header.classList.add(
                        'scrolled'
                    );

                } else {

                    header.classList.remove(
                        'scrolled'
                    );

                }


                lastScrollTop =
                    Math.max(scrollTop, 0);


                // Scroll button
                if (scrollTopBtn) {

                    if (scrollTop > 300) {

                        scrollTopBtn.classList.add(
                            'active'
                        );

                    } else {

                        scrollTopBtn.classList.remove(
                            'active'
                        );

                    }
                }


                // Donation button
                checkDonateButtonVisibility();

            },
            { passive: true }
        );


        // =====================================================
        // PREVENT UNWANTED ZOOM ON INPUTS
        // =====================================================

        document.addEventListener(
            'touchstart',
            function (e) {

                const target =
                    e.target;

                if (
                    target &&
                    (
                        target.tagName === 'INPUT' ||
                        target.tagName === 'TEXTAREA'
                    )
                ) {

                    document.body.style.zoom =
                        '100%';

                }

            },
            { passive: true }
        );


        // =====================================================
        // SCROLL PERFORMANCE
        // =====================================================

        let ticking = false;

        window.addEventListener(
            'scroll',
            function () {

                if (!ticking) {

                    window.requestAnimationFrame(
                        function () {

                            ticking = false;

                        }
                    );

                    ticking = true;
                }

            },
            { passive: true }
        );

    }
);


// =========================================================
// GLOBAL SCROLL TO TOP
// =========================================================

function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: 'smooth'

    });
}


// =========================================================
// COPY TOAST CSS - Inject automatically
// =========================================================

(function addCopyToastStyles() {

    const style =
        document.createElement('style');

    style.textContent = `

        .copy-toast {
            position: fixed;
            left: 50%;
            bottom: 30px;

            transform:
                translate(-50%, 20px);

            background:
                rgba(20, 20, 20, 0.95);

            color: #fff;

            padding:
                13px 20px;

            border-radius:
                14px;

            font-size:
                14px;

            font-weight:
                700;

            display:
                flex;

            align-items:
                center;

            gap:
                8px;

            z-index:
                99999;

            opacity:
                0;

            pointer-events:
                none;

            box-shadow:
                0 10px 35px
                rgba(0, 0, 0, 0.35);

            transition:
                opacity 0.3s ease,
                transform 0.3s ease;

            white-space:
                nowrap;
        }

        .copy-toast.show {
            opacity:
                1;

            transform:
                translate(-50%, 0);
        }

        .copy-toast i {
            color:
                #34c759;

            font-size:
                18px;
        }

        @media (max-width: 600px) {

            .copy-toast {
                bottom:
                    20px;

                max-width:
                    calc(100% - 30px);

                white-space:
                    normal;

                text-align:
                    center;

                justify-content:
                    center;

                font-size:
                    13px;
            }

        }

    `;

    document.head.appendChild(style);

})();
