document.addEventListener('DOMContentLoaded', function () {
    // Accordion logic
    const categories = document.querySelectorAll('.fm-category-title');
    categories.forEach(category => {
        category.addEventListener('click', function () {
            const parent = this.parentElement;
            parent.classList.toggle('active');
        });
    });

    // Open one by default
    document.querySelectorAll('.fm-category')[2]?.classList.add('active');

    // Toggle sidebar
    const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
    const sidebarWrapper = document.getElementById('sidebarWrapper');
    const closeSidebarCanvasBtn = document.getElementById('closeSidebarCanvasBtn'); // ✅ new button

    toggleSidebarBtn?.addEventListener('click', () => {
        sidebarWrapper?.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    closeSidebarCanvasBtn?.addEventListener('click', () => {
        sidebarWrapper?.classList.remove('show');
        document.body.style.overflow = '';
    });

    // Optional: click outside to close
    sidebarWrapper?.addEventListener('click', function (e) {
        if (e.target === sidebarWrapper) {
            sidebarWrapper.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
});
