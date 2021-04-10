/** 
 * Kode Vanilla Javascript(Javascript Murni) Untuk Menambahkan Value
 * Pada Elemen HTML
*/

document.getElementById('nama').innerHTML = 'Hanif';

/**
 * Kode Jquery Untuk Menambahkan Value
 * Pada elemen HTML
 */

$('#nim').html('20190140109');

$(function () {
    console.log( "Hello" );
});

$("#hide").on("click", function () {
    $("#nama").hide();
});

$("#show").on("click", function () {
    $("#nama").show();
});

$("#toggle").on("click", function () {
    $("#nama").toggle();
});

$("#fadeIn").on("click", function () {
    $("#tanggal").fadeIn();
});

$("#fadeOut").on("click", function () {
    $("#tanggal").fadeOut();
});

$("#fadeToggle").on("click", function () {
    $("#tanggal").fadeToggle();
});

$("#slideUp").on("click", function () {
    $("#img").slideUp();
});

$("#slideDown").on("click", function () {
    $("#img").slideDown();
});

$("#slideToggle").on("click", function () {
    $("#img").slideToggle();
});
