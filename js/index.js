fetch("partials/header.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("site-header").innerHTML = data;
    })
    .catch((error) => {
        console.error("Error loading header:", error);
    });

// header toggle menu code 
function toggleMenu() {
    const nav = document.getElementById("mainNav");
    nav.classList.toggle("show");
}


// site-footer code
fetch("partials/footer.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("site-footer").innerHTML = data;
    })
    .catch((error) => {
        console.error("Error loading footer:", error);
    });
// end of site-footer code

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });
});

// new arrival product card  futching code
fetch("partials/new-arrival-product-card.html")
    .then((res) => res.text())
    .then((html) => {
        document.getElementById("product-list").innerHTML += html;
    });
// recomanded-products futching code
fetch("partials/recomanded-products.html")
    .then((res) => res.text())
    .then((html) => {
        document.getElementById("recomanded-products-list").innerHTML += html;
    });
// ranking-products-card futching code
fetch("partials/ranking-products-card.html")
    .then((res) => res.text())
    .then((html) => {
        document.getElementById("ranking-products-card-list").innerHTML += html;
    });

//  Instagram Carousel Section 
const swiper = new Swiper('.instaSwiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
        576: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        992: { slidesPerView: 5 },
        1200: { slidesPerView: 6 }
    }
});
//   end of Instagram Carousel Section
// Load Sidebar & initialize canvas + accordion
fetch("partials/sidebar.html")
    .then((res) => res.text())
    .then((data) => {
        document.getElementById("sidebar-placeholder").innerHTML = data;

        const toggleBtn = document.getElementById("toggleSidebarBtn");
        const sidebarWrapper = document.getElementById("sidebarWrapper");
        const closeBtn = document.getElementById("closeSidebarCanvasBtn"); // ✅ moved inside

        // Canvas open
        toggleBtn?.addEventListener("click", () => {
            sidebarWrapper?.classList.add("show");
            document.body.style.overflow = "hidden";
        });

        // Canvas close (❗ this must be inside here)
        closeBtn?.addEventListener("click", () => {
            sidebarWrapper?.classList.remove("show");
            document.body.style.overflow = "";
        });

        // Optional: close when clicking outside
        sidebarWrapper?.addEventListener("click", function (e) {
            if (e.target === sidebarWrapper) {
                sidebarWrapper.classList.remove("show");
                document.body.style.overflow = "";
            }
        });

        // Accordion logic
        const headers = document.querySelectorAll(".fm-category-title");
        headers.forEach(header => {
            header.addEventListener("click", function () {
                const parent = this.parentElement;
                parent.classList.toggle("active");
            });
        });

        document.querySelectorAll('.fm-category')[2]?.classList.add('active');
    });
window.addEventListener('resize', function () {
    const sidebarWrapper = document.getElementById("sidebarWrapper");
    if (window.innerWidth >= 992 && sidebarWrapper?.classList.contains("show")) {
        sidebarWrapper.classList.remove("show");
        document.body.style.overflow = "";
    }
});
