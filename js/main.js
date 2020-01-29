$( document ).ready(function() {
    console.log("Ready!");
    toggleSubmenu();
    // Mobile functions
    toggleMobileSidebar();
    changeViewMode();
    expandSearchBar();
});

function changeViewMode() {
}

function expandSearchBar() {
    $(".search-bar").on('click', function () {
        $(this).toggleClass("active");
    });
}

function toggleSubmenu() {
    $(".m-parent > a").on('click', function () {
        $(".m-level-1.m-parent").toggleClass("nav-menu__item--opened");
    });
}

function toggleMobileSidebar() {
    $(".hamburger__ic-menu").on('click', function () {
        $(".overlay").toggleClass("active");
        $("section.sidebar").toggleClass("mobile-active");
    });

    $(".overlay").on('click', function () {
        $(".overlay").removeClass("active");
        $("section.sidebar").removeClass("mobile-active");
    });
}