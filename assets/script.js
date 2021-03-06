var viewBtn = $(".view-page");
var mainContent = $(".main-content");
var startPg = $(".start-page");

viewBtn.click(() => {
  mainContent.addClass("animated fadeInUp");
  mainContent.attr("style", "display: block");
  startPg.attr("style", "display: none");
});

var slideOneBtn = $("li[data-slide-to='0']");
var portImgOne = $("#port-item-1");

var slideTwoBtn = $("li[data-slide-to='1']");
var portImgTwo = $("#port-item-2");

var slideThreeBtn = $("li[data-slide-to='2']");
var portImgThree = $("#port-item-3");

var slideFourBtn = $("li[data-slide-to='3']");
var portImgFour = $("#port-item-4");

//display slide on click
slideOneBtn.click(() => {
  console.log("button one works");
  slideOneBtn.addClass("active");
  slideTwoBtn.removeClass("active");
  slideThreeBtn.removeClass("active");
  portImgOne.addClass("active");
  portImgTwo.removeClass("active");
  portImgThree.removeClass("active");
  slideFourBtn.removeClass("active");
  portImgFour.removeClass("active");
});

slideTwoBtn.click(() => {
  slideTwoBtn.addClass("active");
  slideOneBtn.removeClass("active");
  slideThreeBtn.removeClass("active");
  portImgTwo.addClass("active");
  portImgOne.removeClass("active");
  portImgThree.removeClass("active");
  slideFourBtn.removeClass("active");
  portImgFour.removeClass("active");
});

slideThreeBtn.click(() => {
  slideThreeBtn.addClass("active");
  slideTwoBtn.removeClass("active");
  slideOneBtn.removeClass("active");
  slideFourBtn.removeClass("active");
  portImgThree.addClass("active");
  portImgTwo.removeClass("active");
  portImgOne.removeClass("active");
  portImgFour.removeClass("active");
});

slideFourBtn.click(() => {
  slideFourBtn.addClass("active");
  slideThreeBtn.removeClass("active");
  slideTwoBtn.removeClass("active");
  slideOneBtn.removeClass("active");
  portImgFour.addClass("active");
  portImgThree.removeClass("active");
  portImgTwo.removeClass("active");
  portImgOne.removeClass("active");
});

//display contact modal on click
$(".contact").click(() => {
  $(".modal").attr("style", "display:block;");
});

$(".exit-modal").click(() => {
  $(".modal").attr("style", "display:none;");
});
