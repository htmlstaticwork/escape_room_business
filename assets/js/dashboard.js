document.addEventListener("DOMContentLoaded", () => {
    // Mobile sidebar toggle
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('d-none');
            sidebar.classList.toggle('d-block');
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
