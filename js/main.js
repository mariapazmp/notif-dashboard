$( document ).ready(function() {
    toggleSubmenu();
    collapseSidebar();
    changeViewMode();

    toggleMobileSidebar();
    expandSearchBar();
});

function changeViewMode() {
    $(".change-view-mode").on('click', function (e) {
        $(".templates-list").toggleClass("view-mode-list");
    });
}

function expandSearchBar() {
    $(".search-bar i.fa-search").on('click', function (e) {
        $(".search-bar").toggleClass("active");
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

function collapseSidebar() {
    $(".btn-collapse").on("click", function () {
        $("section.sidebar").toggleClass("hidden");
        $(this).toggleClass("active");
    })
}