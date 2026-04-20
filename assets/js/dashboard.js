document.addEventListener("DOMContentLoaded", () => {
    // Mobile sidebar toggle
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarNav = document.getElementById('sidebarNav');
    const sections = document.querySelectorAll('.dashboard-section');
    const dashboardTitle = document.querySelector('.dashboard-top-nav h4');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('d-none');
            sidebar.classList.toggle('d-block');
        });
    }

    // Section Switching Logic
    if (sidebarNav) {
        const navLinks = sidebarNav.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const sectionId = link.getAttribute('data-section');
                if (!sectionId) return;

                // Update Active Link UI
                navLinks.forEach(l => {
                    l.classList.remove('active', 'text-theme');
                    l.classList.add('text-muted');
                    l.style.color = ''; // Reset inline style
                });
                
                link.classList.add('active', 'text-theme');
                link.classList.remove('text-muted');
                link.style.color = 'var(--text-color)';

                // Show/Hide Sections
                sections.forEach(section => {
                    section.classList.add('d-none');
                    section.classList.remove('active-section');
                });

                const targetSection = document.getElementById(`${sectionId}-section`);
                if (targetSection) {
                    targetSection.classList.remove('d-none');
                    targetSection.classList.add('active-section');
                    
                    // Update Header Title
                    dashboardTitle.textContent = link.textContent.trim();
                }

                // Close sidebar on mobile
                if (window.innerWidth < 992 && sidebar) {
                    sidebar.classList.add('d-none');
                    sidebar.classList.remove('d-block');
                }
            });
        });
    }

    // Mock functionality: Sign Waiver
    const waiverBtns = document.querySelectorAll('.sign-waiver-btn');
    waiverBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            btn.innerHTML = '<i class="bi bi-check-circle-fill"></i> Verified';
            btn.classList.remove('btn-outline-primary');
            btn.classList.add('btn-success', 'text-white');
            btn.style.pointerEvents = 'none';
        });
    });
});

