const links = document.querySelectorAll('.js-scroll');

links.forEach(function (elem) {
    elem.addEventListener('click', smoothScroll)
});


function smoothScroll(e) {
    e.preventDefault();
    const link = this.getAttribute("href");
    const offsetTop = document.querySelector(link).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}



