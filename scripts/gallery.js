let wszystko = $('#wszystko');
let loga = $('#loga');
let banery = $('#banery');
let tapety = $('#tapety');
let inne = $('#inne');

i=0;

wszystko.click( function () {
    $('.loga').removeClass('hidden');
    $('.baner').removeClass('hidden');
    $('.tapeta').removeClass('hidden');
    $('.inne').removeClass('hidden');
})

loga.click( function () {
    $('.loga').removeClass('hidden');
    $('.baner').addClass('hidden');
    $('.tapeta').addClass('hidden');
    $('.inne').addClass('hidden');
})

banery.click( function () {
    $('.loga').addClass('hidden');
    $('.baner').removeClass('hidden');
    $('.tapeta').addClass('hidden');
    $('.inne').addClass('hidden');
})

tapety.click( function () {
    $('.loga').addClass('hidden');
    $('.baner').addClass('hidden');
    $('.tapeta').removeClass('hidden');
    $('.inne').addClass('hidden');
})

inne.click( function () {
    $('.loga').addClass('hidden');
    $('.baner').addClass('hidden');
    $('.tapeta').addClass('hidden');
    $('.inne').removeClass('hidden');
})

$('.obraz1').click(function () {
    $('.obraz1').toggleClass('zoom_obraz');
    $('.baner1').toggleClass('zoom_img');
    $('.baner1').css({"transform":"scale(1)"});
})

$('.obraz2').click(function () {
    $('.obraz2').toggleClass('zoom_obraz');
    $('.baner2').toggleClass('zoom_img');
    $('.baner2').css({"transform":"scale(1)"});
})

$('.obraz3').click(function () {
    $('.obraz3').toggleClass('zoom_obraz');
    $('.baner3').toggleClass('zoom_img');
    $('.baner3').css({"transform":"scale(1)"});
})

$('.obraz4').click(function () {
    $('.obraz4').toggleClass('zoom_obraz');
    $('.baner4').toggleClass('zoom_img');
    $('.baner4').css({"transform":"scale(1)"});
})

$('.obraz5').click(function () {
    $('.obraz5').toggleClass('zoom_obraz');
    $('.baner5').toggleClass('zoom_img');
    $('.baner5').css({"transform":"scale(1)"});
})

$('.obraz6').click(function () {
    $('.obraz6').toggleClass('zoom_obraz');
    $('.baner6').toggleClass('zoom_img');
    $('.baner6').css({"transform":"scale(1)"});
})

$('.obraz7').click(function () {
    $('.obraz7').toggleClass('zoom_obraz');
    $('.baner7').toggleClass('zoom_img');
    $('.baner7').css({"transform":"scale(1)"});
})

$('.obraz8').click(function () {
    $('.obraz8').toggleClass('zoom_obraz');
    $('.baner8').toggleClass('zoom_img');
    $('.baner8').css({"transform":"scale(1)"});
})

$('.obraz9').click(function () {
    $('.obraz9').toggleClass('zoom_obraz');
    $('.baner9').toggleClass('zoom_img');
    $('.baner9').css({"transform":"scale(1)"});
})

$('.obraz10').click(function () {
    $('.obraz10').toggleClass('zoom_obraz');
    $('.baner10').toggleClass('zoom_img');
    $('.baner10').css({"transform":"scale(1)"});
})

$('.obraz11').click(function () {
    $('.obraz11').toggleClass('zoom_obraz');
    $('.baner11').toggleClass('zoom_img');
    $('.baner11').css({"transform":"scale(1)"});
})

$('.obraz12').click(function () {
    $('.obraz12').toggleClass('zoom_obraz');
    $('.baner12').toggleClass('zoom_img');
    $('.baner12').css({"transform":"scale(1)"});
})

$('.obraz13').click(function () {
    $('.obraz13').toggleClass('zoom_obraz');
    $('.baner13').toggleClass('zoom_img');
    $('.baner13').css({"transform":"scale(1)"});
})

$('.obraz14').click(function () {
    $('.obraz14').toggleClass('zoom_obraz');
    $('.baner14').toggleClass('zoom_img');
    $('.baner14').css({"transform":"scale(1)"});
})

$('.obraz15').click(function () {
    $('.obraz15').toggleClass('zoom_obraz');
    $('.tapeta1').toggleClass('zoom_img');
    $('.tapeta1').css({"transform":"scale(1)"});
})

$('.obraz16').click(function () {
    $('.obraz16').toggleClass('zoom_obraz');
    $('.tapeta2').toggleClass('zoom_img');
    $('.tapeta2').css({"transform":"scale(1)"});
})

$('.obraz17').click(function () {
    $('.obraz17').toggleClass('zoom_obraz');
    $('.tapeta3').toggleClass('zoom_img');
    $('.tapeta3').css({"transform":"scale(1)"});
})

$('.obraz18').click(function () {
    $('.obraz18').toggleClass('zoom_obraz');
    $('.tapeta4').toggleClass('zoom_img');
    $('.tapeta4').css({"transform":"scale(1)"});
})

$('.obraz19').click(function () {
    $('.obraz19').toggleClass('zoom_obraz');
    $('.tapeta5').toggleClass('zoom_img');
    $('.tapeta5').css({"transform":"scale(1)"});
})

$('.obraz20').click(function () {
    $('.obraz20').toggleClass('zoom_obraz');
    $('.loga1').toggleClass('zoom_img');
    $('.loga1').css({"transform":"scale(1)"});
})

$('.obraz21').click(function () {
    $('.obraz21').toggleClass('zoom_obraz');
    $('.loga2').toggleClass('zoom_img');
    $('.loga2').css({"transform":"scale(1)"});
})

$('.obraz22').click(function () {
    $('.obraz22').toggleClass('zoom_obraz');
    $('.loga3').toggleClass('zoom_img');
    $('.loga3').css({"transform":"scale(1)"});
})

$('.obraz23').click(function () {
    $('.obraz23').toggleClass('zoom_obraz');
    $('.loga4').toggleClass('zoom_img');
    $('.loga4').css({"transform":"scale(1)"});
})

$('.obraz24').click(function () {
    $('.obraz24').toggleClass('zoom_obraz');
    $('.loga5').toggleClass('zoom_img');
    $('.loga5').css({"transform":"scale(1)"});
})

$('.obraz25').click(function () {
    $('.obraz25').toggleClass('zoom_obraz');
    $('.loga6').toggleClass('zoom_img');
    $('.loga6').css({"transform":"scale(1)"});
})

$('.obraz26').click(function () {
    $('.obraz26').toggleClass('zoom_obraz');
    $('.inne1').toggleClass('zoom_img');
    $('.inne1').css({"transform":"scale(1)"});
})

$('.obraz27').click(function () {
    $('.obraz27').toggleClass('zoom_obraz');
    $('.inne1').toggleClass('zoom_img');
    $('.inne1').css({"transform":"scale(1)"});
})

$('.obraz28').click(function () {
    $('.obraz28').toggleClass('zoom_obraz');
    $('.inne1').toggleClass('zoom_img');
    $('.inne1').css({"transform":"scale(1)"});
})

$('.obraz').click( function () {
    $('.bg_for_img').toggleClass('bg_for_img_active');
})

$('.bg_for_img').click( function () {
    $('.obraz').removeClass('zoom_obraz');
    $('img').removeClass('zoom_img');
    $('.bg_for_img').removeClass('bg_for_img_active');
})