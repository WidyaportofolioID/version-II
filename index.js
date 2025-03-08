document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navMenu = document.getElementById("nav-menu");
    const profileElement = document.querySelector(".profile");
    const nameElement = document.getElementById("profile-name");
    const descriptionElement = document.getElementById("profile-description");
    const aboutSection = document.querySelector(".about-section");
    const navLinks = document.querySelectorAll(".nav-link");
    const contactIcons = document.querySelectorAll(".contact-icon");

    // ✅ Toggle Menu Hamburger
    menuIcon?.addEventListener("click", () => navMenu?.classList.toggle("active"));

    // ✅ Efek masuk foto profil
    setTimeout(() => profileElement?.classList.add("show"), 500);

    // ✅ Fungsi Efek Mengetik
    async function typeEffect(element, text, speed) {
        element.innerHTML = "";
        for (let i = 0; i < text.length; i++) {
            element.innerHTML += text[i];
            await new Promise(resolve => setTimeout(resolve, speed));
        }
    }

    // ✅ Efek Fade-in
    function fadeInEffect(element) {
        element.style.opacity = "0";
        element.style.transition = "opacity 1s ease-in-out";
        setTimeout(() => element.style.opacity = "1", 500);
    }

    // ✅ Eksekusi Efek Mengetik dan Fade-in
    (async function startAnimation() {
        await typeEffect(nameElement, "Rina Widya Si", 100);
        fadeInEffect(nameElement);

        await typeEffect(descriptionElement, "I'm a Professional Developer & Designer", 100);
        fadeInEffect(descriptionElement);
    })();

    // ✅ Efek Fade-in Saat Scroll untuk About Section
    function checkScroll() {
        if (aboutSection && aboutSection.getBoundingClientRect().top < window.innerHeight / 1.3) {
            aboutSection.classList.add("show");
        }
    }

    window.addEventListener("scroll", checkScroll);

    // ✅ Smooth Scroll dan Navbar Aktif
    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY + 100;

        navLinks.forEach(link => {
            let section = document.querySelector(link.getAttribute("href"));
            if (section?.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                navLinks.forEach(nav => nav.classList.remove("active"));
                link.classList.add("active");
            }
        });
    });

    // ✅ Efek Hover di Contact Icons
    contactIcons.forEach(icon => {
        icon.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.2)";
            this.style.boxShadow = "0px 4px 15px rgba(255, 255, 255, 0.5)";
            this.style.transition = "all 0.3s ease";
        });
        icon.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "none";
        });
    });

    // ✅ Scroll ke atas saat halaman dimuat (Fix untuk HP, Tablet, Laptop, PC)
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
});