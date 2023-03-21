var scrolled = 0;
var totalWidth = $(".allratings").innerWidth();

function previous(passedThis) {
    if (scrolled <= 0) {
        scrolled = 0;
        $('.allratings').scrollLeft(scrolled);
        $(".prevBtn").attr("disabled", true);
        $(".nextBtn").attr("disabled", false);
    } else {
        scrolled -= 200;
        $('.allratings').scrollLeft(scrolled);
        $(".prevBtn").attr("disabled", false);
        $(".nextBtn").attr("disabled", false);
    }

}

function next(passedThis) {
    if (scrolled > totalWidth) {
        scrolled = totalWidth;
        $('.allratings').scrollLeft(scrolled);
        $(".nextBtn").attr("disabled", true);
        $(".prevBtn").attr("disabled", false);
    } else {
        scrolled += 200;
        $('.allratings').scrollLeft(scrolled);
        $(".prevBtn").attr("disabled", false);
        $(".nextBtn").attr("disabled", false);
    }
}




function showAll(passedElem) {
    $(".tableholder").addClass("full_length");
    $(".tableholder").removeClass("tableholder");
    $(passedElem).parent(".showmorebtnholder").remove();
}


$(".accTitleBar").click(function () {
    if ($(this).parent(".accordiontab").children(".accAnswer").hasClass("fullheight")) {
        $(this).children(".accIcon").html("+");
        $(this).parent(".accordiontab").children(".accAnswer").removeClass("fullheight");

        let div = $(this).parent(".accordiontab").children(".accAnswer");
        if (div.height() == 0) {
            div.animate({
                height: div.prop('scrollHeight')
            });
        } else {
            div.animate({
                height: 0
            });
        }
    } else {
        $(this).children(".accIcon").html("-");
        $(this).parent(".accordiontab").children(".accAnswer").addClass("fullheight");


        let div = $(this).parent(".accordiontab").children(".accAnswer");
        if (div.height() == 0) {
            div.animate({
                height: div.prop('scrollHeight')
            });
        } else {
            div.animate({
                height: 0
            });
        }
    }
});













function startVideo(passedElem) {
    if ($(passedElem).children(".cardVideo").hasClass("d-none")) {

        $(passedElem).children(".cardVideo").removeClass("d-none");
        $(passedElem).children(".cardVideo").trigger('play');

    } else {

        $(passedElem).children(".cardVideo").addClass("d-none");
        $(passedElem).children(".cardVideo").get(0).pause();

    }
}




$(".plantabline").click(function () {
    $(".plantabline").removeClass("activeplan");
    $(this).addClass("activeplan");
    let dataId = $(this).attr("data-id");

    if (dataId == 'tab1') {
        $(".circularSvg").addClass("d-none");
        $(".svgCircle1").removeClass("d-none");
    }

    if (dataId == 'tab2') {
        $(".circularSvg").addClass("d-none");
        $(".svgCircle2").removeClass("d-none");
    }

    if (dataId == 'tab3') {
        $(".circularSvg").addClass("d-none");
        $(".svgCircle3").removeClass("d-none");
    }
});






function showSubMenu(passedThis) {
    if ($(passedThis).children(".arrowtext").hasClass("arrowed")) {
        $(passedThis).children(".arrowtext").removeClass("arrowed");
        $(passedThis).children(".detailedSubMenu").addClass("d-none");
    }
    else {
        $(passedThis).children(".arrowtext").addClass("arrowed");
        $(passedThis).children(".detailedSubMenu").removeClass("d-none");
    }
}



function showSubMobileMenu(passedThis) {
    if ($(passedThis).children(".arrowtext").hasClass("arrowed")) {
        $(passedThis).children(".arrowtext").removeClass("arrowed");
        $(passedThis).children(".detailedSubMobileMenu").addClass("d-none");
    }
    else {
        $(passedThis).children(".arrowtext").addClass("arrowed");
        $(passedThis).children(".detailedSubMobileMenu").removeClass("d-none");
    }
}





function showPie(passedThis) {
    $(".mobilePlanTab").removeClass("activeTab");
    $(passedThis).addClass("activeTab");
    let dataId = $(passedThis).attr("data-id");
    $(".stockDetails").addClass("d-none");
    $("." + dataId).removeClass("d-none");

    console.log(dataId);
    if (dataId == 'stock1') {
        $(".pie-chart").css("background", "radial-gradient(circle closest-side,white 0,white 34.16%,transparent 34.16%,transparent 61%,white 0), conic-gradient(from 0deg, #1A1A1A 0, #1A1A1A 32.8%, #494949 0, #494949 62%, #6e6e6e 0, #6e6e6e 80%, #979797 0, #979797 92%, #dddddd 0, #dddddd 100%)");
    }
    if (dataId == 'stock2') {
        $(".pie-chart").css("background", "radial-gradient(circle closest-side, white 0, white 34.16%, transparent 34.16%, transparent 61%, white 0), conic-gradient(from 0deg, #1A1A1A 0, #1A1A1A 40%, #494949 0, #494949 66%, #6e6e6e 0, #6e6e6e 78%, #979797 0, #979797 88%, #dddddd 0, #dddddd 100%)");
    }
    if (dataId == 'stock3') {
        $(".pie-chart").css("background", "radial-gradient(circle closest-side, white 0,white 34.16%, transparent 34.16%, transparent 61%, white 0), conic-gradient(from 0deg, #1A1A1A 0, #1A1A1A 48%, #494949 0, #494949 80%, #6e6e6e 0, #6e6e6e 90%, #dddddd 0, #dddddd 100%)");
    }
}

function initCarousel(carouselClass, prevBtnClass, nextBtnClass) {
    var slideIndex = 0;
    var carousel = document.querySelector(carouselClass);
    var slides = carousel.getElementsByClassName("carousel-slide");
    var prevBtn = document.querySelector(prevBtnClass);
    var nextBtn = document.querySelector(nextBtnClass);
  
    showSlide(slideIndex);
  
    prevBtn.addEventListener("click", function () {
      changeSlide(-1);
    });
    nextBtn.addEventListener("click", function () {
      changeSlide(1);
    });
  
    function showSlide(n) {
      var i;
      if (n >= slides.length) {
        slideIndex = 0;
      }
      if (n < 0) {
        slideIndex = slides.length - 1;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      slides[slideIndex].style.display = 'block';
    }
  
    function changeSlide(n) {
      showSlide(slideIndex += n);
    }
  }
  
  initCarousel('.carousel-1', '.carousel-1-prev', '.carousel-1-next');
  initCarousel('.carousel-2', '.carousel-2-prev', '.carousel-2-next');