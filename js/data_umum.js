// default tahun sekarang / new Date().getFullYear();
let currentYear = new Date().getFullYear();

const updateData = "1 Oktober 2025";

// tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})