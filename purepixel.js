// WhatsApp Modal Toggle
function toggleContact() {
    const modal = document.getElementById('whatsapp-modal');
    if (modal.style.display === "block") {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Re-enable scroll
    } else {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Disable scroll when modal is open
    }
}

// Close modal if clicking background
window.onclick = function(event) {
    const modal = document.getElementById('whatsapp-modal');
    if (event.target == modal) {
        toggleContact();
    }
}

// Scroll Reveal Logic
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;
        let elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
// Initial check in case elements are already in view
window.onload = reveal;