function onload() {
    $('.nav-icon').on('click', function () {
        $('.nav-icon').toggleClass('open');
    });
    $('.nav-side a').on('click', function () {
        $('.nav-side').toggleClass('open-nav');
        $('.nav-icon').toggleClass('open');
    });
    $('.carousel').carousel({
        fullWidth: true,
        indicators: true
    });    
    //autoplay()
    $('.scrollspy').scrollSpy({
        scrollOffset:75
    });
}
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}

function navBarClick() {
    $('.nav-side').toggleClass('open-nav');
}