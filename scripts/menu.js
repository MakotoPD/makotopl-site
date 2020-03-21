
i = 0

$('.menu_button').click( () => {
    $('.btn').toggleClass('is_active')
    $('.mobile_menu').toggleClass('opened_menu')
    i=i+1;
});

$('.mm').click( () => {
    if (i==1) {
        $('.btn').toggleClass('is_active')
        $('.mobile_menu').toggleClass('opened_menu')
        i=i-1;
    }
})

$('.quick_btn').click( () => {
    $('.bottom_menu').toggleClass('show');
    $('.dark_bg').toggleClass('d_n');
})

$('.x_box').click( () => {
    $('.bottom_menu').toggleClass('show');
    $('.dark_bg').toggleClass('d_n');
})

$('.dark_bg').click( () => {
    $('.bottom_menu').toggleClass('show');
    $('.dark_bg').toggleClass('d_n');
})

