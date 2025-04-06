
function toggleDonationPopup() {
    const popup = document.getElementById('donation-popup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}

function copyText(elementId) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert('✅ تم نسخ النص: ' + text);
    }).catch(() => {
        alert('❌ فشل في النسخ');
    });
}



