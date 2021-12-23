//SCRIPT FOR MAKING RESPONSIVE NAVBAR FOR MOBILE
//
//
//
//
//
const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.links');
        const navLinks = document.querySelectorAll('.links li');
        //TOGGLE NAV
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            //ANIMATE LINKS
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ''
                } else {
                    link.style.animation = `navLinkFade 1s ease forwards ${index/6}s`;
                }
            });
            //BURGER ANIMATION
            burger.classList.toggle('toggle');
        });
    }
    //
    //
navSlide();
//
//
// SCRIPT FOR MAKING POPUP NAVBAR SLIDE DOWN
//
//
// 
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if ($('body,html').scrollTop() > 770) {
        $('.popup').css('top', '0');
    } else {
        $('.popup').css('top', '-130px');
    }
}


//
//
// CHECKBOX SCRIPT
//
//function check(input)
$('input[class="question"]').on('click', function(e) {
    $('input[class="question"]').prop('checked', false);
    $(this).prop('checked', true);
});

$('input[class="submit"]').on('click', function(e) {
    $('.signature').css('display', 'block');
    setTimeout(
        function() {
            $('.contact-container').css('transform', 'translateY(120%)')
            $('.contact-thank').css('display', 'block')
        }, 2500);
    setTimeout(
        function() {
            $('.contact-container').css('display', 'none')
            $('.contact-thank').css('transform', 'translateY(0%)')
        }, 3700);
});